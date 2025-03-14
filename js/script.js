// Block colors from colors.txt
const colorsTxt = `
acacia_log.png: rgb(103, 97, 87) / #676157
acacia_planks.png: rgb(168, 90, 50) / #a85a32
amethyst_block.png: rgb(134, 98, 191) / #8662bf
ancient_debris.png: rgb(96, 64, 56) / #604038
andesite.png: rgb(136, 136, 137) / #888889
bamboo_block.png: rgb(127, 144, 58) / #7f903a
bamboo_planks.png: rgb(193, 173, 80) / #c1ad50
birch_planks.png: rgb(192, 175, 121) / #c0af79
black_concrete.png: rgb(8, 10, 15) / #080a0f
black_terracotta.png: rgb(37, 23, 16) / #251710
black_wool.png: rgb(21, 21, 26) / #15151a
blackstone.png: rgb(42, 36, 41) / #2a2429
blue_concrete.png: rgb(45, 47, 143) / #2d2f8f
blue_ice.png: rgb(116, 168, 253) / #74a8fd
blue_terracotta.png: rgb(74, 60, 91) / #4a3c5b
blue_wool.png: rgb(53, 57, 157) / #35399d
bone_block.png: rgb(229, 226, 208) / #e5e2d0
brown_concrete.png: rgb(96, 60, 32) / #603c20
brown_terracotta.png: rgb(77, 51, 36) / #4d3324
brown_wool.png: rgb(114, 72, 41) / #724829
calcite.png: rgb(223, 224, 221) / #dfe0dd
cherry_log.png: rgb(55, 33, 44) / #37212c
cherry_planks.png: rgb(227, 179, 173) / #e3b3ad
clay.png: rgb(161, 166, 179) / #a1a6b3
coal_block.png: rgb(16, 16, 16) / #101010
cobbled_deepslate.png: rgb(77, 77, 81) / #4d4d51
cobblestone.png: rgb(128, 127, 128) / #807f80
copper_block.png: rgb(192, 108, 80) / #c06c50
crimson_planks.png: rgb(101, 49, 71) / #653147
cut_red_sandstone.png: rgb(189, 102, 32) / #bd6620
cut_sandstone.png: rgb(218, 206, 160) / #dacea0
cyan_concrete.png: rgb(21, 119, 136) / #157788
cyan_terracotta.png: rgb(87, 91, 91) / #575b5b
cyan_wool.png: rgb(21, 138, 145) / #158a91
dark_oak_log.png: rgb(60, 47, 26) / #3c2f1a
dark_oak_planks.png: rgb(67, 43, 20) / #432b14
dark_prismarine.png: rgb(52, 92, 76) / #345c4c
dead_brain_coral_block.png: rgb(124, 118, 114) / #7c7672
dead_bubble_coral_block.png: rgb(132, 124, 119) / #847c77
dead_fire_coral_block.png: rgb(132, 124, 120) / #847c78
dead_horn_coral_block.png: rgb(134, 126, 122) / #867e7a
dead_tube_coral_block.png: rgb(130, 123, 120) / #827b78
deepslate.png: rgb(80, 80, 83) / #505053
deepslate_bricks.png: rgb(71, 71, 71) / #474747
deepslate_tiles.png: rgb(55, 55, 55) / #373737
diamond_block.png: rgb(98, 237, 228) / #62ede4
diorite.png: rgb(189, 188, 189) / #bdbcbd
dirt.png: rgb(134, 96, 67) / #866043
dripstone_block.png: rgb(134, 108, 93) / #866c5d
emerald_block.png: rgb(42, 203, 88) / #2acb58
end_stone.png: rgb(220, 223, 158) / #dcdf9e
end_stone_bricks.png: rgb(218, 224, 162) / #dae0a2
exposed_copper.png: rgb(161, 126, 104) / #a17e68
gold_block.png: rgb(246, 208, 62) / #f6d03e
granite.png: rgb(149, 103, 86) / #956756
gray_concrete.png: rgb(55, 58, 62) / #373a3e
gray_terracotta.png: rgb(58, 42, 36) / #3a2a24
gray_wool.png: rgb(63, 68, 72) / #3f4448
green_concrete.png: rgb(73, 91, 36) / #495b24
green_terracotta.png: rgb(76, 83, 42) / #4c532a
green_wool.png: rgb(85, 110, 28) / #556e1c
honeycomb_block.png: rgb(229, 148, 30) / #e5941e
iron_block.png: rgb(220, 220, 220) / #dcdcdc
jungle_log.png: rgb(85, 68, 25) / #554419
jungle_planks.png: rgb(160, 115, 81) / #a07351
lapis_block.png: rgb(31, 67, 140) / #1f438c
light_blue_concrete.png: rgb(36, 137, 199) / #2489c7
light_blue_terracotta.png: rgb(113, 109, 138) / #716d8a
light_blue_wool.png: rgb(58, 175, 217) / #3aafd9
light_gray_concrete.png: rgb(125, 125, 115) / #7d7d73
light_gray_terracotta.png: rgb(135, 107, 98) / #876b62
light_gray_wool.png: rgb(142, 142, 135) / #8e8e87
lime_concrete.png: rgb(94, 169, 25) / #5ea919
lime_terracotta.png: rgb(104, 118, 53) / #687635
lime_wool.png: rgb(112, 185, 26) / #70b91a
magenta_concrete.png: rgb(169, 48, 159) / #a9309f
magenta_terracotta.png: rgb(150, 88, 109) / #96586d
magenta_wool.png: rgb(190, 69, 180) / #be45b4
mangrove_log.png: rgb(84, 67, 41) / #544329
mangrove_planks.png: rgb(118, 54, 49) / #763631
moss_block.png: rgb(89, 110, 45) / #596e2d
mud.png: rgb(60, 57, 61) / #3c393d
mud_bricks.png: rgb(137, 104, 79) / #89684f
nether_bricks.png: rgb(44, 22, 26) / #2c161a
nether_wart_block.png: rgb(115, 3, 2) / #730302
netherite_block.png: rgb(67, 61, 64) / #433d40
netherrack.png: rgb(98, 38, 38) / #622626
note_block.png: rgb(89, 59, 41) / #593b29
oak_log.png: rgb(109, 85, 51) / #6d5533
oak_planks.png: rgb(162, 131, 79) / #a2834f
obsidian.png: rgb(15, 11, 25) / #0f0b19
orange_concrete.png: rgb(224, 97, 1) / #e06101
orange_terracotta.png: rgb(162, 84, 38) / #a25426
orange_wool.png: rgb(241, 118, 20) / #f17614
oxidized_copper.png: rgb(82, 163, 133) / #52a385
packed_ice.png: rgb(142, 180, 250) / #8eb4fa
packed_mud.png: rgb(142, 107, 80) / #8e6b50
pink_concrete.png: rgb(214, 101, 143) / #d6658f
pink_terracotta.png: rgb(162, 78, 79) / #a24e4f
pink_wool.png: rgb(238, 141, 172) / #ee8dac
polished_andesite.png: rgb(132, 135, 134) / #848786
polished_blackstone.png: rgb(53, 49, 57) / #353139
polished_deepslate.png: rgb(72, 73, 73) / #484949
polished_diorite.png: rgb(193, 193, 195) / #c1c1c3
polished_granite.png: rgb(154, 107, 89) / #9a6b59
prismarine_bricks.png: rgb(99, 172, 158) / #63ac9e
purple_concrete.png: rgb(100, 32, 156) / #64209c
purple_terracotta.png: rgb(118, 70, 86) / #764656
purple_wool.png: rgb(122, 42, 173) / #7a2aad
purpur_block.png: rgb(170, 126, 170) / #aa7eaa
quartz_bricks.png: rgb(235, 229, 222) / #ebe5de
raw_gold_block.png: rgb(222, 169, 47) / #dea92f
raw_iron_block.png: rgb(166, 136, 107) / #a6886b
red_concrete.png: rgb(142, 33, 33) / #8e2121
red_nether_bricks.png: rgb(70, 7, 9) / #460709
red_terracotta.png: rgb(143, 61, 47) / #8f3d2f
red_wool.png: rgb(161, 39, 35) / #a12723
redstone_block.png: rgb(176, 25, 5) / #b01905
shroomlight.png: rgb(241, 147, 71) / #f19347
slime_block.png: rgb(112, 192, 92) / #70c05c
smooth_basalt.png: rgb(73, 72, 78) / #49484e
smooth_stone.png: rgb(159, 159, 159) / #9f9f9f
soul_sand.png: rgb(81, 62, 51) / #513e33
soul_soil.png: rgb(76, 58, 47) / #4c3a2f
spruce_log.png: rgb(59, 38, 17) / #3b2611
spruce_planks.png: rgb(115, 85, 49) / #735531
stone.png: rgb(126, 126, 126) / #7e7e7e
stone_bricks.png: rgb(122, 122, 122) / #7a7a7a
stripped_acacia_log.png: rgb(175, 93, 60) / #af5d3c
stripped_bamboo_block.png: rgb(193, 173, 80) / #c1ad50
stripped_birch_log.png: rgb(197, 176, 118) / #c5b076
stripped_cherry_log.png: rgb(215, 145, 149) / #d79195
stripped_crimson_stem.png: rgb(137, 57, 90) / #89395a
stripped_dark_oak_log.png: rgb(73, 57, 36) / #493924
stripped_jungle_log.png: rgb(171, 133, 85) / #ab8555
stripped_mangrove_log.png: rgb(120, 54, 48) / #783630
stripped_oak_log.png: rgb(177, 144, 86) / #b19056
stripped_spruce_log.png: rgb(116, 90, 52) / #745a34
stripped_warped_stem.png: rgb(58, 151, 148) / #3a9794
terracotta.png: rgb(152, 94, 68) / #985e44
tuff.png: rgb(108, 109, 103) / #6c6d67
warped_wart_block.png: rgb(23, 120, 121) / #177879
weathered_copper.png: rgb(108, 153, 110) / #6c996e
white_concrete.png: rgb(207, 213, 214) / #cfd5d6
white_terracotta.png: rgb(210, 178, 161) / #d2b2a1
white_wool.png: rgb(234, 236, 237) / #eaeced
yellow_concrete.png: rgb(241, 175, 21) / #f1af15
yellow_terracotta.png: rgb(186, 133, 35) / #ba8523
yellow_wool.png: rgb(249, 198, 40) / #f9c628
`.trim();

