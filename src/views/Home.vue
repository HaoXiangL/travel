<template>
  <div class="home">
    <Header></Header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/Header'
import Swiper from '../components/Swiper/Swiper'
import Icons from '../components/Icons/Icon'
import Recommend from '../components/Recommend/Recommend'
import Weekend from '../components/Weekend/Weekend'

export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>
