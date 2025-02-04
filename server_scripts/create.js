ServerEvents.recipes(event => {
    event.recipes.createCrushing([
        'minecraft:gravel',
        Item.of('minecraft:coal').withChance(0.2),
        Item.of('minecraft:raw_iron').withChance(0.2),
        Item.of('minecraft:raw_copper').withChance(0.2),
        Item.of('minecraft:raw_gold').withChance(0.2),
        Item.of('minecraft:redstone').withChance(0.2),
        Item.of('mekanism:raw_osmium').withChance(0.2),
        Item.of('kubejs:superitem').withChance(0.10)
      ], 'minecraft:cobblestone')

    event.recipes.createCrushing([
        'minecraft:sand',
        ], 'minecraft:gravel')

    event.recipes.createCrushing([
        Item.of('kubejs:superitem').withChance(0.1),
        Item.of('minecraft:quartz').withChance(0.3),
        Item.of('minecraft:netherite_scrap').withChance(0.001),
        Item.of('create:raw_zinc').withChance(0.3),
        Item.of('mekanism:raw_tin').withChance(0.2),
        Item.of('mekanism:raw_lead').withChance(0.2),
        Item.of('mekanism:raw_uranium').withChance(0.2),
        Item.of('mekanism:fluorite_gem').withChance(0.2) ,
        Item.of('ae2:certus_quartz_dust').withChance(0.3) 
        ], 'kubejs:superitem')

    event.recipes.createCrushing([
        Item.of('5x kubejs:superitem').withChance(0.1),
        Item.of('5x minecraft:quartz').withChance(0.3),
        Item.of('5x minecraft:netherite_scrap').withChance(0.001),
        Item.of('5x create:raw_zinc').withChance(0.3),
        Item.of('5x mekanism:raw_tin').withChance(0.2),
        Item.of('5x mekanism:raw_lead').withChance(0.2),
        Item.of('5x mekanism:raw_uranium').withChance(0.2),
        Item.of('5x mekanism:fluorite_gem').withChance(0.2) ,
        Item.of('5x ae2:certus_quartz_dust').withChance(0.3) 
        ], 'kubejs:superblock')

    event.recipes.createCrushing([
        Item.of('25x kubejs:superitem').withChance(0.1),
        Item.of('25x minecraft:quartz').withChance(0.3),
        Item.of('25x minecraft:netherite_scrap').withChance(0.001),
        Item.of('25x create:raw_zinc').withChance(0.3),
        Item.of('25x mekanism:raw_tin').withChance(0.2),
        Item.of('25x mekanism:raw_lead').withChance(0.2),
        Item.of('25x mekanism:raw_uranium').withChance(0.2),
        Item.of('25x mekanism:fluorite_gem').withChance(0.2) ,
        Item.of('25x ae2:certus_quartz_dust').withChance(0.3) 
        ], 'kubejs:supersuperitem')

    event.recipes.createCrushing([
        Item.of('125x kubejs:superitem').withChance(0.1),
        Item.of('125x minecraft:quartz').withChance(0.3),
        Item.of('125x minecraft:netherite_scrap').withChance(0.001),
        Item.of('125x create:raw_zinc').withChance(0.3),
        Item.of('125x mekanism:raw_tin').withChance(0.2),
        Item.of('125x mekanism:raw_lead').withChance(0.2),
        Item.of('125x mekanism:raw_uranium').withChance(0.2),
        Item.of('125x mekanism:fluorite_gem').withChance(0.2) ,
        Item.of('125x ae2:certus_quartz_dust').withChance(0.2) 
        ], 'kubejs:supersuperblock')

    event.recipes.createCrushing([
        '32x kubejs:superitem',
        Item.of('minecraft:netherite_scrap').withChance(0.1),
        Item.of('2x minecraft:diamond').withChance(0.1),
        ], 'kubejs:compressedcobblestone')

    event.recipes.createMechanicalCrafting('kubejs:testitem', [
        ' FGHHHGF ',
        'FFEDDDEFF',
        'GECBBBCEG',
        'HDBAAABDH',
        'HDBAAABDH',
        'HDBAAABDH',
        'GECBBBCEG',
        'FFEDDDEFF',
        ' FGHHHGF '
        ], 
        {
        A: 'mekanism:pellet_antimatter',
        B: 'ae2:cell_component_256k',
        C: 'create:polished_rose_quartz',
        D: 'mekanism:sps_casing',
        E: 'fluxnetworks:flux_core',
        F: 'kubejs:supersuperblock',
        G: 'create:blaze_burner',
        H: 'mekanism:pellet_plutonium'
        })

    event.remove({ id: 'create:crushing/gravel' })
})