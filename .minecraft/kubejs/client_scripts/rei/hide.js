Ingredient.of([
    "#notreepunching:h/knives", 
    /.*spawn_egg/, 
    /.*spawn_.*/,
]).getItemIds().forEach(id => {
    REIRuntime.hideItem(Item.of(id))
})