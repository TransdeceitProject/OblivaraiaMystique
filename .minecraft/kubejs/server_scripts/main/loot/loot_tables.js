/**
 * @description 更改方块战利品表
 * @param {Internal.BlockLootEventJS} event 方块战利品表事件
 */
function modifyBlock (event) {
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
                "tag": "farmersdelight:tools/knives"
              }
            })
        })
        loot.addPool(pool => {
          pool.addItem("kubejs:dry_fiber")
          pool.randomChance(0.01)
        })
    })
}