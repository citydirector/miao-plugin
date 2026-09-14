import { usefulAttr } from "../../artifact/artis-mark.js"

// 自定义评分（artis_user.js 优先于官方 artis.js）
export default function ({ attr, def }) {
  let title = []
  let particularAttr = { ...usefulAttr['希诺宁'] }

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
    return def(particularAttr, title)
  }
  return def(usefulAttr['希诺宁'])
}
