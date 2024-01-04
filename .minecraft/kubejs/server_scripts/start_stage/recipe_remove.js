ServerEvents.recipes(event => {
    const removes = [
        'minecraft:campfire',
        "meadow:frame"
    ]
    removes.forEach(item => {
        event.remove({output : item})
    })
    //event.remove({modid : ytech})
    //event.remove({output:'minecraft:campfire'})
})