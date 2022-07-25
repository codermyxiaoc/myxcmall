<template>
    <div id="home">
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll class="content" 
            :probeType="3" 
            :pullingUp="true"
            @scrollpos="scrollpos" 
            @pullingUp="pullingUp"
            ref="content">
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <bat-control class="bat-control" @tabclick='tabclick' :titles="['流行','新款','精选']"></bat-control>
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
            istopshow: false
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

    methods: {
        pullingUp() {
            this.getHomeGood(this.currentType)
            this.$refs.content.refresh()
            this.$refs.content.finishPullUp()
        },
        scrollpos(position) {
           this.istopshow = position.y<=-1000
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
        }
    },
    computed: {
        showgoods() {
            return this.goods[this.currentType].list
        },
       

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

  .bat-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>