StartupEvents.registry("item", e => {
    const id = "dry_fiber"
    e
    .create(id, "basic")
    .fireResistant(false)
    .burnTime(25)
    .useAnimation("block")
    .translationKey("kubejs." + id)
})