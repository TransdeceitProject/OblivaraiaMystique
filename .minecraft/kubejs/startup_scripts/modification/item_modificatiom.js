ItemEvents.modification((event) => {
    event.modify("botanicpledge:asgard_fractal", item => {
        item.attackSpeed = -1.5
        item.rarity = "EPIC"
    })
    event.modify("botanicpledge:yggd_ramus", item => {
        item.attackSpeed = -1
    })
})