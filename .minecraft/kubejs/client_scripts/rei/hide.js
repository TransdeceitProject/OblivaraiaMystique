Ingredient.of([
    "#notreepunching:h/knives", 
    /.*spawn_egg/, 
    /.*spawn_.*/,
    "#minecraft:enchanted",
]).itemIds.forEach(id => {
    REIRuntime.hideItem(Item.of(id))
})