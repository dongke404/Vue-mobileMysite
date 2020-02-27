import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta';



import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Image } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Skeleton } from 'vant';
import { Sidebar ,SidebarItem} from 'vant';
import { Tabs,Tab,Grid,GridItem,Cell,Popup,Rate} from 'vant';

Vue.use(Rate);
Vue.use(Cell);
Vue.use(Popup);
Vue.use(GridItem);
Vue.use(Grid);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(Skeleton);
Vue.use(Swipe);
Vue.use(Skeleton);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Meta);
Vue.use(Image);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
