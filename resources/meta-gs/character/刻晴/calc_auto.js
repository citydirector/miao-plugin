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
  params: { q: 1, team: 'kefuxidu' },  // 修改为字符串标识
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
  title: '刻皇希杜Q总伤害',
  params: { q: 1, team: 'kehuangxidu' },  // 修改为字符串标识
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

export const defDmgIdx = 4  // 对应"刻芙希杜Q总伤害"
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
  // 刻芙希杜队伍buff
  check: ({ params }) => params.team === 'kefuxidu',
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
  // 刻皇希杜队伍buff
  check: ({ params }) => params.team === 'kehuangxidu',
  title: '精5终末6命皇女：增加[atkPct]%攻击',
  data: {
    atkPct: 85
  }
}, {
  check: ({ params }) => params.team === 'kehuangxidu',
  title: '皇女-千岩牢固：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  // 两个队伍共有的buff
  check: ({ params }) => params.team === 'kefuxidu' || params.team === 'kehuangxidu',
  title: '精5岩峰巡歌6命希诺宁：[kx]%减抗，[dmg]%增伤',
  data: {
    kx: 45,
    dmg: 51.2
  }
}, {
  check: ({ params }) => params.team === 'kefuxidu' || params.team === 'kehuangxidu',
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
    aPlus: 3000,
    ePlus: 3000,
    qPlus: 3000
  }
}, {
  check: ({ params }) => params.team === 'kehuangxidu',
  title: '精5黑蚀6命杜林（刻皇队）：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 35,
    dmg: 50,
    enemyDef: 30,
    atkPct: 56,
    aPlus: 3500,
    ePlus: 3500,
    qPlus: 3500
  }
}, {
  // 只有刻皇队有超激化反应
  check: ({ params }) => params.team === 'kehuangxidu',
  title: '超激化反应',
  data: {
    reaction: 'aggravate'
  }
}]
