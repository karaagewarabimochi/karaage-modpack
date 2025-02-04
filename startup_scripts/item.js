// Listen to item registry event
StartupEvents.registry('item', event => {
    event.create('superitem').texture('kubejs:item/superitem').food(food => {
      food
        .hunger(10)
        .saturation(0.5) // This value does not directly translate to saturation points gained
      })
    event.create('supersuperitem').texture('kubejs:item/supersuperitem').food(food => {
      food
        .hunger(20)
        .saturation(0.5) // This value does not directly translate to saturation points gained
      }) // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
  
    event.create('rawsuperitem').texture('kubejs:item/raw_superitem')
  
    event.create('testitem').texture('kubejs:item/testitem')
  
    event.create('karaage:testitem').texture('karaage:item/testitem')
  
  })