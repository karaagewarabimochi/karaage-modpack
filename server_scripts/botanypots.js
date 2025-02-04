ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        'kubejs:superitem', // seed item
        ['kubejs:superblock'], // categories that this crop can be planted on
        { block: 'kubejs:superblock' }, // display block
        [
            Item.of('kubejs:superitem') // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(1, 2) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        30000, // growthTicks
        1 // optional, growthModifier - this can be set to 1 in most cases
    )

    event.recipes.botanypots.soil(
        'kubejs:superblock', // the item that this soil is attached to
        { block: 'kubejs:superblock' }, // display block
        ['kubejs:superblock'], // categories that this soil provides
        10, // growth ticks that this soil will provide, set to -1 for no modifier
        0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
    )

    event.recipes.botanypots.fertilizer(
        'minecraft:iron_block', // fertilizer item
        10, // min growth ticks applied
        20 // max growth ticks applied
        // ex: 10 to 20 ticks will be randomly given to the crop
    )

    event.recipes.botanypots.crop(
        'kubejs:supersuperitem', // seed item
        ['kubejs:supersuperblock'], // categories that this crop can be planted on
        { block: 'kubejs:supersuperblock' }, // display block
        [
            Item.of('kubejs:supersuperitem') // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(1, 2) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        30000, // growthTicks
        1 // optional, growthModifier - this can be set to 1 in most cases
    )

    event.recipes.botanypots.soil(
        'kubejs:supersuperblock', // the item that this soil is attached to
        { block: 'kubejs:supersuperblock' }, // display block
        ['kubejs:supersuperblock'], // categories that this soil provides
        10, // growth ticks that this soil will provide, set to -1 for no modifier
        0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
    )

    event.recipes.botanypots.fertilizer(
        'minecraft:iron_block', // fertilizer item
        10, // min growth ticks applied
        20 // max growth ticks applied
        // ex: 10 to 20 ticks will be randomly given to the crop
    )

    event.remove({ mod: 'botanypots' })

    event.remove({ mod: 'botanypotstiers' })

    
})