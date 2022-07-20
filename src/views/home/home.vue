<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'
import HomeSwiper from './chlicomps/homeswiper.vue'
import { getHomeMul } from 'network/home'

export default {
    name: 'VueHome',

    data() {
        return {
            banners: [],
            recommends: []
        };
    },

    components: {
        NavBar,
        HomeSwiper
        
    },

    mounted() {
        
    },

    methods: {
        
    },
    created() {
        getHomeMul().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }

};
</script>

<style lang="css" scoped>

.nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>