StartupEvents.registry("block", e => {
    const id = "tinder"
    e
    .create(id, "super_block")
    .surviveType("redstone_wire")
    .hardness(0.1)
    .material("grass")
    .noDrops()
    .noCollision()
//    .defaultTranslucent()
    .defaultCutout()
    .notSolid()
    .translationKey(`kubejs.${id}`)
    .grassSoundType()
    .box(0, 0, 0, 16, 1, 16, true)
    .fullBlock(false)
    .requiresTool(false)
    .item(item => {
        item.modelJson({
            "parent": "minecraft:item/generated",
            "textures": {
                "layer0": "kubejs:item/tinder"
            }
        })
    })
    .property(BlockProperties.AGE_3)
    .canBeReplaced(callback => {
        callback.canBeReplaced(true)
    })
    .rightClick(callback => {
        const name = callback.player.name.string
        const x = callback.block.pos.x
        const y = callback.block.pos.y
        const z = callback.block.pos.z
        const value = callback.block.properties.values()

        function setLog(){
            callback.server.runCommandSilent(`playsound minecraft:block.wood.place block ${name} ${x} ${y} ${z} 5 1 1`)
            callback.item.count--
        }

        if (callback.item.hasTag("minecraft:logs")){
            switch (value) {
                case "[3]" : {
                    callback.block.set("minecraft:campfire", {lit : "false",infinite : "false"})
                    setLog()
                    break
                }
                default:
                    let number = Number(value.toString().substr(1, 1))
                    callback.block.set(callback.block.id, {age : `${++number}`})
                    setLog()
                    break
            }
        }
    })
})

ItemEvents.modification(event => {
    event.modify("kubejs:tinder", item => {
        item.burnTime = 15
        item.maxStackSize = 16
    })
})