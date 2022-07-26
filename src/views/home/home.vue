<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
        <bat-control 
        class="batcontrol" 
        @tabclick='tabclick' 
        :titles="['流行','新款','精选']" 
        ref="tabcontrol1"
        v-show="istabtop"></bat-control>
        <scroll class="content" :probeType="3" :pullingUp="true" @scrollpos="scrollpos" @pullingUp="pullingUp"
            ref="content">
            <home-swiper :banners="banners" @swiperimgload="swiperimgload"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <bat-control  @tabclick='tabclick' :titles="['流行','新款','精选']"
                ref="tabcontrol2"></bat-control>
            <goods-inst :goodsinst="showgoods"></goods-inst>
        </scroll>
        <back-top @click.native="backclick" v-show="istopshow"></back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'
import BatControl from 'components/content/tabcontrol/tabcontrol.vue'
import GoodsInst from 'components/content/goods/goodsinst.vue'

import HomeSwiper from './chlicomps/homeswiper.vue'
import RecommendView from './chlicomps/RecommendView.vue';
import FeatureView from './chlicomps/featureview.vue';
import scroll from 'components/common/scroll/scroll.vue';
import backTop from 'components/content/backtop/backtop.vue';
import { debounce } from 'common/tool/debounce.js'

import { getHomeMul, getHomeGood } from 'network/home'


export default {
    name: 'VueHome',

    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {page: 0, list:[]},
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            },
            currentType: 'pop',
            istopshow: false,
            taboffsettop: 0,
            istabtop: false,
            leavedoty: 0
        };
    },

    components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    BatControl,
    GoodsInst,
    scroll,
    backTop
    },

  

    created() {
        this.getHomeMul(),

        this.getHomeGood('pop')
        this.getHomeGood('new')
        this.getHomeGood('sell')
    },

    mounted()
    {
        const refresh = debounce(this.$refs.content.refresh,200)
        this.$bus.$on('itemimgload',() => {
            refresh()
        })   
    },

    methods: {
        swiperimgload() {
            this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
        },
        pullingUp() {
            this.getHomeGood(this.currentType)
            this.$refs.content.refresh()
            this.$refs.content.finishPullUp()
        },
        scrollpos(position) {
            this.istopshow = position.y<=-1000
            this.istabtop = position.y<=-this.taboffsettop
        },
        getHomeMul() {
            getHomeMul().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        backclick() {
            this.$refs.content.scrollTo(0, 0, 1000)
        },

        getHomeGood(type) {
            const page = this.goods[type].page + 1
            getHomeGood(type, page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
            }) 
        },
        tabclick(index) {
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break
            }
            this.$refs.tabcontrol1.currentindex = index
            this.$refs.tabcontrol2.currentindex = index

        },
    },
    computed: {
        showgoods() {
            return this.goods[this.currentType].list
        },
       

    },
    activated() {
        this.$refs.content.refresh()
        this.$refs.content.scrollTo(0,this.leavedoty,0)
    },
    deactivated() {
        this.leavedoty = this.$refs.content.BSinstance.y
    },

};
</script>

<style lang="css" scoped>






#home {
    height: 100vh;
    position: relative;
}

.nav-bar {
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .batcontrol {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>