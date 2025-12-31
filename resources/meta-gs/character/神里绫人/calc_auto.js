export const details = [{
  title: '瞬水剑三段伤害',
  params: {
    q: 0,
    team: false
  },
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a')
}, {
  title: '瞬水剑三段蒸发',
  params: {
    q: 1,
    team: false
  },
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a', 'vaporize')
}, {
  title: '绫夜万班瞬水剑三段蒸发',
  params: {
    q: 1,
    team: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a', 'vaporize')
}, {
  title: '绫希茜杜瞬水剑三段蒸发',
  params: {
    q: 1,
    team: 'lingxixidu' 
  },
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a', 'vaporize')
}, {
  title: 'Q每段伤害',
  params: {
    q: 1,
    team: false
  },
  dmg: ({ talent }, dmg) => dmg(talent.q['水花剑伤害'], 'q')
}]

export const defDmgIdx = 3
export const mainAttr = 'hp,atk,cpct,cdmg,mastery'

export const defParams = {
  q: 1,
  team: 'lingxixidu'  // 修改为绫希茜杜队伍
}

export const buffs = [{
  title: '绫人元素爆发：普通攻击伤害提升伤害提升20%',
  data: {
    dmg: 20
  }
}, {
  cons: 1,
  title: '绫人1命：对于生命值低于或等于50%的敌人，瞬水剑造成的伤害提升40%',
  data: {
    dmg: 40
  }
}, {
  cons: 2,
  title: '绫人2命：3层浪闪以上时提高50%生命值',
  data: {
    hpPct: ({ params }) => params.q ? 0 : 50
  }
}, {
  check: ({ cons }) => cons < 2,
  sort: 9,
  title: '4层浪闪：提高瞬水剑伤害[aPlus]',
  data: {
    aPlus: ({ attr, calc, talent }) => calc(attr.hp) * talent.e['浪闪伤害值提高'] / 100 * 4
  }
}, {
  cons: 2,
  sort: 9,
  title: '绫人2命：5层浪闪提高瞬水剑伤害[aPlus]',
  data: {
    aPlus: ({ attr, calc, talent }) => calc(attr.hp) * talent.e['浪闪伤害值提高'] / 100 * 5
  }
}, {
  // 绫夜万班队伍buff
  check: ({ params, artis }) => params.team === true && artis.昔日宗室之仪 !== 4,
  title: '班尼特-昔日宗室之仪：增加攻击[atkPct]%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.team === true,
  title: '风鹰宗室班：增加[atkPlus]点攻击力',
  data: {
    atkPlus: 1202.35
  }
}, {
  check: ({ cons, params }) => cons <= 1 && params.team === true,
  title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%',
  data: {
    aDmg: 16,
    a2Dmg: 16,
    a3Dmg: 16,
    dmg: 40,
    atkPct: 20,
    kx: 40
  }
}, {
  check: ({ cons, params }) => ((cons < 6 && cons > 1) && params.team === true),
  title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
  data: {
    aDmg: 16,
    a2Dmg: 16,
    a3Dmg: 16,
    dmg: 48,
    atkPct: 20,
    kx: 40,
    mastery: 200
  }
}, {
  check: ({ cons, params }) => (cons >= 6 && params.team === true),
  title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
  data: {
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32,
    dmg: 48,
    atkPct: 40,
    kx: 40,
    mastery: 200
  }
}, {
  check: ({ params }) => params.team === true,
  title: '夜兰：获得[dmg]%增伤,[hpPct]%生命值,双水25%生命值',
  data: {
    dmg: 35,
    hpPct: 65
  }
}, {
  // 绫希茜杜队伍buff
  check: ({ params }) => params.team === 'lingxixidu',
  title: '绫希茜杜：希诺宁6+5教官4、茜特菈莉6+5勇者4（茜特菈莉精通最终面板，按1500计）',
  data: {
    hpPct: 40,
    atkPct: 25 + 20 + 45,  // 25+20+45 = 90%
    dmg: 40 + 51.2 + 56 + 60,  // 207.2%
    kx: 45 + 20 + 20,  // 85%
    aPlus: 1500 * 2 + 2850,  // 5850
    mastery: 250 + 120  // 370
  }
}, {
  check: ({ params }) => params.team === 'lingxixidu',
  title: '精5黑蚀6命杜林：减抗[kx]%，增伤[dmg]%，减防[enemyDef]%，增加攻击[atkPct]%，提升固定伤害',
  data: {
    kx: 20,
    dmg: 50,
    enemyDef: 30,
    atkPct: 32,
    aPlus: 2550,
    ePlus: 2550,
    qPlus: 2550
  }
}, {
  // 蒸发反应
  title: '蒸发反应',
  data: {
    reaction: 'vaporize'
  }
}]
