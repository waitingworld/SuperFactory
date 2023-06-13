<template>
  <el-card shadow="always" class="InventoryTopClass">
    <div style="overflow-y: auto;height: 87vh;" class="tagBoxDivClass">
      <div class="tagBoxClass">
        <el-popover placement="top-start" title="可生产物品"  trigger="hover"
                    v-for="(object,index) in Object.getOwnPropertyNames(rawMaterial)" :key="index">
         <SuperObjectItem :objects="supperObjects(object)"/>
        <el-tag @click=" setMaterials(object,amount)" class="tagClass" size="mini" slot="reference"
                :type="objectData[object].from?'warning':''">
          {{ object }}
        </el-tag>
        </el-popover>
      </div>
      <div class="tagBoxClass">
        <el-popover placement="top-start" title="可生产物品"  trigger="hover"
                    v-for="(object,index) in Object.getOwnPropertyNames(smelt)" :key="index">
          <SuperObjectItem :objects="supperObjects(object)"/>
        <el-tag @click=" setMaterials(object,amount)" class="tagClass" size="mini" slot="reference"
                :type="objectData[object].from?'warning':''">
          {{ object }}
        </el-tag>
        </el-popover>
      </div>
      <div class="tagBoxClass">
        <el-popover placement="top-start" title="可生产物品"  trigger="hover"
                    v-for="(object,index) in Object.getOwnPropertyNames(chemicalIndustry)" :key="index">
          <SuperObjectItem :objects="supperObjects(object)"/>
        <el-tag @click=" setMaterials(object,amount)" class="tagClass" size="mini" slot="reference"
                :type="objectData[object].from?'warning':''">
          {{ object }}
        </el-tag>
        </el-popover>
      </div>
      <div class="tagBoxClass">
        <el-popover placement="top-start" title="可生产物品"  trigger="hover"
                    v-for="(object,index) in Object.getOwnPropertyNames(primaryFinishedProduct)" :key="index">
          <SuperObjectItem :objects="supperObjects(object)"/>
        <el-tag @click=" setMaterials(object,amount)" class="tagClass" size="mini" slot="reference"
                :type="objectData[object].from?'warning':''">
          {{ object }}
        </el-tag>
        </el-popover>
      </div>
      <div class="tagBoxClass">
        <el-popover placement="top-start" title="可生产物品"  trigger="hover"
                    v-for="(object,index) in Object.getOwnPropertyNames(advancedFinishedProduct)" :key="index">
          <SuperObjectItem :objects="supperObjects(object)"/>
          <el-tag @click=" setMaterials(object,amount)" class="tagClass" size="mini" slot="reference"
                  :type="objectData[object].from?'warning':''">
            {{ object }}
          </el-tag>
        </el-popover>
      </div>
    </div>
  </el-card>
</template>

<script>
import {data} from "@/data";
import SuperObjectItem from "@/components/SuperObjectItem.vue";

export default {
  name: "Inventory",
  components: {SuperObjectItem},
  props: {
    amount: Number,
    percent: Number
  },
  computed: {
    actMount(){
      return parseFloat((this.percent * this.amount / 100).toFixed(2))
    },
    objectData() {
      return data
    },
    rawMaterial() {//原料
      let res = {}
      Object.getOwnPropertyNames(this.objectData).forEach(object => {
        if (['铁矿厂', '铜矿厂', '棉花厂', '油井', '木材厂', '硅矿厂', '铀矿厂'].includes(this.objectData[object].production)) {
          res[object] = this.objectData[object]
        }
      })
      return res
    },
    smelt() {//冶炼
      let res = {}
      Object.getOwnPropertyNames(this.objectData).forEach(object => {
        if (['冶炼车间'].includes(this.objectData[object].production)) {
          res[object] = this.objectData[object]
        }
      })
      return res
    },
    chemicalIndustry() {//化工
      let res = {}
      Object.getOwnPropertyNames(this.objectData).forEach(object => {
        if (['化工车间'].includes(this.objectData[object].production)) {
          res[object] = this.objectData[object]
        }
      })
      return res
    },
    primaryFinishedProduct() {//初级成品
      let res = {}
      Object.getOwnPropertyNames(this.objectData).forEach(object => {
        if (['初级成品车间'].includes(this.objectData[object].production)) {
          res[object] = this.objectData[object]
        }
      })
      return res
    },
    advancedFinishedProduct() {//高级成品
      let res = {}
      Object.getOwnPropertyNames(this.objectData).forEach(object => {
        if (['高级成品车间'].includes(this.objectData[object].production)) {
          res[object] = this.objectData[object]
        }
      })
      return res
    }
  },
  data() {
    return {
      currentResource: ''
    }
  },
  watch: {
    actMount() {
      this.setMaterials(this.currentResource, this.actMount)
    }
  },
  methods: {
    findAdvancedItems(item,sources=[]) {
      for (const key in data) {
        const productionData = data[key];
        if (productionData.need && productionData.need[item]) {
          sources.push(key);
          this.findAdvancedItems(key, sources);
        }
      }
      return sources;
    },
    supperObjects(object){
      return Array.from(new Set(this.findAdvancedItems(object)))
    },
    setMaterials(resource, amount = 1) {
      this.currentResource = resource
      this.$emit('setCurrentResource', this.currentResource)
      this.$emit('setMaterials', resource, amount)
    }
  }
}
</script>

<style scoped>
.InventoryTopClass {
  display: flex;
  width: 100%;
  height: calc(95% - 1vw);
}

.tagBoxClass {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2vh;
  overflow-y: auto;
}

.tagClass {
  margin: 3px;
  cursor: pointer;
  width: 70px;
}

.tagBoxDivClass {

}

.tagBoxDivClass::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.tagBoxDivClass::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
}

.tagBoxDivClass::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>
