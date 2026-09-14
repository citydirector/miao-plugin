import { usefulAttr } from "../../artifact/artis-mark.js"

// 自定义评分（artis_user.js 优先于官方 artis.js，上游重构不会冲突）
export default function ({ attr, def }) {
  let title = []
  let particularAttr = { ...usefulAttr['刻晴'] }
  // 自定义配队：激化/超激化精通（精通 >= 130 生效，攻击/精通均 75 权重）
  if (attr.mastery >= 130) {
    title.push('精通')
    particularAttr.atk = 75
    particularAttr.mastery = 75
  }
  if (title.length > 0) {
    return def(particularAttr, title)
  }
  // 默认配队（大攻击 75 权重，保留 phy:100）
  return def({ ...particularAttr, atk: 75, phy: 100 })
}
