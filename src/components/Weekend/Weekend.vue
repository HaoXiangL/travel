<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '肇庆七星岩',
        desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '肇庆七星岩',
        desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '肇庆七星岩',
        desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';
    .recommend-title
        text-align left
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        text-align left
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .16rem
            background #ff9300
            padding 0 .1rem
            border-radius .06rem
            color #fff
</style>
