ServerEvents.blockLootTables(event => {
    event.modifyBlock("#minecraft:leaves", loot => {
        loot.addPool(pool => {
            pool.addItem("notreepunching:plant_fiber")
            pool.randomChance(0.05)
            pool.addFunction({
                "function": "minecraft:set_count",
                "count": {
                  "min": 1,
                  "max": 2
                }
              }
            )
            pool.addCondition({
              "condition": "minecraft:match_tool",
              "predicate": {
                "tag": "notreepunching:knives"
              }
            })
        })
        loot.addPool(pool => {
          pool.addItem("kubejs:dry_fiber")
          pool.randomChance(0.01)
        })
    })
})