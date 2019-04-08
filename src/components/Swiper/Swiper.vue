<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/19a4391cd4a6f03bb412073c74c0e638.jpg_890x330_5e8b64f5.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/a1e3b81226808697be2c4aa49463881d.jpg_890x330_7a09d2e2.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: white !important
.wrapper
    overflow: hidden
    width: 100%
    // height 0
    // padding-bottom: 36.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
