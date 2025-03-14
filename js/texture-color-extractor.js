document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const previewContainer = document.getElementById('preview-container');
    const outputTextarea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');
    const statusElement = document.getElementById('status');
    
    // Keep track of processed files to avoid duplicates
    const processedFiles = new Set();
    
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    // Highlight drop zone when dragging over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });
    
    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);
    
    // Handle copy button
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Handle clear button
    clearBtn.addEventListener('click', clearAll);
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function highlight() {
        dropZone.classList.add('dragover');
    }
    
    function unhighlight() {
        dropZone.classList.remove('dragover');
    }
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        
        // Process DataTransferItemList (for Chrome, Firefox)
        if (dt.items && dt.items.length > 0) {
            for (let i = 0; i < dt.items.length; i++) {
                if (dt.items[i].kind === 'file') {
                    const file = dt.items[i].getAsFile();
                    if (file) {
                        processFile(file);
                    }
                }
            }
        }
        // Process DataTransfer files (for IE, Edge)
        else if (dt.files && dt.files.length > 0) {
            for (let i = 0; i < dt.files.length; i++) {
                processFile(dt.files[i]);
            }
        }
        
        // Process URLs (for dragging from other sites)
        setTimeout(() => {
            if (dt.getData('text/uri-list')) {
                const urls = dt.getData('text/uri-list').split('\n').filter(url => url.trim());
                for (const url of urls) {
                    if (url.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
                        processImageURL(url);
                    }
                }
            } else if (dt.getData('text/plain')) {
                const text = dt.getData('text/plain');
                if (text.match(/^https?:\/\/.+\.(png|jpg|jpeg|gif|webp)$/i)) {
                    processImageURL(text);
                }
            }
        }, 0);
    }
    
    function processFile(file) {
        const fileId = file.name + '_' + file.size;
        
        if (processedFiles.has(fileId)) {
            return;
        }
        
        processedFiles.add(fileId);
        
        if (!file.type.match('image.*')) {
            showStatus('Only image files are supported', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                if (Math.abs(img.width - 16) > 2 || Math.abs(img.height - 16) > 2) {
                    showStatus(`Warning: Image "${file.name}" is not 16x16 pixels (${img.width}x${img.height})`, 'warning');
                }
                
                const rgb = calculateAverageColor(img);
                addToOutput(file.name, rgb);
                addPreview(img, file.name, rgb);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
    function processImageURL(url) {
        const filename = url.split('/').pop().split('?')[0];
        
        if (processedFiles.has(url)) {
            return;
        }
        
        processedFiles.add(url);
        
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            if (Math.abs(img.width - 16) > 2 || Math.abs(img.height - 16) > 2) {
                showStatus(`Warning: Image "${filename}" is not 16x16 pixels (${img.width}x${img.height})`, 'warning');
            }
            
            const rgb = calculateAverageColor(img);
            addToOutput(filename, rgb);
            addPreview(img, filename, rgb);
        };
        img.onerror = () => {
            showStatus(`Failed to load image from URL: ${url}`, 'error');
        };
        img.src = url;
    }
    
    function calculateAverageColor(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let r = 0, g = 0, b = 0;
        const pixelCount = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }
        
        r = Math.round(r / pixelCount);
        g = Math.round(g / pixelCount);
        b = Math.round(b / pixelCount);
        
        return { r, g, b };
    }
    
    function addToOutput(filename, rgb) {
        const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        const hexColor = rgbToHex(rgb.r, rgb.g, rgb.b);
        const newEntry = `${filename}: ${rgbString} / ${hexColor}\n`;
        outputTextarea.value += newEntry;
        showStatus(`Added "${filename}" with color ${rgbString}`, 'success');
    }
    
    function addPreview(img, filename, rgb) {
        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';
        
        const previewImg = document.createElement('img');
        previewImg.className = 'preview-image';
        previewImg.src = img.src;
        previewImg.alt = filename;
        previewImg.title = filename;
        
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'color-swatch';
        colorSwatch.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        
        const label = document.createElement('span');
        label.textContent = `${filename.substring(0, 15)}${filename.length > 15 ? '...' : ''}: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        
        previewItem.appendChild(previewImg);
        previewItem.appendChild(colorSwatch);
        previewItem.appendChild(label);
        previewContainer.appendChild(previewItem);
    }
    
    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    
    function copyToClipboard() {
        outputTextarea.select();
        document.execCommand('copy');
        showStatus('Copied to clipboard!', 'success');
    }
    
    function clearAll() {
        outputTextarea.value = '';
        previewContainer.innerHTML = '';
        processedFiles.clear();
        showStatus('All data cleared', 'info');
    }
    
    function showStatus(message, type = 'info') {
        statusElement.textContent = message;
        statusElement.style.display = 'block';
        
        switch(type) {
            case 'error':
                statusElement.style.backgroundColor = '#ffebee';
                break;
            case 'warning':
                statusElement.style.backgroundColor = '#fff8e1';
                break;
            case 'success':
                statusElement.style.backgroundColor = '#e8f5e9';
                break;
            default:
                statusElement.style.backgroundColor = '#e6f7ff';
        }
        
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 3000);
    }
});
