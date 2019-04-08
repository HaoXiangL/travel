<template>
    <div class="icons">
        <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游榜单'
      }, {
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b6b632b3ab5f5b40d8836f4c84c09530.png',
        desc: '游山玩水'
      }, {
        id: '0004',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ee/5114069893722102.png',
        desc: '七星岩'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
        desc: '庙会祈福'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏光'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '玩转长隆'
      }, {
        id: '0011',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
        desc: '山水风光'
      }]
    }
  },
  computed: {
    // icon翻页数据处理
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // pages里的索引不存在，则创建一个数组,pages[0]就是第一页
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
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
