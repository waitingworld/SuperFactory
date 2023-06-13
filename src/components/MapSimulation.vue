<template>
  <div class="mapSimulationTopClass">
    <div style="display: flex;"
         @dragstart="dragstart" @dragover="dragover" @dragenter="dragenter" @drop="drop" @dragend="dragend">
      <div style="width: 10%;">
        <div class="factoryBoxClass" data-drop="move">
<!--          <el-image data-effect="copy" draggable="true" class="factoryItemClass"-->
<!--               :src="imageMap[factory.name]"-->
<!--               :class="factory.size+'Class'" v-for="(factory,index) in factorys" :key="index">{{ factory.name }}-->
<!--          </el-image>-->
          <img data-effect="copy" draggable="true" class="factoryItemClass"
               :src="imageMap[factory.name]"
               :class="factory.size+'Class'" v-for="(factory,index) in factorys" :key="index"/>
<!--          <div data-effect="copy" draggable="true" class="factoryItemClass"-->
<!--               :class="factory.size+'Class'" v-for="(factory,index) in factorys" :key="index">{{ factory.name }}-->
<!--          </div>-->
        </div>
      </div>
      <div style="width: 85%;">
        <div class="mapBodyClass">
          <div class="horizontalClass" v-for="h in 36" :key="h">
            <div data-drop="copy" class="landPlotClass" v-for="s in 64" :key="s"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {factoryList, iconMap} from "@/data";

export default {
  name: "MapSimulation",
  data() {
    return {
      currentDropNode: undefined
    }
  },
  computed: {
    factorys() {
      return factoryList
    },
    imageMap() {
      return iconMap
    }
  },
  mounted() {
  },
  methods: {
    dragstart(e) {
      e.dataTransfer.effectAllowed = e.target.dataset.effect;
      this.currentDropNode = e.target
    },
    dragover(e) {
      e.preventDefault()
    },
    clearDropStyle() {
      document.querySelectorAll('.drop-over').forEach((node) => {
        node.classList.remove('drop-over')
      })
    },
    dragenter(e) {
      this.clearDropStyle()
      const dropNode = this.getDropNode(e.target)
      if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        dropNode.classList.add('drop-over')
      }
    },
    drop(e) {
      this.clearDropStyle()

      const dropNode = this.getDropNode(e.target)
      if (dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        if (dropNode.dataset.drop === 'copy') {
          dropNode.innerHTML = ''
          const cloneNode = this.currentDropNode.cloneNode(true)
          cloneNode.dataset.effect = 'move'
          dropNode.appendChild(cloneNode)
        } else {
          this.currentDropNode.remove()
        }
      }

    },
    dragend(e) {
      console.log('dragend', e.target)
    },
    getDropNode(node) {
      while (node) {
        if (node.dataset && node.dataset.drop) {
          return node
        }
        node = node.parentNode
      }
    }
  }
}
</script>

<style scoped>
.mapSimulationTopClass {
  width: 100vw;
  height: 87vh;
}

.drop-over {
  background-color: rgba(141, 147, 150, 0.37);
}

.factoryBoxClass {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.bigClass {
  width: 60px;
  height: 60px;
}

.middleClass {
  width: 30px;
  height: 60px;
}

.smallClass {
  width: 30px;
  height: 30px;
}

.factoryItemClass {
  background-color: #ededed;
  font-size: xx-small;
  text-align: center;
  text-align-all: center;
  font-weight: bolder;
}

.mapBodyClass {
  height: 1200px;
}

.horizontalClass {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
}

.landPlotClass {
  width: 30px;
  height: 30px;
  border: 1px solid #86cfff;
}
</style>