export const materialsTypes = [
    '原料',
    '冶炼车间',
    '化工车间',
    '初级成品车间',
    '高级成品车间',
]

export const typeToProduction = {
    '铁矿厂': 'info',
    '铜矿厂': 'info',
    '棉花厂': 'info',
    '木材厂': 'info',
    '油井': 'info',
    '硅矿厂': 'info',
    '铀矿厂': 'info',
    '冶炼车间': 'success',
    '化工车间': '',
    '初级成品车间': 'warning',
    '高级成品车间': 'danger',
}

export const sortByProduction = [
    '铁矿厂',
    '铜矿厂',
    '棉花厂',
    '木材厂',
    '油井',
    '硅矿厂',
    '铀矿厂',
    '冶炼车间',
    '化工车间',
    '初级成品车间',
    '高级成品车间',
]
export const factoryList = [
    {name: '铁矿厂', size: 'small'},
    {name: '铜矿厂', size: 'small'},
    {name: '传送带', size: 'small'},
    {name: '储物间', size: 'small'},
    {name: '冶炼车间', size: 'small'},
    {name: '机械臂', size: 'small'},
    {name: '棉花厂', size: 'small'},
    {name: '木材厂', size: 'small'},
    {name: '油井', size: 'small'},
    {name: '长机械臂', size: 'small'},
    {name: '筛选机械臂', size: 'small'},
    {name: '硅矿厂', size: 'small'},
    {name: '铀矿厂', size: 'small'},
    {name: '地下传送带', size: 'small'},
    {name: '平均分流器', size: 'middle'},
    {name: '筛选分流器', size: 'middle'},
    {name: '高级成品车间', size: 'big'},
    {name: '初级成品车间', size: 'big'},
    {name: '化工车间', size: 'big'},
    {name: '铀浓缩车间', size: 'big'},
    {name: '导弹车厂', size: 'big'},
]
export const iconMap = {}

export async function getImageBase64(name) {
    // const response = await fetch('./icon/' + name + '.png'); // 获取文件
    // const blob = await response.blob();           // 读取文件数据
    // const reader = new FileReader();              // 创建 FileReader 对象
    // reader.readAsDataURL(blob);                    // 将数据转换为 DataURL 编码
    // reader.onload = () => {
    //     iconMap[name] = reader.result;                // 将编码结果设置为 img 的 src 属性
    // };
    iconMap[name] = './icon/' + name + '.png';
}

