<template>
    <div id="detail">
        <det-nav-bar class="det-nav-bar" @navclick="navclick" ref="detnavbar"></det-nav-bar>
        <scroll class="content" :probeType="3" :pullingUp="true" ref="content" @scrollpos="scrollpos">
            <detail-swiper :sildimglist="slidimage"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :merchantInfo="merchantInfo"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @detailimgload="detailimgload"></detail-goods-info>
            <detail-param-info :paramInfo="goodsparam" ref="paramInfo"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
            <goods-inst :goodsinst="recommend" ref="goodsinst"></goods-inst>
        </scroll>
    </div>
</template>
<script>
import DetailSwiper from './chilcomps/detailswiper.vue'
import DetNavBar from './chilcomps/detnavbar.vue'
import DetailBaseInfo from './chilcomps/detailbaseinfo.vue'
import DetailShopInfo from './chilcomps/detailshopInfo.vue'
import DetailGoodsInfo from './chilcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './chilcomps/DetailParamInfo.vue'
import DetailCommentInfo from './chilcomps/DetailCommentInfo.vue'
import GoodsInst from 'components/content/goods/goodsinst.vue'
import { debounce } from 'common/tool/debounce'

import { itemListenerMixin } from 'common/mixin/mixin';

import Scroll from 'components/common/scroll/scroll.vue'

import { detaildata, goodsInfo, merchantInfo, goodsparam, getrecommend } from 'network/detail.js'
export default {
    name: 'MyxcmallDetail',

    data() {
        return {
            iid: null,
            slidimage: [],
            goods:{},
            merchantInfo:{},
            detailInfo: {},
            goodsparam: {},
            commentInfo: {},
            recommend: [],
            currentdoty:[],
            getThemeTop: null,
            index:0
        };
    }, 

    components: {
        DetNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsInst 

    },

    mixins: [itemListenerMixin],

    mounted() {
        this.getThemeTop = debounce(() => {
            this.currentdoty = []
            this.currentdoty.push(0)
            this.currentdoty.push(this.$refs.paramInfo.$el.offsetTop)
            this.currentdoty.push(this.$refs.commentInfo.$el.offsetTop)
            this.currentdoty.push(this.$refs.goodsinst.$el.offsetTop)
        },100)
        
    },

    created() {
        this.iid = this.$route.query.iid

        detaildata(this.iid).then(res => {
            const result = res.result
            this.slidimage = result.itemInfo.topImages
            this.goods = new goodsInfo(result.itemInfo, result.columns, result.shopInfo)
            this.merchantInfo = new merchantInfo(result.shopInfo)
            this.detailInfo = result.detailInfo
            this.goodsparam = new goodsparam(result.itemParams.info, result.itemParams.rule)
            if (result.rate.cRate !== 0){
                this.commentInfo = result.rate.list[0]
            }
            console.log(res);
        })
        getrecommend().then(res => {
            this.recommend = res.data.list
        })
    },

    destroyed() {
        this.$bus.$off('itemimgload', this.itemImgListener)
    },

    methods: {
        detailimgload() {
            this.$refs.content.refresh()
            this.getThemeTop()
        },
        navclick(index) {
            this.$refs.content.scrollTo(0, -this.currentdoty[index] + 44,500)
        },
        scrollpos(position) {
            let dotlength = this.currentdoty.length
            const positionY = -position.y + 44 
            for(var i = dotlength-1 ; i>=0 ; i--) {
                if (positionY > this.currentdoty[i]) {
                    this.index = i
                    break
                }
            }
            /* for (var i = 0; i < dotlength; i++) {
                if (this.index !== i && (i < dotlength - 1 && positionY > this.currentdoty[i] && positionY < this.currentdoty[i + 1]) ||
                    (i === dotlength - 1 && positionY > this.currentdoty[i])) {
                    console.log(1);
                    this.index = i
                }
            } */
        }
        
    },
    watch: {
        index() {
            this.$refs.detnavbar.currentindex = this.index
        }
    }
};
</script>

<style lang="css" scoped>



#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.det-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content {
    height: calc(100% - 44px);
}
</style>