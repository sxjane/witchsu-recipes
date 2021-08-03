const Recipe = require('./recipe')
const STYLE = ['unknown', 'pork', 'chicken', 'fish', 'beef', 'lamp', 'cake', 'salad', 'other']

const NAME_LIST = [
    new Recipe('peach_salad', '蜜桃沙拉', STYLE[7]),
    new Recipe('glory_muffin', '荣耀玛芬', STYLE[6]),
]

module.exports = NAME_LIST