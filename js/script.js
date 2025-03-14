// Block colors with RGB values
const blockColors = [
    // Wool colors
    { type: 'wool', color: 'white', rgb: [249, 255, 254] },
    { type: 'wool', color: 'orange', rgb: [240, 118, 19] },
    { type: 'wool', color: 'magenta', rgb: [199, 78, 189] },
    { type: 'wool', color: 'light_blue', rgb: [58, 175, 217] },
    { type: 'wool', color: 'yellow', rgb: [254, 216, 61] },
    { type: 'wool', color: 'lime', rgb: [112, 185, 25] },
    { type: 'wool', color: 'pink', rgb: [243, 139, 170] },
    { type: 'wool', color: 'gray', rgb: [62, 68, 71] },
    { type: 'wool', color: 'light_gray', rgb: [157, 157, 151] },
    { type: 'wool', color: 'cyan', rgb: [21, 138, 145] },
    { type: 'wool', color: 'purple', rgb: [121, 42, 172] },
    { type: 'wool', color: 'blue', rgb: [53, 57, 157] },
    { type: 'wool', color: 'brown', rgb: [114, 71, 40] },
    { type: 'wool', color: 'green', rgb: [84, 109, 27] },
    { type: 'wool', color: 'red', rgb: [161, 39, 34] },
    { type: 'wool', color: 'black', rgb: [20, 21, 26] },
    // Terracotta colors (approximate)
    { type: 'terracotta', color: 'white', rgb: [209, 178, 161] },
    { type: 'terracotta', color: 'orange', rgb: [159, 82, 36] },
    { type: 'terracotta', color: 'magenta', rgb: [149, 87, 108] },
    { type: 'terracotta', color: 'light_blue', rgb: [112, 108, 138] },
    { type: 'terracotta', color: 'yellow', rgb: [186, 133, 35] },
    { type: 'terracotta', color: 'lime', rgb: [103, 117, 52] },
    { type: 'terracotta', color: 'pink', rgb: [160, 77, 78] },
    { type: 'terracotta', color: 'gray', rgb: [57, 41, 35] },
    { type: 'terracotta', color: 'light_gray', rgb: [135, 107, 98] },
    { type: 'terracotta', color: 'cyan', rgb: [87, 90, 92] },
    { type: 'terracotta', color: 'purple', rgb: [76, 62, 92] },
    { type: 'terracotta', color: 'blue', rgb: [76, 50, 35] },
    { type: 'terracotta', color: 'brown', rgb: [76, 50, 35] },
    { type: 'terracotta', color: 'green', rgb: [76, 82, 42] },
    { type: 'terracotta', color: 'red', rgb: [142, 60, 46] },
    { type: 'terracotta', color: 'black', rgb: [37, 22, 16] }
];

let availableBlocks;

