<template>
  <div id="echartsTreeDom" style="width: 100%;height: 100%;"/>
</template>

<script>
import * as echarts from 'echarts';
import {data} from "@/data";
import {calculateProduction, getMessage} from "@/lib/util";

export default {
  name: "TreeDiagram",
  props: {
    echartsData: Object
  },
  watch: {
    getOption: {
      handler(n, o) {
        if ((!n && n !== o) || !this.myChart) {
          return
        }
        this.myChart.showLoading();
        this.myChart.setOption(this.getOption);
        this.myChart.hideLoading();
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    const dom = document.getElementById('echartsTreeDom')
    this.myChart = echarts.init(dom);
    // this.myChart.on('click',  (params)=> {
    //   this.showDialog(params);
    // });
  },
  computed: {
    objectData() {
      return data
    },
    getOption() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.option.series.data = [this.echartsData]
      return this.option
    }
  },
  data() {
    return {
      myChart: undefined,
      option: {
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: ({name, value}) => {
            return this.getMessageInfo(name, value);
          }
        },
        series: { // 支持鼠标缩放
          dataZoom: {
            type: 'inside',
            filterMode: 'filter',
            orient: 'vertical'
          },
          // 配置组件为draggable，支持拖拽操作，设置鼠标左键拖拽
          roam: true,
          initialTreeDepth: 4,
          expandAndCollapse: true,
          type: 'tree',
          data: [],
          top: '1%',
          left: '15%',
          bottom: '1%',
          right: '7%',
          symbolSize: 50,
          orient: 'RL',
          label: {
            verticalAlign: 'middle',
            align: 'left',
            position: [5, -10],
            formatter: (params) => {
              return params.name + ':' + params.value;
            }
          },
          leaves: {
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      }
    }
  },
  methods: {
    showDialog(params) {
      this.$emit('showDialog', params)
    },
    getMessageInfo(name, value) {
      let res1 = calculateProduction(name, value, 'level1')
      let res2 = calculateProduction(name, value, 'level2')
      let res3 = calculateProduction(name, value, 'level3')
      let msg1 = getMessage('1级配速:', res1)
      let msg2 = getMessage('2级配速:', res2)
      let msg3 = getMessage('3级配速:', res3)
      return msg1 + '<br>' + msg2 + '<br>' + msg3;
    }
  }
}
</script>

<style scoped>

</style>
