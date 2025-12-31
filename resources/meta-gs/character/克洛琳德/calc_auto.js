export const details = [{
    title: 'E后穿透射击',
    params: { blPct: 0.5 },
    dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害2'][1], 'a')
}, {
    title: 'E后穿透射击激化',
    params: { blPct: 0.5 },
    dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害2'][1], 'a', 'aggravate')
}, {
    title: 'E贯夜·契令伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害2'][2], 'a')
}, {
    title: 'E贯夜·契令激化',
    dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害2'][2], 'a', 'aggravate')
}, {
    title: 'Q完整伤害',
    dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['技能伤害2'][0], 'q')
    return {
      dmg: q1.dmg * 5,
      avg: q1.avg * 5
    }
  }
}, {
    title: '克皇 AAAE一轮激化',
    params: { team: true,  blPct: 0.5 },
    dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.e['驰猎伤害2'][1], 'a')
    let a2 = dmg(talent.e['驰猎伤害2'][1], 'a', 'aggravate')
    let e1 = dmg(talent.e['贯夜伤害2'][2], 'a', 'aggravate')
    return {
      dmg: a1.dmg * 2 + a2.dmg + e1.dmg,
      avg: a1.avg * 2 + a2.avg + e1.avg
    }
  }
}, {
    title: '克皇夏杜 AAAE一轮',
    params: { team: 'kehuangxiadu',  blPct: 0.5 },
    dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.e['驰猎伤害2'][1], 'a')
    let a2 = dmg(talent.e['驰猎伤害2'][1], 'a')
    let e1 = dmg(talent.e['贯夜伤害2'][2], 'a')
    return {
      dmg: a1.dmg * 2 + a2.dmg + e1.dmg,
      avg: a1.avg * 2 + a2.avg + e1.avg
    }
  }
}, {
    title: '克皇 Q完整激化',
    params: { team: true },
    dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['技能伤害2'][0], 'q')
    let q2 = dmg(talent.q['技能伤害2'][0], 'q', 'aggravate')
    return {
      dmg: q1.dmg * 3 + q2.dmg * 2,
      avg: q1.avg * 3 + q2.avg * 2
    }
  }
}]

export const defParams = ({ weapon }) => weapon.name === '海渊终曲' ? { BondOfLife: 35 * 3 + 25, blPct: 1 } : { BondOfLife: 35 * 3, blPct: 1 }// 生命之契在此调整,请勿超过200,默认生命之契未计入队友治疗转化
export const defDmgIdx = 6  // 对应"克皇夏杜 AAAE一轮"（索引6，数组从0开始）
export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'

export const buffs = [{
    title: '克洛琳德天赋：触发雷元素反应普通攻击与残光将终造成的伤害提升[aPlus]',
    data: {
      aPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800)),
      qPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800))
    }
}, {
    title: '克洛琳德天赋：生命之契的数值提升或降低时，暴击率提升[cpct]% ',
    data: {
      cpct: 10 * 2
    }
}, {
	title: '克洛琳德4命：[buffCount]%最大生命值的生命之契使残光将终造成的伤害提升[qDmg]',
    cons: 4,
    data: {
      buffCount: ({ talent, params, weapon }) => Math.min(params.blPct * (talent.q['赋予生命之契'] + params.BondOfLife), 200),
      qDmg: ({ talent, params, weapon }) => Math.min((params.blPct * (talent.q['赋予生命之契'] + params.BondOfLife) * 2), 200)
    }
}, {
    title: '克洛琳德6命：施放狩夜之巡后暴击率提高[cpct]%,暴击伤害提高[cdmg]%',
    cons: 6,
    data: {
      cpct: 10,
      cdmg: 70
    }
}, {
  check: ({ cons, params }) => (cons >= 2 && params.team === true),
  title: '千夜2命纳西妲：增加精通[mastery],减防[enemyDef]%',
  data: {
    mastery: 40,
    enemyDef: 30
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '精5苍古6命芙宁娜：获得[dmg]%增伤，普攻[aDmg]%增伤，增加[atkPct]%攻击',
  data: {
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32,
    dmg: 124,
    atkPct: 40
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '芙宁娜-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '精5终末6命皇女：增加[atkPct]%攻击',
  data: {
    atkPct: 85
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '皇女-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '精5香韵6命夏沃蕾：增加[atkPct]%攻击，[kx]%减抗，[dmg]%增伤',
  data: {
    atkPct: 104,
    kx: 40,
    dmg: 60
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '夏沃蕾-宗室：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '双火共鸣：增加攻击[atkPct]%',
  data: {
    atkPct: 25
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '精5黑蚀6命杜林（克皇夏杜队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 35,
    dmg: 50,
    enemyDef: 30,
    atkPct: 56,
    aPlus: 4000,
    ePlus: 4000,
    qPlus: 4000
  }
}, {
  check: ({ cons, params }) => (cons < 2 && params.team === true),
  title: '千夜0命纳西妲：增加精通[mastery]',
  data: {
    mastery: 40
  }
}, {
  check: ({ params }) => params.team === true,
  sort: 7,
  title: '纳西妲-净善摄受明论：Q范围内在场角色增加精通[mastery]',
  data: {
    mastery: 250
  }
}, {
   check: ({ params }) => params.team === true,
   title: '钟离：降低敌人[kx]%全抗',
   data: {
     kx: 20
   }
}]

export const createdBy = 'liangshi'
