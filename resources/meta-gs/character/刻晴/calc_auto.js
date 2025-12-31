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
  title: '刻芙希草Q总伤害',
  params: { q: 1, team: 'kefuxicao' },
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
  title: '刻皇希杜Q总伤害',
  params: { q: 1, team: 'kehuangxidu' },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}, {
  title: '刻芙希杜Q总伤害',
  params: { q: 1, team: 'kefuxidu' },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}, {
  title: '刻皇夏杜Q总伤害',
  params: { q: 1, team: 'kehuangxiadu' },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}, {
  title: '刻九夏杜Q总伤害',
  params: { q: 1, team: 'kejiuxiadu' },
  dmg: ({ talent }, dmg) => {
    let t1j = dmg(talent.q['技能伤害'], 'q')
    let t2j = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t2 = dmg(talent.q['连斩伤害'] / 8, 'q')
    let t3j = dmg(talent.q['最后一击伤害'], 'q')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}]

export const defParams = {
  q: 1,
  team: 'kefuxidu'  // 默认显示刻芙希杜
}

export const defDmgIdx = 6  // 对应"刻芙希杜Q总伤害"（索引6，因为数组从0开始）
export const mainAttr = 'atk,cpct,cdmg,mastery'

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
  // 刻芙希杜和刻芙希草队伍buff
  check: ({ params }) => params.team === 'kefuxidu' || params.team === 'kefuxicao',
  title: '精5苍古6命芙宁娜：获得[dmg]%增伤，普攻[aDmg]%增伤，增加[atkPct]%攻击',
  data: {
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32,
    dmg: 124,
    atkPct: 40
  }
}, {
  check: ({ params }) => params.team === 'kefuxidu',
  title: '芙宁娜-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  // 刻芙希草队伍buff
  check: ({ params }) => params.team === 'kefuxicao',
  title: '精5千夜纳西妲：增加精通[mastery]（双草千夜）,减防[enemyDef]%',
  data: {
    mastery: 298,
    enemyDef: 30 
  }
}, {
  // 刻九夏杜队伍buff
  check: ({ params }) => params.team === 'kejiuxiadu',
  title: '精5终末6命九条：增加[atkPlus]点攻击力与[cdmg]%爆伤',
  data: {
    atkPlus: 776.2,
    cdmg: 60
  }
}, {
  check: ({ params }) => params.team === 'kejiuxiadu',
  title: '九条-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  // 刻皇希杜和刻皇夏杜队伍buff
  check: ({ params }) => params.team === 'kehuangxidu' || params.team === 'kehuangxiadu',
  title: '精5终末6命皇女：增加[atkPct]%攻击',
  data: {
    atkPct: 85
  }
}, {
  check: ({ params }) => params.team === 'kehuangxidu' || params.team === 'kehuangxiadu',
  title: '皇女-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  // 刻皇夏杜和刻九夏杜队伍buff
  check: ({ params }) => params.team === 'kehuangxiadu' || params.team === 'kejiuxiadu',
  title: '精5香韵6命夏沃蕾：增加[atkPct]%攻击，[kx]%减抗，[dmg]%增伤',
  data: {
    atkPct: 104,
    kx: 40,
    dmg: 60
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu' || params.team === 'kejiuxiadu',
  title: '夏沃蕾-宗室：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu' || params.team === 'kejiuxiadu',
  title: '双火共鸣：增加攻击[atkPct]%',
  data: {
    atkPct: 25
  }
}, {
  // 刻芙希杜、刻芙希草和刻皇希杜共有buff
  check: ({ params }) => params.team === 'kefuxidu' || params.team === 'kefuxicao' || params.team === 'kehuangxidu',
  title: '精5岩峰巡歌6命希诺宁：[kx]%减抗，[dmg]%增伤',
  data: {
    kx: 45,
    dmg: 51.2
  }
}, {
  check: ({ params }) => params.team === 'kefuxidu' || params.team === 'kefuxicao' || params.team === 'kehuangxidu',
  title: '希诺宁-烬城勇者绘卷：[dmg]%增伤',
  data: {
    dmg: 40
  }
}, {
  // 杜林的buff，根据队伍不同有差异
  check: ({ params }) => params.team === 'kefuxidu',
  title: '精5黑蚀6命杜林（刻芙队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 20,
    dmg: 50,
    enemyDef: 30,
    atkPct: 32,
    aPlus: 2950,
    ePlus: 2950,
    qPlus: 2900
  }
}, {
  check: ({ params }) => params.team === 'kejiuxiadu',
  title: '精5黑蚀6命杜林（刻九队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 20,
    dmg: 50,
    enemyDef: 30,
    atkPct: 32,
    aPlus: 3990,
    ePlus: 3990,
    qPlus: 3990
  }
}, {
  check: ({ params }) => params.team === 'kehuangxidu',
  title: '精5黑蚀6命杜林（刻皇希队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 35,
    dmg: 50,
    enemyDef: 30,
    atkPct: 56,
    aPlus: 3400,
    ePlus: 3400,
    qPlus: 3400
  }
}, {
  check: ({ params }) => params.team === 'kehuangxiadu',
  title: '精5黑蚀6命杜林（刻皇夏队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
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
  // 刻芙希草队伍有超激化反应
  check: ({ params }) => params.team === 'kefuxicao',
  title: '超激化反应',
  data: {
    reaction: 'aggravate'
  }
}]
