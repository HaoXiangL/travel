<template>
  <div class="home">
    <Header :city="city"></Header>
    <swiper :list="swiperList"></swiper>
    <icons :list="iconList"></icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Swiper from '../components/Swiper'
import Icons from '../components/Icon'
import Recommend from '../components/Recommend'
import Weekend from '../components/Weekend'
// axios库引入
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
