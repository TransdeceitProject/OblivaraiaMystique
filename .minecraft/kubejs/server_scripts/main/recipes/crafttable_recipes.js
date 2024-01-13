/**
 * @description 合成台配方的添加
 * @param {Internal.RecipesEventJS} event 配方事件
 */
function craftingTableRecipe (event) {
    const {kubejs} = event.recipes
    kubejs.shapeless(
        Item.of("kubejs:tinder", 1), [
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber"
        ]
    )
    kubejs.shapeless(
        Item.of("minecraft:campfire", 1), [
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
}