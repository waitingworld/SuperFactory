<template>
  <div class="ShowBoardTopClass">
    <div class="topBoxClass">
      <el-card shadow="always" style="overflow: hidden;">
        <!--        <div class="tagBoxClass">
                  <div v-for="(type,typeIndex) in materialsTypes" :key="typeIndex" class="materialBoxClass">
                    <div class="labelClass">{{ type }}:</div>
                    <el-tag v-for="(materials,index) in allData" :key="index" class="materialsTagClass"
                            v-show="filterByType( objectFirstKey(materials),type)">
                      {{ objectFirstKey(materials) }}:<span class="spanClass">{{ materials[objectFirstKey(materials)] }}</span>
                    </el-tag>
                  </div>
                </div>-->
        <div style="overflow-y: auto;max-height: 30vh;padding: 10px;" class="divBoxDivClass">
          <el-form label-position="top" >
            <el-form-item label="目标物品个数" >
              <el-slider v-model="amount" :step="1" :max="100" :min="1" v-show="allData.length>0" />
            </el-form-item>
            <el-form-item label="目标物品效率" v-if="false">
              <el-slider v-model="percent" :step="1" :max="100" :min="1" v-show="allData.length>0"/>
            </el-form-item>
          </el-form>
          <div class="tagBoxClass">
            <el-tag v-for="(materials,index) in allData" :key="index" class="materialsTagClass"
                    :type="getMaterialType(objectFirstKey(materials))">
              {{ objectFirstKey(materials) }}:<span class="spanClass">{{ materials[objectFirstKey(materials)].toFixed(2) }}</span>
            </el-tag>
          </div>
        </div>
      </el-card>
    </div>
    <div class="bottomBoxClass">
      <el-card shadow="always" class="" style="width:100%;height: 100%" :body-style="{'height':'calc(100% - 40px)'}">
        <!--        <force-oriented-diagram :echarts-data="treeData" />-->
        <tree-diagram :echarts-data="treeData" @showDialog="showDialog"/>
      </el-card>
    </div>
    <el-dialog :title="dialogObjectName" :visible.sync="dialogVisible" @close="dialogVisible = false">
      <el-descriptions border :column="3">
        <el-descriptions-item label="生产设备" :span="3">
          {{
            objectData[dialogObjectName] ? objectData[dialogObjectName].production : '原料'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="一级速度">
          {{ objectData[dialogObjectName] ? objectData[dialogObjectName].speed.level1 : "" }}
        </el-descriptions-item>
        <el-descriptions-item label="二级速度">
          {{ objectData[dialogObjectName] ? objectData[dialogObjectName].speed.level2 : "" }}
        </el-descriptions-item>
        <el-descriptions-item label="三级速度">
          {{ objectData[dialogObjectName] ? objectData[dialogObjectName].speed.level3 : "" }}
        </el-descriptions-item>
      </el-descriptions>
      <div v-if="this.objectData[dialogObjectName] && this.objectData[dialogObjectName].need">
        <h3>所需原料</h3>
        <div style="display: flex;">
          <div :key="index" style="padding-left: 20px;"
               v-for="(objectName,index) in Object.getOwnPropertyNames(this.objectData[dialogObjectName].need)">
            {{ objectName }} : {{ objectData[dialogObjectName].need[objectName] }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TreeDiagram from "@/components/TreeDiagram";
import {data, materialsTypes, typeToProduction} from "@/data";

export default {
  name: "ShowBoard",
  components: {TreeDiagram},
  props: {
    treeData: Object,
    allData: Array
  },
  data() {
    return {
      dialogObjectName: '',
      amount: 1,
      percent: 100,
      dialogVisible: false
    }
  },
  watch: {
    amount() {
      this.$emit("setAmount", this.amount)
    },
    percent(){
      this.$emit("setPercent", this.percent)
    }
  },
  computed: {
    objectData() {
      return data
    },
    materialsTypes() {
      return materialsTypes
    },
    typeToProduction() {
      return typeToProduction
    }
  },
  methods: {
    filterByType(materialName, type) {
      if (type === '原料' && !this.objectData[materialName].need) {
        return true
      } else if (this.objectData[materialName].production === type) {
        return true
      } else {
        return false
      }
    },
    getMaterialType(materialName) {
      return this.typeToProduction[this.objectData[materialName].production]
    },
    objectFirstKey(obj) {
      return Object.getOwnPropertyNames(obj)[0]
    },
    showDialog(params) {
      this.dialogObjectName = params.name
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.ShowBoardTopClass {
  width: 100%;
  height: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*flex-wrap: nowrap;*/
  /*align-content: center;*/
  /*justify-content: flex-start;*/
  /*align-items: stretch;*/
}

.materialsTagClass {
  margin: 5px;
  width: 100px;
}

.spanClass {
  color: red;
}

.topBoxClass {
  height: 35vh;
}

.tagBoxClass {
  overflow-y: auto;
  height: 15vh;
  width: 100%;
}

.tagBoxClass::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.tagBoxClass::-webkit-scrollbar-thumb {
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

.tagBoxClass::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.materialBoxClass {
  border: 1px solid #86cfff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 5px 0;
}

.labelClass {
  margin: 5px;
  width: 100px;
}

.bottomBoxClass {
  margin-top: 3vh;
  height: 58vh;
}

.divBoxDivClass{
  width: 100%;
}

.divBoxDivClass::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.divBoxDivClass::-webkit-scrollbar-thumb {
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

.divBoxDivClass::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>
