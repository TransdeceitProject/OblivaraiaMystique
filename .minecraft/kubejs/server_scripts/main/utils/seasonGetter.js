const $SeasonHandler = Java.loadClass("sereneseasons.handler.season.SeasonHandler")
const $SeasonTime = Java.loadClass("sereneseasons.season.SeasonTime")

/**
     * @return {$SeasonTime}
     * @param {Internal.Level} level 
     */
function getSeasonTime(level) {
    const seasonData = $SeasonHandler.getSeasonSavedData(level)
    return new $SeasonTime(seasonData.seasonCycleTicks)
}