// Body parts with coordinates and skin regions
const bodyParts = [
    {
        name: 'head', minX: -4, maxX: 3, minY: 24, maxY: 31, minZ: -4, maxZ: 3,
        faces: [
            { type: 'front', skinMinX: 8, skinMaxX: 15, skinMinY: 8, skinMaxY: 15 },
            { type: 'back', skinMinX: 24, skinMaxX: 31, skinMinY: 8, skinMaxY: 15 },
            { type: 'right', skinMinX: 0, skinMaxX: 7, skinMinY: 8, skinMaxY: 15 },
            { type: 'left', skinMinX: 16, skinMaxX: 23, skinMinY: 8, skinMaxY: 15 },
            { type: 'top', skinMinX: 8, skinMaxX: 15, skinMinY: 0, skinMaxY: 7 },
            { type: 'bottom', skinMinX: 16, skinMaxX: 23, skinMinY: 0, skinMaxY: 7 }
        ],
        accessory: [
            { type: 'front', skinMinX: 40, skinMaxX: 47, skinMinY: 8, skinMaxY: 15 },
            { type: 'back', skinMinX: 56, skinMaxX: 63, skinMinY: 8, skinMaxY: 15 },
            { type: 'right', skinMinX: 32, skinMaxX: 39, skinMinY: 8, skinMaxY: 15 },
            { type: 'left', skinMinX: 48, skinMaxX: 55, skinMinY: 8, skinMaxY: 15 },
            { type: 'top', skinMinX: 40, skinMaxX: 47, skinMinY: 0, skinMaxY: 7 },
            { type: 'bottom', skinMinX: 48, skinMaxX: 55, skinMinY: 0, skinMaxY: 7 }
        ]
    },
    {
        name: 'torso', minX: -4, maxX: 3, minY: 12, maxY: 23, minZ: -2, maxZ: 1,
        faces: [
            { type: 'front', skinMinX: 20, skinMaxX: 27, skinMinY: 20, skinMaxY: 31 },
            { type: 'back', skinMinX: 32, skinMaxX: 39, skinMinY: 20, skinMaxY: 31 },
            { type: 'right', skinMinX: 16, skinMaxX: 19, skinMinY: 20, skinMaxY: 31 },
            { type: 'left', skinMinX: 28, skinMaxX: 31, skinMinY: 20, skinMaxY: 31 },
            { type: 'top', skinMinX: 20, skinMaxX: 27, skinMinY: 16, skinMaxY: 19 },
            { type: 'bottom', skinMinX: 28, skinMaxX: 35, skinMinY: 16, skinMaxY: 19 }
        ],
        accessory: [
            { type: 'front', skinMinX: 20, skinMaxX: 27, skinMinY: 36, skinMaxY: 47 },
            { type: 'back', skinMinX: 32, skinMaxX: 39, skinMinY: 36, skinMaxY: 47 },
            { type: 'right', skinMinX: 16, skinMaxX: 19, skinMinY: 36, skinMaxY: 47 },
            { type: 'left', skinMinX: 28, skinMaxX: 31, skinMinY: 36, skinMaxY: 47 },
            { type: 'top', skinMinX: 20, skinMaxX: 27, skinMinY: 32, skinMaxY: 35 },
            { type: 'bottom', skinMinX: 28, skinMaxX: 35, skinMinY: 32, skinMaxY: 35 }
        ]
    },
    {
        name: 'rightArm', minX: -8, maxX: -5, minY: 12, maxY: 23, minZ: -2, maxZ: 1,
        faces: [
            { type: 'front', skinMinX: 44, skinMaxX: 47, skinMinY: 20, skinMaxY: 31 },
            { type: 'back', skinMinX: 52, skinMaxX: 55, skinMinY: 20, skinMaxY: 31 },
            { type: 'right', skinMinX: 40, skinMaxX: 43, skinMinY: 20, skinMaxY: 31 },
            { type: 'left', skinMinX: 48, skinMaxX: 51, skinMinY: 20, skinMaxY: 31 },
            { type: 'top', skinMinX: 44, skinMaxX: 47, skinMinY: 16, skinMaxY: 19 },
            { type: 'bottom', skinMinX: 48, skinMaxX: 51, skinMinY: 16, skinMaxY: 19 }
        ],
        accessory: [
            { type: 'front', skinMinX: 44, skinMaxX: 47, skinMinY: 36, skinMaxY: 47 },
            { type: 'back', skinMinX: 52, skinMaxX: 55, skinMinY: 36, skinMaxY: 47 },
            { type: 'right', skinMinX: 40, skinMaxX: 43, skinMinY: 36, skinMaxY: 47 },
            { type: 'left', skinMinX: 48, skinMaxX: 51, skinMinY: 36, skinMaxY: 47 },
            { type: 'top', skinMinX: 44, skinMaxX: 47, skinMinY: 32, skinMaxY: 35 },
            { type: 'bottom', skinMinX: 48, skinMaxX: 51, skinMinY: 32, skinMaxY: 35 }
        ]
    },
    {
        name: 'leftArm', minX: 4, maxX: 7, minY: 12, maxY: 23, minZ: -2, maxZ: 1,
        faces: [
            { type: 'front', skinMinX: 36, skinMaxX: 39, skinMinY: 52, skinMaxY: 63 },
            { type: 'back', skinMinX: 44, skinMaxX: 47, skinMinY: 52, skinMaxY: 63 },
            { type: 'right', skinMinX: 32, skinMaxX: 35, skinMinY: 52, skinMaxY: 63 },
            { type: 'left', skinMinX: 40, skinMaxX: 43, skinMinY: 52, skinMaxY: 63 },
            { type: 'top', skinMinX: 36, skinMaxX: 39, skinMinY: 48, skinMaxY: 51 },
            { type: 'bottom', skinMinX: 40, skinMaxX: 43, skinMinY: 48, skinMaxY: 51 }
        ],
        accessory: [
            { type: 'front', skinMinX: 52, skinMaxX: 55, skinMinY: 52, skinMaxY: 63 },
            { type: 'back', skinMinX: 60, skinMaxX: 63, skinMinY: 52, skinMaxY: 63 },
            { type: 'right', skinMinX: 48, skinMaxX: 51, skinMinY: 52, skinMaxY: 63 },
            { type: 'left', skinMinX: 56, skinMaxX: 59, skinMinY: 52, skinMaxY: 63 },
            { type: 'top', skinMinX: 52, skinMaxX: 55, skinMinY: 48, skinMaxY: 51 },
            { type: 'bottom', skinMinX: 56, skinMaxX: 59, skinMinY: 48, skinMaxY: 51 }
        ]
    },
    {
        name: 'rightLeg', minX: -4, maxX: -1, minY: 0, maxY: 11, minZ: -2, maxZ: 1,
        faces: [
            { type: 'front', skinMinX: 4, skinMaxX: 7, skinMinY: 20, skinMaxY: 31 },
            { type: 'back', skinMinX: 12, skinMaxX: 15, skinMinY: 20, skinMaxY: 31 },
            { type: 'right', skinMinX: 0, skinMaxX: 3, skinMinY: 20, skinMaxY: 31 },
            { type: 'left', skinMinX: 8, skinMaxX: 11, skinMinY: 20, skinMaxY: 31 },
            { type: 'top', skinMinX: 4, skinMaxX: 7, skinMinY: 16, skinMaxY: 19 },
            { type: 'bottom', skinMinX: 8, skinMaxX: 11, skinMinY: 16, skinMaxY: 19 }
        ],
        accessory: [
            { type: 'front', skinMinX: 4, skinMaxX: 7, skinMinY: 36, skinMaxY: 47 },
            { type: 'back', skinMinX: 12, skinMaxX: 15, skinMinY: 36, skinMaxY: 47 },
            { type: 'right', skinMinX: 0, skinMaxX: 3, skinMinY: 36, skinMaxY: 47 },
            { type: 'left', skinMinX: 8, skinMaxX: 11, skinMinY: 36, skinMaxY: 47 },
            { type: 'top', skinMinX: 4, skinMaxX: 7, skinMinY: 32, skinMaxY: 35 },
            { type: 'bottom', skinMinX: 8, skinMaxX: 11, skinMinY: 32, skinMaxY: 35 }
        ]
    },
    {
        name: 'leftLeg', minX: 0, maxX: 3, minY: 0, maxY: 11, minZ: -2, maxZ: 1,
        faces: [
            { type: 'front', skinMinX: 20, skinMaxX: 23, skinMinY: 52, skinMaxY: 63 },
            { type: 'back', skinMinX: 28, skinMaxX: 31, skinMinY: 52, skinMaxY: 63 },
            { type: 'right', skinMinX: 16, skinMaxX: 19, skinMinY: 52, skinMaxY: 63 },
            { type: 'left', skinMinX: 24, skinMaxX: 27, skinMinY: 52, skinMaxY: 63 },
            { type: 'top', skinMinX: 20, skinMaxX: 23, skinMinY: 48, skinMaxY: 51 },
            { type: 'bottom', skinMinX: 24, skinMaxX: 27, skinMinY: 48, skinMaxY: 51 }
        ],
        accessory: [
            { type: 'front', skinMinX: 4, skinMaxX: 7, skinMinY: 52, skinMaxY: 63 },
            { type: 'back', skinMinX: 12, skinMaxX: 15, skinMinY: 52, skinMaxY: 63 },
            { type: 'right', skinMinX: 0, skinMaxX: 3, skinMinY: 52, skinMaxY: 63 },
            { type: 'left', skinMinX: 8, skinMaxX: 11, skinMinY: 52, skinMaxY: 63 },
            { type: 'top', skinMinX: 4, skinMaxX: 7, skinMinY: 48, skinMaxY: 51 },
            { type: 'bottom', skinMinX: 8, skinMaxX: 11, skinMinY: 48, skinMaxY: 51 }
        ]
    }
];

