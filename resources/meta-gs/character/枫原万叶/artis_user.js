import { usefulAttr } from "../../artifact/artis-mark.js"

// 自定义评分（artis_user.js 优先于官方 artis.js）
export default function ({ cons, def }) {
  if (cons === 6) {
    // 满命：大攻击 85、充能 75
    return def({ atk: 85, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, recharge: 75 }, ['满命'])
  }
  return def(usefulAttr['枫原万叶'])
}
