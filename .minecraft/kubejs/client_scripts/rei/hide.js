REIEvents.hide("client", event => {
    const knives = Ingredient.of("#notreepunching:h/knives")
    knives.forEach(knives => {
        event.hide(knives)
    });
})