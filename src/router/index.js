import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Music from '../views/music/music.vue'
import Story from '../views/story/story.vue'
import Photo from '../views/photo/photo.vue'
import Movie from '../views/movie/movie.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: '/home',
   
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
    meta:{
      title:"音乐"
    }
  },
  {
    path: '/story',
    name: 'story',
    component: Story,
    meta:{
      title:"小说"
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo,
    meta:{
      title:"图片"
    }
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
    meta:{
      title:"电影"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
