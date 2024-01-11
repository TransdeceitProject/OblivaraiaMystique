StartupEvents.registry("item", e => {
    const id = "easter_egg"
    e
    .create(id, "basic")
    .fireResistant(false)
    .burnTime(25)
    .translationKey("kubejs." + id)
    .displayName("失落的木琴")
})