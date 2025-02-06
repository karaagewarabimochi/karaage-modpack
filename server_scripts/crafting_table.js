ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mekanism:crusher'),
        [
          'ABA',
          'CDC',
          'ABA'
        ],
        {
          A: 'minecraft:redstone',
          B: 'mekanism:basic_control_circuit',
          C: 'create:crushing_wheel',
          D: 'mekanism:steel_casing'
        }
      )

    event.shaped(
      Item.of('kubejs:superblock'),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: 'kubejs:superitem'
      }
    )

    event.shaped(
      Item.of('kubejs:supersuperitem'),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: 'kubejs:superblock'
      }
    )

    event.shaped(
      Item.of('kubejs:supersuperblock'),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: 'kubejs:supersuperitem'
      }
    )

    event.shapeless(
      Item.of('kubejs:superitem', 9),
      [
        'kubejs:superblock'
      ]
    )

    event.shapeless(
      Item.of('kubejs:superblock', 9),
      [
        'kubejs:supersuperitem'
      ]
    )

    event.shapeless(
      Item.of('kubejs:supersuperitem', 9),
      [
        'kubejs:supersuperblock'
      ]
    )

    event.shaped(
      Item.of('mekanism:combiner'),
      [
        'ABA',
        'CDC',
        'ABA'
      ],
      {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'minecraft:iron_ingot',
        D: 'mekanism:steel_casing'
      }
    )
  
    event.shaped(
      Item.of('torcherino:torcherino'),
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        A: 'mekanism:pellet_antimatter',
        B: 'minecraft:torch'
      }
    )

    event.shaped(
      Item.of('botanypots:terracotta_hopper_botany_pot'),
      [
        'A A',
        'AAA'
      ],
      {
        A: 'kubejs:supersuperblock'
      }
    )

    event.shaped(
      Item.of('create:electron_tube'),
      [
        'AAA',
        'ABA',
        'CCC'
      ],
      {
        A: 'minecraft:glass',
        B: 'create:polished_rose_quartz',
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
})