/**
 * @description event.remove的代理语句
 * @param {Internal.RecipesEventJS} event 配方事件
 */
function recipeRemove (event) {
    event.remove({output : [
        'minecraft:campfire',
        "meadow:frame",
        "#notreepunching:knives",
        "farmersdelight:flint_knife"
    ]})
}