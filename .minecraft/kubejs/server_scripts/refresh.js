ServerEvents.loaded(e => {
    e.server.runCommandSilent('reload')
})