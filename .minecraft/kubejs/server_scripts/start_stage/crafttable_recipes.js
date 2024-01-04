ServerEvents.recipes(e => {
    e.recipes.minecraft.crafting_shapeless(
        Item.of("kubejs:tinder", 1), [
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber"
        ]
    )
    e.recipes.minecraft.crafting_shapeless(
        Item.of("minecraft:campfire", 1), [
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "kubejs:tinder",
            "supplementaries:rope"
        ]
    )    
})