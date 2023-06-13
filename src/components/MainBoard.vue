<template>
  <div class="topClass">
    <el-row :gutter="30" style="width: 100%;" v-if="!showMap">
      <el-col :span="5">
        <el-switch :active-text="'模拟'" :inactive-text="'计算'" class="fixBtnClass" v-model="showMap"/>
        <el-button size="mini" type="primary" @click="saveFiles(treeMaterials,currentResource+'.txt')">导出</el-button>
        <inventory @setMaterials="getMaterials" :amount="amount" :percent="percent"
                   @setCurrentResource="(name)=>{currentResource=name}"/>
      </el-col>
      <el-col :span="18">
        <show-board :all-data="allMaterials" :tree-data="treeMaterials" @setAmount="(total)=>{amount=total}"
                    @setPercent="(total)=>{percent=total}"/>
      </el-col>
    </el-row>
    <div v-if="showMap" style="position: fixed;top: 0;left: 0;">
      <el-switch :active-text="'模拟'" :inactive-text="'计算'" class="fixBtnClass" v-model="showMap"/>
      <map-simulation/>
    </div>
  </div>
</template>

<script>
import {data, iconMap, sortByProduction} from "@/data";
import Inventory from "@/components/Inventory";
import ShowBoard from "@/components/ShowBoard";
import {v4 as uuidv4} from "uuid";
import MapSimulation from "@/components/MapSimulation.vue";

export default {
  name: "MainBoard",
  components: {MapSimulation, ShowBoard, Inventory},
  computed: {
    objectData() {
      return data
    }
  },
  data() {
    return {
      allMaterials: [],
      treeMaterials: {},
      currentResource: '',
      amount: 1,
      percent: 100,
      showMap: false
    }
  },
  methods: {
    getJSONTree(obj, level = 0) {
      const indent = ' '.repeat(level * 2);
      let result = '';

      // 输出当前节点的属性
      result += `${indent}${obj.name}:${obj.value}\n`;

      // 处理子节点
      if (obj.children && obj.children.length > 0) {
        // 递归处理每个子节点
        for (let i = 0; i < obj.children.length; i++) {
          result += `${this.getJSONTree(obj.children[i], level + 2)}\n`;
        }
        result = result.slice(0, -2); // 移除最后一个子节点后面的逗号和换行
      }
      return result;
    },
    saveFiles(data, name) {
      //Blob为js的一个对象，表示一个不可变的, 原始数据的类似文件对象，这是创建文件中不可缺少的！
      let urlObject = window.URL || window.webkitURL || window;
      let export_blob = new Blob([this.getJSONTree(data)]);
      let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      save_link.click();
    },
    buildTree(node, parentId, amount = 1) {
      amount = parseFloat(parseFloat(amount).toFixed(2))
      if (!this.objectData[node]) {
        return node;
      }
      const uuid = uuidv4();

      const result = {
        id: uuid,
        parentId: parentId,
        name: node,
        amount: amount,
        value: amount.toFixed(2),
        symbol: "image://" + iconMap[node],
        children: []
      };

      if (!this.objectData[node].need) {
        return result;
      }
      let needNames = Object.getOwnPropertyNames(this.objectData[node].need)
      needNames.forEach((reqNode) => {
        result.children.push(this.buildTree(reqNode, uuid, this.objectData[node].need[reqNode] * amount));
      });
      return result;
    },
    getMaterials(resource, amount = 1) {
      const output = this.calculateProduction(resource, amount)
      this.allMaterials = this.sortByProduction(output)
      this.treeMaterials = this.buildTree(resource, '0', amount)

    },
    sortByProduction(materialsResult) {
      let materialsResultArr = Object.entries(materialsResult).map(([key, value]) => ({[key]: value}));
      return materialsResultArr.sort((a, b) => {
        return sortByProduction.indexOf(this.objectData[Object.getOwnPropertyNames(a)[0]].production) - sortByProduction.indexOf(this.objectData[Object.getOwnPropertyNames(b)[0]].production);
      });
    },
    // 定义函数用来计算资源生产情况
    calculateProduction(resource, amount = 1) {
      // 获取指定资源的生产信息
      const info = data[resource];

      // 如果该资源不支持生产，或指定数量不为正整数，则返回空对象
      if (!info || amount <= 0) {
        return {};
      }

      // 如果该资源可以直接生产，则计算产出量并返回
      if (!info.need) {
        return {[resource]: amount};
      }

      // 计算所需的原材料数量
      const materials = {};
      for (const [name, count] of Object.entries(info.need)) {
        const used = count * amount;
        materials[name] = (materials[name] || 0) + used;
        const subMaterials = this.calculateProduction(name, used);
        for (const [n, c] of Object.entries(subMaterials)) {
          materials[n] = (materials[n] || 0) + c;
        }
      }

      // 计算产出数量
      const output = {};
      for (const [name, count] of Object.entries(materials)) {
        const subInfo = data[name];
        if (!subInfo) {
          return {};
        }
        const produced = count;
        output[name] = ((output[name] || 0) + produced);
      }
      return output;
    }
  }
}
</script>

<style scoped>
.topClass {
  position: relative;
  width: 100%;
  height: 100%;
}

.fixBtnClass {
  margin: 1vw 1vh;
  z-index: 999;
}
</style>