export const data = {
    '铁矿': {production: '铁矿厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '铜矿': {production: '铜矿厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '棉花': {production: '棉花厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '木材': {production: '木材厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '原油': {production: '油井', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '硅矿': {production: '硅矿厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},
    '铀矿': {production: '铀矿厂', speed: {level1: 2, level2: 1.66, level3: 1.25, level4: 0.76}},

    '铁片': {
        production: '冶炼车间',
        need: {'铁矿': 2},
        speed: {level1: 3.33, level2: 2.77, level3: 2.22, level4: 1.18}
    },
    '钛块': {production: '冶炼车间', need: {'铁矿': 3}, speed: {level1: 2, level2: 1.66, level3: 1.33, level4: 0.71}},
    '铜线': {production: '冶炼车间', need: {'铜矿': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '水泥': {production: '冶炼车间', need: {'硅矿': 5}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '玻璃': {production: '冶炼车间', need: {'硅矿': 2}, speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}},
    '碎石': {
        production: '冶炼车间',
        need: {},
        from: {'钛块': 1},
        speed: {level1: 2, level2: 1.66, level3: 1.33, level4: 0.71}
    },

    '塑料片': {production: '化工车间', need: {'原油': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '硫': {production: '化工车间', need: {'原油': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '木炭': {production: '化工车间', need: {'木材': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '轻质油': {production: '化工车间', need: {'原油': 3}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '石墨': {production: '化工车间', need: {'木材': 5}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '沥青': {
        production: '化工车间',
        need: {},
        from: {'轻质油': 1},
        speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}
    },

    '木板': {production: '初级成品车间', need: {'木材': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '纸': {production: '初级成品车间', need: {'木材': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '纺织': {production: '初级成品车间', need: {'棉花': 2}, speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}},
    '钛合金': {
        production: '初级成品车间',
        need: {'钛块': 3, '铁片': 1},
        speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}
    },
    '铁钉': {
        production: '初级成品车间',
        need: {'铁片': 1},
        speed: {level1: 5, level2: 3.12, level3: 1.56, level4: 1.07}
    },
    '口罩': {
        production: '初级成品车间',
        need: {'原油': 2, '纺织': 1},
        speed: {level1: 5, level2: 4.16, level3: 3.33, level4: 1.78}
    },
    '磁铁': {
        production: '初级成品车间',
        need: {'铁片': 5},
        speed: {level1: 5, level2: 4.16, level3: 3.33, level4: 1.78}
    },
    '气球': {
        production: '初级成品车间',
        need: {'塑料片': 5},
        speed: {level1: 5, level2: 4.16, level3: 3.33, level4: 1.78}
    },
    '硫酸': {
        production: '初级成品车间',
        need: {'铜线': 4, '硫': 2},
        speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}
    },
    '绝缘线': {
        production: '初级成品车间',
        need: {'塑料片': 2, '铜线': 5},
        speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}
    },
    '螺丝': {production: '初级成品车间', need: {'铁片': 2}, speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}},
    '玩具车': {
        production: '初级成品车间',
        need: {'塑料片': 5},
        speed: {level1: 10, level2: 8.33, level3: 6.66, level4: 3.57}
    },
    '平底锅': {
        production: '初级成品车间',
        need: {'木板': 5, '铁片': 10},
        speed: {level1: 10, level2: 8.33, level3: 6.66, level4: 3.57}
    },
    '灯泡': {
        production: '初级成品车间',
        need: {'铜线': 1, '石墨': 3},
        speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}
    },
    '钢板': {production: '初级成品车间', need: {'铁片': 5}, speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}},
    '电池': {
        production: '初级成品车间',
        need: {'铁片': 1, '硫酸': 2, '铜线': 3},
        speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}
    },
    '军用电筒': {
        production: '初级成品车间',
        need: {'灯泡': 1, '电池': 2},
        speed: {level1: 8, level2: 6.66, level3: 5.33, level4: 2.85}
    },
    '头盔': {
        production: '初级成品车间',
        need: {'铁片': 50},
        speed: {level1: 8, level2: 6.66, level3: 5.33, level4: 2.85}
    },
    '望远镜': {
        production: '初级成品车间',
        need: {'玻璃': 5, '铁片': 10},
        speed: {level1: 8, level2: 6.66, level3: 5.33, level4: 2.85}
    },
    '军用背包': {
        production: '初级成品车间',
        need: {'纺织': 20},
        speed: {level1: 10, level2: 8.33, level3: 6.66, level4: 3.57}
    },
    '军用水壶': {
        production: '初级成品车间',
        need: {'铁片': 10},
        speed: {level1: 10, level2: 8.33, level3: 6.66, level4: 3.57}
    },
    '红科研瓶': {
        production: '初级成品车间',
        need: {'铁片': 1, '铜线': 1},
        speed: {level1: 10, level2: 8.33, level3: 6.66, level4: 3.57}
    },

    '电路板': {
        production: '高级成品车间',
        need: {'铜线': 5, '绝缘线': 2, '塑料片': 5},
        speed: {level1: 10, level2: 7.14, level3: 5, level4: 2.77}
    },
    '收音机': {
        production: '高级成品车间',
        need: {'电池': 1, '绝缘线': 5, '塑料片': 5},
        speed: {level1: 10, level2: 7.14, level3: 5, level4: 2.77}
    },
    '防毒面具': {
        production: '高级成品车间',
        need: {'口罩': 1, '木炭': 50},
        speed: {level1: 10, level2: 7.14, level3: 5, level4: 2.77}
    },
    '内燃机': {
        production: '高级成品车间',
        need: {'钢板': 8, '螺丝': 5},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '电动机': {
        production: '高级成品车间',
        need: {'磁铁': 8, '钢板': 8, '铜线': 5},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '电风扇': {
        production: '高级成品车间',
        need: {'电动机': 1, '绝缘线': 10, '铁片': 10},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '散热器': {
        production: '高级成品车间',
        need: {'电动机': 1, '铁片': 50},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '高效电池': {
        production: '高级成品车间',
        need: {'电池': 1, '电路板': 2, '绝缘线': 10},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '抽水机': {
        production: '高级成品车间',
        need: {'电动机': 1, '绝缘线': 8, '钢板': 8},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '电钻': {
        production: '高级成品车间',
        need: {'电动机': 1, '绝缘线': 10, '钢板': 10},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '防弹衣': {
        production: '高级成品车间',
        need: {'钢板': 1, '纺织': 30},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '洗衣机': {
        production: '高级成品车间',
        need: {'电动机': 1, '电路板': 5, '铁片': 50, '绝缘线': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '冰箱': {
        production: '高级成品车间',
        need: {'电动机': 1, '电路板': 8, '铁片': 50, '绝缘线': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '摩托车': {
        production: '高级成品车间',
        need: {'钢板': 20, '内燃机': 5, '电池': 2, '电路板': 2},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '电视机': {
        production: '高级成品车间',
        need: {'绝缘线': 3, '玻璃': 50, '塑料片': 50, '电路板': 10},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '手机': {
        production: '高级成品车间',
        need: {'高效电池': 1, '玻璃': 5, '绝缘线': 3, '电路板': 10},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '太阳能板': {
        production: '高级成品车间',
        need: {'高效电池': 5, '石墨': 50, '电路板': 2},
        speed: {level1: 30, level2: 21.42, level3: 15, level4: 8.33}
    },
    '电脑': {
        production: '高级成品车间',
        need: {'处理器': 1, '散热器': 1, '塑料片': 50, '绝缘线': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '拖拉机': {
        production: '高级成品车间',
        need: {'内燃机': 1, '钢板': 80, '玻璃': 30},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '挖掘机': {
        production: '高级成品车间',
        need: {'内燃机': 2, '钢板': 80, '电路板': 2},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '处理器': {
        production: '高级成品车间',
        need: {'电路板': 8, '高效电池': 1, '散热器': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '汽车': {
        production: '高级成品车间',
        need: {'钢板': 80, '玻璃': 5, '内燃机': 4, '电池': 5},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '信号接收器': {
        production: '高级成品车间',
        need: {'处理器': 2, '高效电池': 8, '塑料片': 100},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '炸弹': {
        production: '高级成品车间',
        need: {'硫': 50, '铁片': 100, '木炭': 50},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '坦克': {
        production: '高级成品车间',
        need: {'内燃机': 8, '钢板': 100, '电路板': 5, '电池': 5, '灯泡': 4},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '火箭助推器': {
        production: '高级成品车间',
        need: {'内燃机': 10, '石墨': 100, '处理器': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '火箭燃料': {
        production: '高级成品车间',
        need: {'高效电池': 10, '轻质油': 10, '太阳能板': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '遥控感应器': {
        production: '高级成品车间',
        need: {'处理器': 8, '电路板': 20, '高效电池': 5},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '导弹车': {
        production: '高级成品车间',
        need: {'火箭助推器': 1, '火箭燃料': 1, '遥控感应器': 1},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '离心机': {
        production: '高级成品车间',
        need: {'水泥': 200, '电动机': 50, '钢板': 200},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '超级计算机': {
        production: '高级成品车间',
        need: {'处理器': 25, '散热器': 100, '绝缘线': 300},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '雷达': {
        production: '高级成品车间',
        need: {'处理器': 8, '遥控感应器': 2, '超级计算机': 1},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '原子弹': {
        production: '高级成品车间',
        need: {'炸弹': 50, '铀棒': 100, '钢板': 200, '离心机': 3},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    'DF导弹系统': {
        production: '高级成品车间',
        need: {'原子弹': 1, '导弹车': 1, 'BD导航卫星': 1},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    'BD导航卫星': {
        production: '高级成品车间',
        need: {'信号接收器': 1, '超级计算机': 1, '雷达': 1},
        speed: {level1: 45, level2: 32.14, level3: 22.5, level4: 12.5}
    },
    '涡扇发动机': {
        production: '高级成品车间',
        need: {'内燃机': 1, '钛合金': 5, '电路板': 3},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '重力推进器': {
        production: '高级成品车间',
        need: {'轻质油': 5, '电动机': 4, '遥控感应器': 1},
        speed: {level1: 20, level2: 14.28, level3: 10, level4: 5.55}
    },
    '绿科研瓶': {
        production: '高级成品车间',
        need: {'磁铁': 1, '硫': 1, '木炭': 1},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '蓝科研瓶': {
        production: '高级成品车间',
        need: {'绝缘线': 3, '电池': 1, '钢板': 3},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '黑科研瓶': {
        production: '高级成品车间',
        need: {'纺织': 3, '炸弹': 3, '信号接收器': 1, '水泥': 5},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '紫科研瓶': {
        production: '高级成品车间',
        need: {'电路板': 3, '内燃机': 3, '石墨': 10},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '黄科研瓶': {
        production: '高级成品车间',
        need: {'电动机': 3, '高效电池': 1, '处理器': 1},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    'H-30轰炸机': {
        production: '高级成品车间',
        need: {'涡扇发动机': 4, '重力推进器': 2, 'BD导航卫星': 1, '雷达': 3},
        speed: {level1: 60, level2: 42.85, level3: 30, level4: 16.66}
    },

    '铀棒': {production: '铀浓缩车间', need: {'铀矿': 200}, speed: {level1: 6, level2: 5, level3: 4, level4: 2.14}},
    '铀矿废料': {
        production: '铀浓缩车间',
        need: {},
        from: {'铀棒': 1},
        speed: {level1: 2, level2: 1.66, level3: 1.33, level4: 0.71}
    },
    '碳灰': {
        production: '冶炼车间',
        need: {},
        from: {'碳纤维': 1},
        speed: {level1: 2, level2: 1.66, level3: 1.33, level4: 0.71}
    },
    '碳纤维': {
        production: '初级成品车间',
        need: {'塑料片': 3, '石墨': 2},
        speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}
    },
    '铝块': {production: '冶炼车间', need: {'铁矿': 3}, speed: {level1: 2, level2: 1.66, level3: 1.33, level4: 0.71}},
    '初级加速芯片': {
        production: '高级成品车间',
        need: {'绝缘线': 5, '电池': 1, '稀土永磁片': 3},
        speed: {level1: 6, level2: 4.28, level3: 3, level4: 1.66}
    },
    '中级加速芯片': {
        production: '高级成品车间',
        need: {'初级加速芯片': 3, '高效电池': 1, '稀土永磁片': 3},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '高级加速芯片': {
        production: '高级成品车间',
        need: {'中级加速芯片': 3, '信号接收器': 1, '稀土超导体': 3},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '轻机枪子弹': {
        production: '高级成品车间',
        need: {'铜线': 5, '木炭': 3, '硫酸': 2},
        speed: {level1: 8, level2: 5.71, level3: 4, level4: 2.22}
    },
    '重型机子弹': {
        production: '高级成品车间',
        need: {'钛合金': 2, '钢板': 5, '轻机枪子弹': 1},
        speed: {level1: 16, level2: 11.42, level3: 8, level4: 4.44}
    },
    '穿甲导弹': {
        production: '高级成品车间',
        need: {'中级加速芯片': 1, '铀棒': 3, '重型机子弹': 1, '稀土超导体': 1},
        speed: {level1: 24, level2: 17.14, level3: 12, level4: 6.66}
    },
    '五彩科研瓶': {
        production: '高级成品车间',
        need: {'初级加速芯片': 1, '轻机枪子弹': 3, '电动机': 1},
        speed: {level1: 15, level2: 10.71, level3: 7.5, level4: 4.16}
    },
    '稀土超导体': {
        production: '高级成品车间',
        need: {'钛合金': 3, '绝缘线': 1, '稀土永磁片': 3},
        speed: {level1: 6, level2: 4.28, level3: 3, level4: 1.66}
    },
    '稀土永磁片': {
        production: '高级成品车间',
        need: {'稀土': 3, '钢板': 1},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '铝合金': {
        production: '初级成品车间',
        need: {'铁片': 3, '铝块': 1},
        speed: {level1: 3, level2: 2.5, level3: 2, level4: 1.07}
    },
    '氧气瓶': {
        production: '高级成品车间',
        need: {'塑料片': 1, '钢板': 3, '玻璃': 3},
        speed: {level1: 6, level2: 4.28, level3: 3, level4: 1.66}
    },
    '降落伞': {
        production: '高级成品车间',
        need: {'纺织': 10, '塑料片': 8},
        speed: {level1: 6, level2: 4.28, level3: 3, level4: 1.66}
    },
    '太空舱': {
        production: '高级成品车间',
        need: {'碳纤维': 8, '散热器': 3, '氧气瓶': 5},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '航天飞船': {
        production: '高级成品车间',
        need: {'火箭助推器': 3, '火箭燃料': 3, '雷达': 3, 'BD导航卫星': 3, '黄科研瓶': 5, '涡扇发动机': 3, '降落伞': 4},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
    '空间站': {
        production: '高级成品车间',
        need: {'航天飞船': 1, '太空舱': 5, '雷达': 1, 'BD导航卫星': 3, '涡扇发动机': 3, '降落伞': 8},
        speed: {level1: 12, level2: 8.57, level3: 6, level4: 3.33}
    },
}
