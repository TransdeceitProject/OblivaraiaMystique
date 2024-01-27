/**
 * @description event.remove的代理语句
 * @param {Internal.RecipesEventJS} event 配方事件
 */
function recipeRemove (event) {
    event.remove({output : [
        'minecraft:campfire',
        "#notreepunching:knives",
        "farmersdelight:flint_knife",
        "minecraft:crafting_table",
        "ytech:tin_axe",
        "ytech:lead_axe",
        "ytech:flint_axe",
        "ytech:bronze_axe",
        "ytech:copper_axe",
        "#silentgear:blueprints"
    ]})
    event.remove({mod : "ytech"})
}