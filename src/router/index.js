import Vue from 'vue'
import Router from 'vue-router'
import menus from '../config/menu-config'

Vue.use(Router)

let routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      component: () => import(`../pages/BasicContainer/${sub.componentName}`)
    })
  })
})

export default new Router({ routes })