// Parse colors.txt into blockColors array
const blockColors = colorsTxt.split('\n').map(line => {
    const [namePart, rgbPart] = line.split(': ');
    const blockName = namePart.replace('.png', '');
    const rgbMatch = rgbPart.match(/rgb\((\d+), (\d+), (\d+)\)/);
    const rgb = [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
    return { blockName, rgb };
});

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

// Update generateFaceCommands to use blockName
function generateFaceCommands(face, minX, maxX, minY, maxY, minZ, maxZ, imageData, isAccessory = false) {
    const { type, skinMinX, skinMaxX, skinMinY, skinMaxY } = face;
    let fixedCoord, loop1, loop2, fixedValue;

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

    function getSkinColor(loop2_val, loop1_val) {
        let skin_x, skin_y;
        if (loop2 === 'x') {
            skin_x = skinMinX + (loop2_val - minX);
        } else {
            skin_x = skinMinX + (loop2_val - minZ);
        }
        if (loop1 === 'y') {
            skin_y = skinMinY + (maxY - loop1_val);
        } else {
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
        if (isAccessory && currentBlock === null) continue;
        for (let l2 = loop2Min + 1; l2 <= loop2Max + 1; l2++) {
            const nextBlock = l2 <= loop2Max ? getSkinColor(l2, l1) : null;
            const isDifferent = nextBlock === null || currentBlock === null ||
                               nextBlock.blockName !== currentBlock.blockName;
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
                    } else {
                        x1 = start_l2;
                        x2 = l2 - 1;
                        z1 = z2 = l1;
                        y1 = y2 = fixedValue + offset.y;
                    }
                    commands.push(`fill ~${x1} ~${y1+3} ~${z1} ~${x2} ~${y2+3} ~${z2} minecraft:${currentBlock.blockName}`);
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

// Update processSkin to filter blocks based on dropdown
function processSkin() {
    const fileInput = document.getElementById('skinUpload');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please upload a skin file.');
        return;
    }

    const blockOption = document.getElementById('blockOptions').value;
    if (blockOption === 'colorBlocks') {
        const dyeColors = [
            'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
            'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
        ];
        const colorableTypes = ['wool', 'concrete', 'terracotta'];
        availableBlocks = blockColors.filter(block => {
            const parts = block.blockName.split('_');
            if (parts.length >= 2) {
                const type = parts[parts.length - 1];
                const color = parts.slice(0, -1).join('_'); // Handles multi-word colors like light_blue
                return colorableTypes.includes(type) && dyeColors.includes(color);
            }
            return false;
        });
    } else { // allBlocks
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

            const previewDiv = document.getElementById('preview');
            previewDiv.innerHTML = '<h3>Skin Preview:</h3>';
            previewDiv.appendChild(img.cloneNode(true));

            const faceTypes = ['bottom', 'top', 'left', 'right', 'back', 'front'];
            const commands = [];
            bodyParts.forEach(part => {
                const { minX, maxX, minY, maxY, minZ, maxZ, faces, accessory } = part;
                faceTypes.forEach(type => {
                    const face = faces.find(f => f.type === type);
                    if (face) {
                        const faceCommands = generateFaceCommands(face, minX, maxX, minY, maxY, minZ, maxZ, imageData, false);
                        commands.push(...faceCommands);
                    }
                });
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

            const commandPrefix = `summon falling_block ~ ~2 ~ {Time:1b,BlockState:{Name:"minecraft:activator_rail"},Passengers:[{id:"minecraft:falling_block",Time:10b,BlockState:{Name:"minecraft:activator_rail"},Passengers:[{id:"minecraft:command_block_minecart",Command:"gamerule commandBlockOutput false"},{id:"minecraft:command_block_minecart",Command:"data merge block ~ ~-2 ~ {auto:0b}"},`;
            const commandSuffix = `{id:"minecraft:command_block_minecart",Command:"setblock ~ ~1 ~ minecraft:command_block{auto:1b,Command:\\"fill ~ ~ ~ ~ ~-2 ~ minecraft:air\\"}"},{id:"minecraft:command_block_minecart",Command:"kill @e[type=command_block_minecart,distance=..1]"}]}]}`;
            const MAX_COMMAND_LENGTH = 32000;
            const PREFIX_LENGTH = commandPrefix.length;
            const SUFFIX_LENGTH = commandSuffix.length;
            const MAX_CONTENT_LENGTH = MAX_COMMAND_LENGTH - (PREFIX_LENGTH + SUFFIX_LENGTH);

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

            const finalCommands = [];
            for (let i = 0; i < commandChunks.length; i++) {
                finalCommands.push(commandPrefix + commandChunks[i] +
                    `{id:"minecraft:command_block_minecart",Command:"setblock ~ ~1 ~ minecraft:command_block{auto:1b,Command:\\"fill ~ ~ ~ ~ ~-2 ~ minecraft:air\\"}"},{id:"minecraft:command_block_minecart",Command:"kill @e[type=command_block_minecart,distance=..1]"}]}]}`);
            }

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
                    commandOutput.value = finalCommands[this.value];
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

// Keep the existing copyCommand function and event listener unchanged
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

document.getElementById('copyButton').addEventListener('click', copyCommand);