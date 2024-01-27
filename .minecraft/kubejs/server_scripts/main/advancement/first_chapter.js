ServerEvents.advancement(event => {
    const root = event
        .create("om:start")
        .display(display => {
            display.setTitle(Component.translate("adv.om.start/title"))
            display.setDescription(Component.translate("adv.om.start/description"))
            display.setIcon("farmersdelight:flint_knife")
        })
        .criteria(criteria => {
            criteria.add("tick", event.TRIGGER.tick())
        })
    /** 
    const flower = root.addChild("om:flower", bulider => {
        bulider.display(display => {
            display.setTitle(Component.translate("adv.om.flower/title"))
            display.setDescription(Component.translate("adv.om.flower/description"))
            display.setIcon("minecraft:poppy")
        })
        bulider.criteria(criteria => {
            criteria.add("pickUpFlower", )
        })
    })
    */
})