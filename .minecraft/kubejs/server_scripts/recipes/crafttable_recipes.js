ServerEvents.recipes(e => {
    e.recipes.kubejs.shapeless(
        Item.of("kubejs:tinder", 1), [
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber", 
            "kubejs:dry_fiber"
        ]
    )
    e.recipes.kubejs.shapeless(
        Item.of("minecraft:campfire", 1), [
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "#minecraft:logs",
            "kubejs:tinder",
            "supplementaries:rope"
        ]
    )
    e.recipes.kubejs.shaped("farmersdelight:flint_knife", ["F","S"], {
        "F" : "notreepunching:flint_shard",
        "S" : "minecraft:stick"
    })
    
})