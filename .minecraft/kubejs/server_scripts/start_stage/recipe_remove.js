ServerEvents.recipes(event => {
    const removes = [
        'minecraft:campfire',
        "meadow:frame",
        "#notreepunching:knives",
        "farmersdelight:flint_knife"
    ]
    removes.forEach(item => {
        event.remove({output : item})
    })
    //event.remove({modid : ytech})
    //event.remove({output:'minecraft:campfire'})
})