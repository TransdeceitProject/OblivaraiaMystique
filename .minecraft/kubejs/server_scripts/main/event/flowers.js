BlockEvents.broken(event => {
    const block = event.block
    const item = event.player.getItemInHand("main_hand")

    if (block.item.hasTag("minecraft:flowers")) {
        if (item.hasTag("minecraft:hoes")) {
            block.popItem(block.item)
            block.popItem(block.item)
            item.damageValue++
        }
    }
})