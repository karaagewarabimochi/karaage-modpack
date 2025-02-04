ServerEvents.recipes(event => {
    event.recipes.mekanism.combining('2x create:brass_ingot', 'minecraft:copper_ingot', 'create:zinc_ingot')

    event.recipes.mekanism.combining('fluxnetworks:flux_dust', 'create:powdered_obsidian', 'minecraft:redstone')

    event.recipes.mekanism.crushing( '10x kubejs:supersuperitem', 'kubejs:supersuperblock')

    event.recipes.mekanism.crushing( '10x kubejs:superblock', 'kubejs:supersuperitem')

    event.recipes.mekanism.crushing( '10x kubejs:superitem', 'kubejs:superblock')

    event.recipes.mekanism.purifying('minecraft:dirt', 'minecraft:coarse_dirt', {gas: 'mekanism:oxygen', amount: 200})

    event.recipes.mekanism.enriching('kubejs:compressedcobblestone','64x minecraft:cobblestone')
    
    event.remove({ output: 'mekanism:dust_obsidian' })

    event.remove({ id: 'mekanism:combining/obsidian'})
})