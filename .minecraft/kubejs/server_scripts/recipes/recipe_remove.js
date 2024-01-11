ServerEvents.recipes(event => {
    event.remove({output : [
        'minecraft:campfire',
        "meadow:frame",
        "#notreepunching:knives",
        "farmersdelight:flint_knife"
    ]})
    //event.remove({modid : ytech})
    //event.remove({output:'minecraft:campfire'})
})