Ingredient.of([
    "#notreepunching:h/knives", 
    /.*spawn_egg/, 
    /.*spawn_.*/,
    "#minecraft:enchanted",
]).getItemIds().forEach(id => {
    REIRuntime.hideItem(Item.of(id))
})