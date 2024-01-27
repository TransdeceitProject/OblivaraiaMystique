/**
 * @description 合成台配方的添加
 * @param {Internal.RecipesEventJS} event 配方事件
 */
function craftingTableRecipe (event) {
    const {kubejs} = event.recipes
    kubejs.shapeless(
        "kubejs:tinder", [
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber"
        ]
    )
    kubejs.shapeless(
        "minecraft:campfire", [
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "kubejs:tinder",
            "supplementaries:rope"
        ]
    )
    kubejs.shaped("farmersdelight:flint_knife", ["F","S"], {
        "F" : "notreepunching:flint_shard",
        "S" : "minecraft:stick"
    })
    const toolName = [
        "pickaxe",
        "axe",
        "sword",
        "shovel",
        "hoe"
    ]
    toolName.forEach(name => {
        kubejs.shaped(`silentgear:${name}_template`, ["SWS","WPW","SWS"], {
            "W" : "#forge:planks",
            "S" : "silentgear:template_board",
            "P" : `#minecraft:${name}s`
        })
    })
    kubejs.shaped("ytech:primitive_smelter", ["AAA","BCB","AAA"], {
        "A" : "tfmg:fireproof_bricks",
        "B" : "tfmg:fireproof_brick_reinforcement",
        "C" : "brickfurnace:brick_blast_furnace"
    })
    kubejs.shaped("ytech:primitive_alloy_smelter", ["AAA","BCB","AAA"], {
        "A" : "tfmg:fireproof_bricks",
        "C" : "tfmg:fireproof_brick_reinforcement",
        "B" : "ytech:primitive_smelter"
    })
    kubejs.shaped("3x ytech:brick_chimney", ["AA","AA","AA"], {
        "A" : "tfmg:fireproof_brick_reinforcement"
    })
    kubejs.shaped("6x ytech:reinforced_bricks", ["ABA","BAB","ABA"], {
        "A" : "#forge:ingots/bronze",
        "B" : "tfmg:fireproof_bricks"
    })
    kubejs.shaped("3x ytech:reinforced_brick_chimney", ["ABA","ABA","ABA"], {
        "A" : "ytech:reinforced_bricks",
        "B" : "ytech:brick_chimney"
    })
}