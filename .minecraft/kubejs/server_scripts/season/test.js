BlockEvents.rightClicked(e => {

    //e.player.tell(`${getSeason}`)
        
    /* 这是通过反射获取当前季节的范例
    * @return {string} 返回一个代表当前季节的String 
    */
    function getSeason(){
        const $SeasonHandler = Java.loadClass("sereneseasons.handler.season.SeasonHandler")
        const $SeasonTime = Java.loadClass("sereneseasons.season.SeasonTime")
        const seasonData = $SeasonHandler.getSeasonSavedData(e.getLevel())
        const time = new $SeasonTime(seasonData.seasonCycleTicks)
        return time.getSeason().toString()
    }
})

