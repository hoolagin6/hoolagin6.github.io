let scene, camera, renderer, cube;
let textures = {};
let originalImages = {
    top: null,
    bottom: null,
    front: null,
    back: null,
    side: null
};
let bgColor = 0x00ff00;
let angle = 0;
let spinSpeed = 0.01; // initial spin speed
let animationId;
let isSpinning = true;

const maxRPM = 60; // maximum RPM

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(bgColor);

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(1, 1);
    document.getElementById('canvas').appendChild(renderer.domElement);

    const defaultTexture = createDefaultTexture();

    const materials = [
        new THREE.MeshBasicMaterial({ map: defaultTexture }), // right
        new THREE.MeshBasicMaterial({ map: defaultTexture }), // left
        new THREE.MeshBasicMaterial({ map: defaultTexture }), // top
        new THREE.MeshBasicMaterial({ map: defaultTexture }), // bottom
        new THREE.MeshBasicMaterial({ map: defaultTexture }), // front
        new THREE.MeshBasicMaterial({ map: defaultTexture })  // back
    ];

    textures = {
        right: { texture: defaultTexture, material: materials[0] },
        left: { texture: defaultTexture, material: materials[1] },
        top: { texture: defaultTexture, material: materials[2] },
        bottom: { texture: defaultTexture, material: materials[3] },
        front: { texture: defaultTexture, material: materials[4] },
        back: { texture: defaultTexture, material: materials[5] }
    };

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    window.addEventListener('resize', onWindowResize);
    onWindowResize();

    animate();

    initEventListeners();
}

function createDefaultTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');

    const squareSize = 32;
    for (let x = 0; x < canvas.width; x += squareSize) {
        for (let y = 0; y < canvas.height; y += squareSize) {
            const color = ((x / squareSize) % 2 === (y / squareSize) % 2) ? '#ffffff' : '#cccccc';
            context.fillStyle = color;
            context.fillRect(x, y, squareSize, squareSize);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.needsUpdate = true;
    return texture;
}

function onWindowResize() {
    const container = document.getElementById('canvasContainer');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const size = Math.min(width, height);

    renderer.setSize(size, size);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
}

function animate() {
    animationId = requestAnimationFrame(animate);

    if (isSpinning) {
        angle += spinSpeed;
        cube.rotation.y = angle;
    }

    renderer.render(scene, camera);
}

function initEventListeners() {
    setupDropZone('top');
    setupDropZone('front');
    setupDropZone('side');
    setupDropZone('back');
    setupDropZone('bottom');
    setupDropZone('global');

    document.getElementById('rotateTop').addEventListener('change', function() {
        updateFaceTexture('top', this.value);
    });
    document.getElementById('rotateFront').addEventListener('change', function() {
        updateFaceTexture('front', this.value);
    });
    document.getElementById('rotateSide').addEventListener('change', function() {
        updateFaceTexture('side', this.value);
    });
    document.getElementById('rotateBack').addEventListener('change', function() {
        updateFaceTexture('back', this.value);
    });
    document.getElementById('rotateBottom').addEventListener('change', function() {
        updateFaceTexture('bottom', this.value);
    });

    document.getElementById('bgColorButton').addEventListener('click', function() {
        document.getElementById('colorPicker').click();
    });

    document.getElementById('colorPicker').addEventListener('input', function() {
        bgColor = parseInt(this.value.substring(1), 16);
        scene.background = new THREE.Color(bgColor);
    });

    document.getElementById('fileInput').addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const target = document.getElementById('fileInput').dataset.target;
                handleImageLoad(target, event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    document.querySelector('#canvas').addEventListener('click', function() {
        isSpinning = !isSpinning;
    });

    // Setup dials
    const initialTilt = 20;
    const initialDialThetaTilt = initialTilt + 90;

    const initialSpinSpeed = 0.01;
    const initialRPM = (initialSpinSpeed * 1800) / Math.PI;
    const initialDialThetaRPM = (initialRPM / maxRPM) * 180;

    setupDial('tiltSVG', 'tiltHandle', 'tiltLine', 'tiltCircle', function(dial_theta) {
        const tilt = dial_theta - 90;
        cube.rotation.x = THREE.Math.degToRad(tilt);
    }, initialDialThetaTilt);

    setupDial('rpmSVG', 'rpmHandle', 'rpmLine', 'rpmCircle', function(dial_theta) {
        const RPM = (dial_theta / 180) * maxRPM;
        spinSpeed = (RPM * Math.PI) / 1800;
    }, initialDialThetaRPM);

    // Paste event listener
    document.addEventListener('paste', function(event) {
        const items = event.clipboardData.items;
        for (let item of items) {
            if (item.type.indexOf('image') !== -1) {
                const blob = item.getAsFile();
                const url = URL.createObjectURL(blob);
                handleImageLoad('global', url);
                break;
            }
        }
    });
}

function setupDial(svgId, handleId, lineId, circleId, updateFunction, initialDialTheta) {
    const svg = document.getElementById(svgId);
    const line = document.getElementById(lineId);
    const circle = document.getElementById(circleId);
    let isDragging = false;

    svg.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    function startDrag(e) {
        isDragging = true;
        drag(e);
    }

    function drag(e) {
        if (!isDragging) return;
        const rect = svg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        let raw_theta = Math.atan2(dy, -dx) * 180 / Math.PI;
        let dial_theta = 90 - raw_theta;
        dial_theta = Math.max(0, Math.min(180, dial_theta));
        updateFunction(dial_theta);
        setDialPosition(dial_theta);
    }

    function endDrag() {
        isDragging = false;
    }

    function setDialPosition(dial_theta) {
        const rad = dial_theta * Math.PI / 180;
        const x = 50 + 40 * Math.sin(rad - Math.PI / 2);
        const y = 50 - 40 * Math.cos(rad - Math.PI / 2);
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
    }

    updateFunction(initialDialTheta);
    setDialPosition(initialDialTheta);
}

function setupDropZone(face) {
    const dropZone = document.getElementById(`drop${face.charAt(0).toUpperCase() + face.slice(1)}`);

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#7FCA5C';
    });

    dropZone.addEventListener('dragleave', function() {
        this.style.borderColor = '#555';
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#555';

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                handleImageLoad(face, event.target.result);
            };
            reader.readAsDataURL(e.dataTransfer.files[0]);
        }
    });

    dropZone.addEventListener('click', function() {
        const fileInput = document.getElementById('fileInput');
        fileInput.dataset.target = face;
        fileInput.click();
    });
}

