const path = require('path')

class Recipe {
    constructor(eng_name, chi_name, style){
        this.img_name = eng_name + '.jpeg'
        this.name = chi_name
        this.style = style
    }
}

module.exports = Recipe