StartupEvents.registry('block', event => {
  event.create('superblock').textureAll('kubejs:block/superblock').stoneSoundType()
  event.create('supersuperblock').textureAll('kubejs:block/supersuperblock').stoneSoundType()
  event.create('compressedcobblestone').textureAll('kubejs:block/compressed_cobblestone').stoneSoundType()
  event.create('bakedcompressedcobblestone').textureAll('kubejs:block/baked_compressed_cobblestone').stoneSoundType()
  event.create('testblock').textureAll('kubejs:block/testblock')
  event.create('karaage:testblock').textureAll('karaage:block/testblock')
})