function handleImageLoad(face, src) {
    const img = new Image();
    img.onload = function() {
        if (face === 'global') {
            for (const f of ['top', 'bottom', 'front', 'back', 'side']) {
                originalImages[f] = src;
                const angle = document.getElementById(`rotate${f.charAt(0).toUpperCase() + f.slice(1)}`).value;
                updateFaceTexture(f, angle);
            }
        } else {
            originalImages[face] = src;
            const angle = document.getElementById(`rotate${face.charAt(0).toUpperCase() + face.slice(1)}`).value;
            updateFaceTexture(face, angle);
        }
    };
    img.src = src;

    const dropZone = document.getElementById(`drop${face.charAt(0).toUpperCase() + face.slice(1)}`);
    dropZone.style.backgroundImage = `url(${src})`;
    dropZone.style.backgroundSize = 'cover';
    dropZone.querySelector('.dropZoneText').style.display = 'none';
}

function updateFaceTexture(face, angle) {
    if (!originalImages[face]) return;

    const src = originalImages[face];
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(parseInt(angle) * Math.PI / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        const texture = new THREE.CanvasTexture(canvas);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.needsUpdate = true;

        if (face === 'top') {
            textures.top.texture = texture;
            textures.top.material.map = texture;
        } else if (face === 'bottom') {
            textures.bottom.texture = texture;
            textures.bottom.material.map = texture;
        } else if (face === 'front') {
            textures.front.texture = texture;
            textures.front.material.map = texture;
        } else if (face === 'back') {
            textures.back.texture = texture;
            textures.back.material.map = texture;
        } else if (face === 'side') {
            textures.left.texture = texture;
            textures.left.material.map = texture;
            textures.right.texture = texture;
            textures.right.material.map = texture;
        }

        const dropZone = document.getElementById(`drop${face.charAt(0).toUpperCase() + face.slice(1)}`);
        dropZone.style.backgroundImage = `url(${canvas.toDataURL()})`;
    };
    img.src = src;
}

init();