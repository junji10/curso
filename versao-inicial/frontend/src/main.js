import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZHLDqSIsImVtYWlsIjoiYW5kcmUub2t1ZGExQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTQwMDE0MDIsImV4cCI6MTYxNDI2MDYwMn0.1iOZdfBR6WOYxQEcosDMhR7SPSxwQLIm6fxNNBORTpw'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
