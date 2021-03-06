// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
let personData = require('./common/mockData/persen');
Vue.config.productionTip = false

// 使用elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    // /Base[A-Z]\w+\.(vue|js)$/  Base开头驼峰命名的组件名的文件，比如：BaseTitle；
    /[a-z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
            // 剥去文件名开头的 `./` 和结尾的扩展名
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )
    console.log(componentName);
    
    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    )
})

// page路由数据。
const requirePage = require.context(
    // 其组件目录的相对路径
    './page',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    // /Base[A-Z]\w+\.(vue|js)$/  Base开头驼峰命名的组件名的文件，比如：BaseTitle；
    /[a-z]\w+\.(vue|js)$/
)
console.log(requirePage.keys());


/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
      return {
          persen: personData
      }
  }
})