// Find closest block color
function getClosestBlockColor(r, g, b, a) {
    if (a < 128) return null; // Skip transparent pixels
    let minDist = Infinity;
    let closestBlock = availableBlocks[0];
    for (const block of availableBlocks) {
        const [wr, wg, wb] = block.rgb;
        const dist = (r - wr) ** 2 + (g - wg) ** 2 + (b - wb) ** 2;
        if (dist < minDist) {
            minDist = dist;
            closestBlock = block;
        }
    }
    return closestBlock;
}

// Generate commands for a face
function generateFaceCommands(face, minX, maxX, minY, maxY, minZ, maxZ, imageData, isAccessory = false) {
    const { type, skinMinX, skinMaxX, skinMinY, skinMaxY } = face;
    let fixedCoord, loop1, loop2, fixedValue;

    // Determine offset for accessory layers
    let offset = { x: 0, y: 0, z: 0 };
    if (isAccessory) {
        switch (type) {
            case 'front': offset.z = -1; break;
            case 'back': offset.z = 1; break;
            case 'right': offset.x = -1; break;
            case 'left': offset.x = 1; break;
            case 'top': offset.y = 1; break;
            case 'bottom': offset.y = -1; break;
        }
    }

    // Define looping and fixed coordinates based on face type
    if (type === 'front' || type === 'back') {
        fixedCoord = 'z';
        fixedValue = (type === 'front') ? minZ : maxZ;
        loop1 = 'y';
        loop2 = 'x';
    } else if (type === 'right' || type === 'left') {
        fixedCoord = 'x';
        fixedValue = (type === 'right') ? minX : maxX;
        loop1 = 'y';
        loop2 = 'z';
    } else if (type === 'top' || type === 'bottom') {
        fixedCoord = 'y';
        fixedValue = (type === 'top') ? maxY : minY;
        loop1 = 'z';
        loop2 = 'x';
    }

    const loop1Min = loop1 === 'y' ? minY : minZ;
    const loop1Max = loop1 === 'y' ? maxY : maxZ;
    const loop2Min = loop2 === 'x' ? minX : minZ;
    const loop2Max = loop2 === 'x' ? maxX : maxZ;

    // Get skin color for a block position
    function getSkinColor(loop2_val, loop1_val) {
        let skin_x, skin_y;
        if (loop2 === 'x') {
            skin_x = skinMinX + (loop2_val - minX);
        } else { // loop2 === 'z'
            skin_x = skinMinX + (loop2_val - minZ);
        }
        if (loop1 === 'y') {
            skin_y = skinMinY + (maxY - loop1_val);
        } else { // loop1 === 'z'
            skin_y = skinMinY + (loop1_val - minZ);
        }
        const index = (skin_y * 64 + skin_x) * 4;
        const r = imageData[index];
        const g = imageData[index + 1];
        const b = imageData[index + 2];
        const a = imageData[index + 3];
        return getClosestBlockColor(r, g, b, a);
    }

    const commands = [];
    for (let l1 = loop1Min; l1 <= loop1Max; l1++) {
        let start_l2 = loop2Min;
        let currentBlock = getSkinColor(start_l2, l1);
        if (isAccessory && currentBlock === null) continue; // Skip transparent rows in accessories
        for (let l2 = loop2Min + 1; l2 <= loop2Max + 1; l2++) {
            const nextBlock = l2 <= loop2Max ? getSkinColor(l2, l1) : null;
            const isDifferent = nextBlock === null || currentBlock === null || 
                               (nextBlock.type !== currentBlock.type || nextBlock.color !== currentBlock.color);
            if (l2 > loop2Max || isDifferent) {
                if (currentBlock !== null) {
                    let x1, x2, y1, y2, z1, z2;
                    if (fixedCoord === 'z') {
                        x1 = start_l2;
                        x2 = l2 - 1;
                        y1 = y2 = l1;
                        z1 = z2 = fixedValue + offset.z;
                    } else if (fixedCoord === 'x') {
                        z1 = start_l2;
                        z2 = l2 - 1;
                        y1 = y2 = l1;
                        x1 = x2 = fixedValue + offset.x;
                    } else { // fixedCoord === 'y'
                        x1 = start_l2;
                        x2 = l2 - 1;
                        z1 = z2 = l1;
                        y1 = y2 = fixedValue + offset.y;
                    }
                    commands.push(`fill ~${x1} ~${y1+3} ~${z1} ~${x2} ~${y2+3} ~${z2} minecraft:${currentBlock.color}_${currentBlock.type}`);
                }
                if (l2 <= loop2Max) {
                    start_l2 = l2;
                    currentBlock = nextBlock;
                }
            }
        }
    }
    return commands;
}

