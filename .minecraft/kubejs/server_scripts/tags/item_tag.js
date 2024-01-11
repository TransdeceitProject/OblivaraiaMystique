ServerEvents.tags("item", event => {

    const plates = event.get('ytech:plates').getObjectIds()

    plates.forEach(plate => {
        const tagList = Item.of(plate).getTags().toList()
        const lists = setTagNamespace(tagList, "ytech", "forge")
    
        lists.forEach((value, key) => {
            if(key.toString() != null){
                event.add(value, plate)
                console.log(`Change the ${plate} tag from ${key} to ${value}.`)
            }
        })
    })

    /**
     * 
     * @param {Internal.List<ResourceLocation>} tags 
     * @param {String} oldN 
     * @param {String} newN 
     * @returns {Map}
     */
    function setTagNamespace(tags, oldN, newN){
        let returnTag = new Map()
        tags.forEach(tag => {

            const searchRegex = new RegExp(`${oldN}:.*[^\\]]`, `g`)
            const tagString = searchRegex.exec(tag)
            if(tagString != null){
                const replacer = replace(tagString, newN)

                returnTag.set(tagString, replacer)
            }
            // {
            //     console.log("---")
            //     console.log(`当前tag为：${tag}`)
            //     //console.log(`当前正则表达式为：${searchRegex}`)
            //     console.log(`检测到含有${oldN}标签：${tagString}`)            
            //     //console.log(`将${replacer}添加至list，目前的list成员总和为${returnTag}`)
            // }
        })
        return returnTag
    }

    /**
     * @description 替换输入Tag的命名空间
     * @param {RegExpExecArray} input 
     * @param {String} newN 
     * @param {String} oldN 
     * @returns {String}
     */
    function replace(input, newN) {
        const searchRegex = new RegExp(`:.*`, `g`).exec(input)
        const returns = `${newN}${searchRegex}`
        // {
        //     console.log("---")
        //     console.log(`正在替换${input}中的${oldN}为${newN}`)
        //     console.log(`成功将${input}替换为${returns}`)
        // }
        return returns
    }
})