<template>
  <div id="echartsDom" style="width: 100%;height: 100%;"/>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "ForceOrientedDiagram",
  props: {
    echartsData: Object
  },
  watch: {
    echartsData: {
      handler(n, o) {
        if ((!n && n !== o) || !this.myChart) {
          return
        }
        this.myChart.showLoading();
        this.addNodes([this.echartsData]);
        this.myChart.setOption(this.option);
        this.myChart.hideLoading();
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    const dom = document.getElementById('echartsDom')
    this.myChart = echarts.init(dom);
  },
  data() {
    return {
      myChart: undefined,
      option: {
        tooltip: {
          show: true
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500
            },
            data: [],
            links: []
          }
        ]
      }
    }
  },
  methods: {
    addNodes(nodes, symbolSize = 50) {
      nodes.forEach(node => {
        let newNode = {
          id: node.id,
          parentId: node.parentId,
          name: node.name,
          symbolSize: symbolSize,
          value: node.amount,
          label: {
            show: true,
            formatter: (params) => {
              return params.name + ':' + params.value;
            }
          }
        };
        this.option.series[0].data.push(newNode);
        this.option.series[0].links.push({
          source: newNode.id,
          target: newNode.parentId
        });

        if (node.children && node.children.length) {
          this.addNodes(node.children, symbolSize - 5);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
