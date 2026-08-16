import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ attr, rule, def }) {
  let title = []
  let particularAttr = { ...usefulAttr['刻晴'] }
  // 自定义配队：激化/超激化精通（保留 fork 定制数值 atk:50，阈值 130）
  if (attr.mastery >= 130) {
    title.push('精通')
    particularAttr.atk = 50
    particularAttr.mastery = 75
  }
  if (title.length > 0) {
    return rule(`刻晴-${title.join('')}`, particularAttr)
  }
  // 默认配队（保留 fork 定制数值 atk:50、phy:100）
  return def({ ...particularAttr, atk: 50, phy: 100 })
}
