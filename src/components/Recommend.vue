<template>
    <div>
        <div class="recommend-title"><img class="love" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
//   data () {
//     return {
//       recommendList: [{
//         id: '001',
//         imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/21/21fc12509f773020a3.img.jpg_200x200_1cd6def9.jpg',
//         title: '肇庆七星岩',
//         desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
//       }, {
//         id: '002',
//         imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/21/21fc12509f773020a3.img.jpg_200x200_1cd6def9.jpg',
//         title: '肇庆七星岩',
//         desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
//       }, {
//         id: '003',
//         imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/21/21fc12509f773020a3.img.jpg_200x200_1cd6def9.jpg',
//         title: '肇庆七星岩',
//         desc: '七星岩位于广东省肇庆市，景区总面积达8.23平方公里，因七座石灰岩峰排列状如天上北斗七星而得名'
//       }]
//     }
//   }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';
    .love
        width .4rem
        height .4rem
        margin-right .1rem
    .recommend-title
        text-align left
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent: .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        text-align left
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
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
