<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showIcon">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
         </swiper>

    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // icon翻页数据处理
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // pages里的索引不存在，则创建一个数组,pages[0]就是第一页
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    },
    showIcon () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    @import '~style/mixins.styl';
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-imgcontent
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                color $darkTextColor
                text-align center
                ellipsis()
</style>
