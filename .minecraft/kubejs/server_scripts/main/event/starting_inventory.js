PlayerEvents.loggedIn(event => {
    const stage = event.player.stages
    const stageName = 'starting_inventory'
    const seasonTime = getSeasonTime(event.level)
    /**@type {String} */
    const season = seasonTime.getSeason().toString()
    /**@type {String} */
    const subSeason = seasonTime.getSubSeason().toString()

    const inventoryNormal = [
        Item.of("farmersdelight:flint_knife"),
        Item.of("minecraft:bread", 8)
    ]
    const inventoryWinter = [
        Item.of('sanitydim:garland', '{Damage:0,SimpleInsulation:[{Cold:2.0d,Hot:0.0d},{Cold:2.0d,Hot:0.0d},{Cold:2.0d,Hot:0.0d},{Cold:2.0d,Hot:0.0d}]}'),
        Item.of("cold_sweat:fur_parka"),
        Item.of("cold_sweat:fur_pants"),
        Item.of("cold_sweat:fur_boots")
    ]
    if (!stage.has(stageName)) {
        stage.add(stageName)
        event.player.inventory.clear()
        inventoryNormal.forEach(item => {
            event.player.give(item)
        })
        switch (season) {
            case 'SPRING':
                if (subSeason == "EARLY_SPRING") {
                    inventorySetter(inventoryWinter)
                }
                break;
            case 'AUTUMN':
                if (subSeason != "EARLY_AUTUMN") {
                    inventorySetter(inventoryWinter)
                }
                break;
            case 'WINTER':
                inventorySetter(inventoryWinter)
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @param {Internal.ItemStack[]} items 
     */
    function inventorySetter(items) {
        items.forEach(item => {
            event.player.give(item)
        })
    }
})