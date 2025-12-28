export const details = [{
  title: 'E后重击伤害',
  params: { q: 1, team: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: 'Q单段伤害',
  params: { q: 1, team: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['连斩伤害2'][0], 'q')
}, {
  title: 'Q总伤害',
  params: { q: 1, team: false },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['连斩伤害'] + talent.q['最后一击伤害'], 'q')
}, {
  title: 'Q总伤害·超激化',
  params: { q: 1, team: false },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q', 'aggravate')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q', 'aggravate')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q', 'aggravate')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}, {
  title: '刻芙希杜Q总伤害',
  params: { q: 1, team: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['连斩伤害'] + talent.q['最后一击伤害'], 'q')
    }
  }
}]

export const defParams = {
  q: 1,
  team: true
}

export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '刻晴被动：释放Q获得15%暴击率',
  data: {
    qCpct: 15
  }
}, {
  title: '刻晴4命：触发雷元素相关反应提升攻击力25%',
  cons: 4,
  data: {
    atkPct: 25
  }
}, {
  title: '刻晴6命：4层获得24%雷伤加成',
  cons: 6,
  data: {
    dmg: 24
  }
}, {
  check: ({ params }) => params.team === true,
  title: '精5苍古6命芙宁娜：获得[dmg]%增伤，普攻[aDmg]%增伤，增加[atkPct]%攻击',
  data: {
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32,
    dmg: 124,
    atkPct: 40
  }
}, {
  check: ({ params }) => params.team === true,
  title: '芙宁娜-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === true,
  title: '精5岩峰巡歌6命希诺宁：[kxdmg]%减抗，[dmg]%增伤',
  data: {
    kxdmg: 45,  // 减抗
    dmg: 51.2   // 增伤
  }
}, {
  check: ({ params }) => params.team === true,
  title: '希诺宁-烬城勇者绘卷：[dmg]%增伤',
  data: {
    dmg: 40
  }
}, {
  check: ({ params }) => params.team === true,
  title: '精5黑蚀6命杜林：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 20,
    dmg: 50,
    enemyDef: 30,
    atkPct: 32,
    aPlus: 4000,
    ePlus: 4000,
    qPlus: 4000
  }
}, ]
