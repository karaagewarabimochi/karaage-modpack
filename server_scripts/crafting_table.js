ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mekanism:crusher'), // arg 1: output
        [
          'ABA',
          'CDC', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'minecraft:redstone',
          B: 'mekanism:basic_control_circuit',  //arg 3: the mapping object
          C: 'create:crushing_wheel',
          D: 'mekanism:steel_casing'
        }
      )
  
  
  
    //event.shaped(
    //  Item.of('kubejs:superitem'), // arg 1: output
    //  [
    //    'ABA',
    //    'CEC', // arg 2: the shape (array of strings)
    //    'DBD'
    //  ],
    //  {
    //    A: 'minecraft:gold_block',
    //    B: 'mekanism:block_osmium',  //arg 3: the mapping object
    //    C: 'minecraft:iron_block',
    //    D: 'minecraft:redstone_block',
    //    E: 'minecraft:coal_block'
    //  }
    //)

    event.shaped(
      Item.of('kubejs:superblock'), // arg 1: output
      [
        'AAA',
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:superitem'
      }
    )

    event.shaped(
      Item.of('kubejs:supersuperitem'), // arg 1: output
      [
        'AAA',
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:superblock'
      }
    )

    event.shaped(
      Item.of('kubejs:supersuperblock'), // arg 1: output
      [
        'AAA',
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:supersuperitem'
      }
    )

    event.shapeless(
      Item.of('kubejs:superitem', 9), // arg 1: output
      [
        'kubejs:superblock'
      ]
    )

    event.shapeless(
      Item.of('kubejs:superblock', 9), // arg 1: output
      [
        'kubejs:supersuperitem'
      ]
    )

    event.shapeless(
      Item.of('kubejs:supersuperitem', 9), // arg 1: output
      [
        'kubejs:supersuperblock'
      ]
    )

    event.shaped(
      Item.of('mekanism:combiner'), // arg 1: output
      [
        'ABA',
        'CDC', // arg 2: the shape (array of strings)
        'ABA'
      ],
      {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',  //arg 3: the mapping object
        C: 'minecraft:iron_ingot',
        D: 'mekanism:steel_casing'
      }
    )
  
    event.shaped(
      Item.of('torcherino:torcherino'), // arg 1: output
      [
        'AAA',
        'ABA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'mekanism:pellet_antimatter',
        B: 'minecraft:torch'  //arg 3: the mapping object
      }
    )

    event.shaped(
      Item.of('botanypots:terracotta_hopper_botany_pot'), // arg 1: output
      [
        'A A', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:supersuperblock'  //arg 3: the mapping object
      }
    )

    event.shaped(
      Item.of('create:electron_tube'), // arg 1: output
      [
        'AAA',
        'ABA', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'minecraft:glass',
        B: 'create:polished_rose_quartz',  //arg 3: the mapping object
        C: 'minecraft:iron_ingot'
      }
    )
    event.shaped(
      Item.of('mekanism:enrichment_chamber'),
      [
        'ABA',
        'CDC',
        'ABA'
      ],
      {
        A: 'mekanism:basic_control_circuit',
        B: 'minecraft:piston',
        C: 'minecraft:redstone',
        D: 'mekanism:steel_casing'
      }
    )

    event.remove({ id: 'torcherino:torcherino'})

    event.remove({ id: 'mekanism:crusher'})

    event.remove({ id: 'mekanism:combiner'})

    event.remove({ id: 'mekanism:enrichment_chamber'})

    event.remove({ id: 'create:crafting/materials/electron_tube'})
  
    event.remove({ mod: 'ironjetpacks' })
})