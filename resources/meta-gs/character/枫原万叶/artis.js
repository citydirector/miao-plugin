import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ cons, rule, def }) {
  if (cons === 6) {
    return rule('万叶-满命', { atk: 85, cpct: 100, cdmg: 100, mastery: 100, dmg: 100, recharge: 75 })
  }
  return def(usefulAttr['枫原万叶'])
}
