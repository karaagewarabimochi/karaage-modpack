ServerEvents.recipes(event => {
    event.remove({ id: 'create:crafting/materials/electron_tube'})

    event.remove({ id: 'create:crushing/gravel' })

    event.remove({ id: 'mekanism:combiner'})
    
    event.remove({ id: 'mekanism:combining/obsidian'})

    event.remove({ id: 'mekanism:crusher'})

    event.remove({ id: 'mekanism:enrichment_chamber'})

    event.remove({ id: 'fluxnetworks:fluxcore'})

    event.remove({ id: 'torcherino:torcherino'})

    event.remove({ mod: 'botanypots' })

    event.remove({ mod: 'botanypotstiers' })

    event.remove({ mod: 'ironjetpacks' })

    event.remove({ output: 'mekanism:dust_obsidian' })
})