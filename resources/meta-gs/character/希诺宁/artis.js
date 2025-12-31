import {usefulAttr} from "../../artifact/artis-mark.js"

export default function ({attr, rule, def}) {
    let title = []
    let particularAttr = {...usefulAttr['希诺宁']}
    
    // 修改判断条件：双暴分数 > 220
    if (attr.cpct * 2 + attr.cdmg > 220) {
        title.push('战斗')
        
        // 修改属性评分目标
        particularAttr.cpct = 100   // 双暴评分100
        particularAttr.cdmg = 100   // 双暴评分100
        particularAttr.def = 85     // 防御评分85
        particularAttr.recharge = 55  // 充能评分55
        // 移除了治疗加成评分
    }
    
    if (title.length > 0) {
        return rule(`希诺宁-${title.join('')}`, particularAttr)
    }
    return def(usefulAttr['希诺宁'])
}
