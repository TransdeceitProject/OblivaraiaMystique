Ponder.registry(event => {
    event.create("minecraft:campfire").scene("campfire_frist", "How to use campfire", (scene, utils) => {

        const blockPos = utils.grid.at(2, 1, 2)
        const textPos = utils.grid.at(2.5, 1.5, 2.5)
        const controlsPos = utils.grid.at(2.5, 2, 2.5)

        scene.showBasePlate()

        scene.world.setBlock(
            blockPos, 
            Block
                .id("minecraft:campfire")
                .with("lit", "false"), 
            true
        )
       // scene.world.modifyBlock([2, 1, 2], (state) => state.with("lit", "false"), true)
        scene.world.showSection(blockPos, Facing.DOWN)
        scene.addKeyframe()
        scene.idle(20)

        scene
            .text(
                80, 
                "Use any of the fire making tools\n cheap and good lighters\n or luxury flints", 
                textPos
            )
            .placeNearTarget()

        scene
            .showControls(
                80, 
                controlsPos, 
                "down"
            )
            .rightClick()
            .withItem("notreepunching:fire_starter")

        scene.world.modifyBlock(
            blockPos, 
            (state) => state.with("lit", "true"), 
            true
        )

        // scene.particles
        //     .simple(
        //         180,
        //         "minecraft:campfire_cosy_smoke",
        //         center
        //     )
        //     .roll(5)
        //     .lifetime(20)
        //     .motion([0, 2, 0])
            

        scene.addKeyframe()
        scene.idle(100)

        scene
            .text(
                60, 
                "Use logs, charcoal or coal to increase the burn time\n Don't use the damn carpets and leaves as fuel\n Trust me, you won't make it.", 
                textPos
            )
            .placeNearTarget()

        scene
            .showControls(
                80, 
                controlsPos, 
                "down"
            )
            .rightClick()
            .withItem("minecraft:oak_log")

        scene.addKeyframe()
        scene.idle(60)
        
    })
})