<template>
  <div class="home">
    <Header></Header>
    <swiper></swiper>
    <div>test</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/Header'
import Swiper from '../components/Swiper/Swiper'

export default {
  name: 'home',
  components: {
    Header,
    Swiper
  }
}
</script>