// Process the skin and generate the command
function processSkin() {
    const fileInput = document.getElementById('skinUpload');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please upload a skin file.');
        return;
    }
    
    const blockOption = document.getElementById('blockOptions').value;
    if (blockOption === 'wool') {
        availableBlocks = blockColors.filter(block => block.type === 'wool');
    } else {
        availableBlocks = blockColors;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 64, 64);
            const imageData = ctx.getImageData(0, 0, 64, 64).data;
            
            // Display a preview
            const previewDiv = document.getElementById('preview');
            previewDiv.innerHTML = '<h3>Skin Preview:</h3>';
            previewDiv.appendChild(img.cloneNode(true));

            // Define the order of face processing as requested
            const faceTypes = ['bottom', 'top', 'left', 'right', 'back', 'front'];

            // Generate commands for all faces in the specified order
            const commands = [];
            bodyParts.forEach(part => {
                const { minX, maxX, minY, maxY, minZ, maxZ, faces, accessory } = part;
                
                // Process base faces in the specified order
                faceTypes.forEach(type => {
                    const face = faces.find(f => f.type === type);
                    if (face) {
                        const faceCommands = generateFaceCommands(face, minX, maxX, minY, maxY, minZ, maxZ, imageData, false);
                        commands.push(...faceCommands);
                    }
                });
                
                // Process accessory faces in the same order if available
                if (accessory) {
                    faceTypes.forEach(type => {
                        const accessoryFace = accessory.find(f => f.type === type);
                        if (accessoryFace) {
                            const accessoryCommands = generateFaceCommands(accessoryFace, minX, maxX, minY, maxY, minZ, maxZ, imageData, true);
                            commands.push(...accessoryCommands);
                        }
                    });
                }
            });

            // Command prefix and suffix (unchanged)
            const commandPrefix = `summon falling_block ~ ~2 ~ {Time:1b,BlockState:{Name:"minecraft:activator_rail"},Passengers:[{id:"minecraft:falling_block",Time:10b,BlockState:{Name:"minecraft:activator_rail"},Passengers:[{id:"minecraft:command_block_minecart",Command:"gamerule commandBlockOutput false"},{id:"minecraft:command_block_minecart",Command:"data merge block ~ ~-2 ~ {auto:0b}"},`;
            
            const commandSuffix = `{id:"minecraft:command_block_minecart",Command:"setblock ~ ~1 ~ minecraft:command_block{auto:1b,Command:\\"fill ~ ~ ~ ~ ~-2 ~ minecraft:air\\"}"},` +
                `{id:"minecraft:command_block_minecart",Command:"kill @e[type=command_block_minecart,distance=..1]"}` +
                `]}]}`;
            
            // Calculate maximum length of command content
            const MAX_COMMAND_LENGTH = 32000;
            const PREFIX_LENGTH = commandPrefix.length;
            const SUFFIX_LENGTH = commandSuffix.length;
            const MAX_CONTENT_LENGTH = MAX_COMMAND_LENGTH - (PREFIX_LENGTH + SUFFIX_LENGTH);
            
            // Split commands into chunks
            const commandChunks = [];
            let currentChunk = "";
            
            for (let i = 0; i < commands.length; i++) {
                const commandStr = `{id:"minecraft:command_block_minecart",Command:"${commands[i]}"},`;
                
                if ((currentChunk.length + commandStr.length) > MAX_CONTENT_LENGTH && currentChunk.length > 0) {
                    commandChunks.push(currentChunk);
                    currentChunk = commandStr;
                } else {
                    currentChunk += commandStr;
                }
            }
            
            if (currentChunk.length > 0) {
                commandChunks.push(currentChunk);
            }
            
            // Create final command strings
            const finalCommands = [];
            for (let i = 0; i < commandChunks.length; i++) {
                finalCommands.push(commandPrefix + commandChunks[i] + 
                    `{id:"minecraft:command_block_minecart",Command:"setblock ~ ~1 ~ minecraft:command_block{auto:1b,Command:\\"fill ~ ~ ~ ~ ~-2 ~ minecraft:air\\"}"},` +
                    `{id:"minecraft:command_block_minecart",Command:"kill @e[type=command_block_minecart,distance=..1]"}` +
                    `]}]}`);
            }
            
            // Update output
            const commandOutput = document.getElementById('commandOutput');
            const outputContainer = document.getElementById('output-container');
            
            const existingInfo = document.querySelector('.split-info');
            if (existingInfo) existingInfo.remove();
            
            if (finalCommands.length > 1) {
                const splitInfo = document.createElement('div');
                splitInfo.className = 'split-info';
                splitInfo.innerHTML = `<p>The statue command has been split into ${finalCommands.length} parts due to length limits. Use each part in sequence.</p>`;
                
                const selector = document.createElement('select');
                selector.id = 'commandSelector';
                for (let i = 0; i < finalCommands.length; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = `Command Part ${i + 1} of ${finalCommands.length}`;
                    selector.appendChild(option);
                }
                
                selector.onchange = function() {
                    const selectedIndex = this.value;
                    commandOutput.value = finalCommands[selectedIndex];
                };
                
                splitInfo.appendChild(selector);
                outputContainer.insertBefore(splitInfo, commandOutput);
                commandOutput.value = finalCommands[0];
            } else {
                commandOutput.value = finalCommands[0];
            }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
// Copy command to clipboard
function copyCommand() {
    const commandOutput = document.getElementById('commandOutput');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(commandOutput.value).then(() => {
            alert('Command copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy command.');
        });
    } else {
        commandOutput.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('Command copied to clipboard!');
            } else {
                alert('Failed to copy command.');
            }
        } catch (err) {
            alert('Failed to copy command.');
        }
    }
}

// Add event listener to copy button
document.getElementById('copyButton').addEventListener('click', copyCommand);