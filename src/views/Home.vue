<template>
  <div class="home">
    <Header></Header>
    <swiper></swiper>
    <icons></icons>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/Header'
import Swiper from '../components/Swiper/Swiper'
import Icons from '../components/Icons/Icon'

export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Icons
  }
}
</script>
