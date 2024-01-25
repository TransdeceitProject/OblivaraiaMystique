BlockEvents.rightClicked(event => {
    const block = event.block
    const item = event.player.getItemInHand(event.hand)
    const name = event.player.name.string
    const {x, y, z} = event.block.pos
    
    if (block.item.hasTag("forge:stripped_logs")) {
        if (event.player.isCrouching() && item.hasTag("minecraft:axes") || item.hasTag("forge:axes") && !event.level.isClientSide()) {
            event.getPlayer().tell(block)
            block.set("minecraft:crafting_table")
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block ${name} ${x} ${y} ${z} 5 1 1`)
            //Client.gameRenderer.
            if (!event.player.isCreative()) item.damageValue += Math.ceil(Math.random() * (25-10+1))+10
        }
    }
})