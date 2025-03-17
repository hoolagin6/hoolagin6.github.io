// Add event listener to the file input to trigger conversion on file selection
document.getElementById('yamlFile').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return; // Exit if no file is selected
    
    // Show loading indicator
    document.getElementById('loading').style.display = 'block';
    document.getElementById('output').innerHTML = '';
    document.getElementById('conversionDetails').style.display = 'none';

    const reader = new FileReader();
    reader.onload = function(e) {
        const yamlText = e.target.result;
        try {
            // Parse the YAML content into a JavaScript object
            const parsedYaml = jsyaml.load(yamlText);
            const disallowedEntities = new Set();
            let entityCount = 0;

            // Check if rules exist and are an array, then extract entity IDs from DISALLOW_SPAWN rules
            if (parsedYaml.rules && Array.isArray(parsedYaml.rules)) {
                parsedYaml.rules.forEach(rule => {
                    if (rule.what === "DISALLOW_SPAWN" && rule.when && Array.isArray(rule.when.entityId)) {
                        rule.when.entityId.forEach(id => disallowedEntities.add(id));
                    }
                });
            }

            entityCount = disallowedEntities.size;

            // Generate the BadMobs TOML configuration
            let toml = "# BadMobs configuration converted from Mobfilter\n";
            toml += "# Generated on " + new Date().toLocaleString() + "\n\n";
            toml += "[minecraft]\n"; // Top-level section as per BadMobs format
            
            disallowedEntities.forEach(entityId => {
                const parts = entityId.split(':');
                const namespace = parts[0] || "minecraft";
                const entityName = parts[1]; // Extract entity name (e.g., "zombie" from "minecraft:zombie")
                
                toml += `\n[${namespace}.${entityName}]\n`;
                toml += "allowNormalSpawning = false\n";
                toml += "allowSpawners = false\n";
                toml += "allowSpawnEggs = true\n";
                toml += "allowConversions = false\n";
            });

            // Hide loading indicator
            document.getElementById('loading').style.display = 'none';
            
            if (entityCount > 0) {
                // Create a downloadable TOML file
                const blob = new Blob([toml], { type: 'text/toml' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'badmobs.toml';
                a.textContent = 'Download BadMobs TOML Configuration';
                
                // Show success message with entity count
                const outputDiv = document.getElementById('output');
                outputDiv.innerHTML = `<div style="margin-bottom: 15px;">✅ Successfully converted ${entityCount} disabled mob type${entityCount !== 1 ? 's' : ''}!</div>`;
                outputDiv.appendChild(a);
                
                // Show conversion details
                document.getElementById('conversionDetails').style.display = 'block';
            } else {
                // Show message if no disabled entities were found
                document.getElementById('output').innerHTML = '<div class="error">No disabled mob spawns were found in the provided configuration.</div>';
            }
            
        } catch (error) {
            // Hide loading indicator and display error message if YAML parsing fails
            document.getElementById('loading').style.display = 'none';
            document.getElementById('output').innerHTML = `<div class="error">Error parsing YAML: ${error.message}</div>`;
        }
    };
    reader.readAsText(file); // Read the uploaded file as text
}