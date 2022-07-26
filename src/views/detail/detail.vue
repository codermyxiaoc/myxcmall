<template>
    <div id="detail">
        <det-nav-bar></det-nav-bar>
        <detail-swiper :sildimglist="slidimage"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
    </div>
</template>

<script>
import DetailSwiper from './chilcomps/detailswiper.vue'
import DetNavBar from './chilcomps/detnavbar.vue'
import DetailBaseInfo from './chilcomps/detailbaseinfo.vue'

import { detaildata, goodsInfo } from 'network/detail.js'
export default {
    name: 'MyxcmallDetail',

    data() {
        return {
            iid: null,
            slidimage: [],
            goods:{}
        };
    }, 

    components: {
        DetNavBar,
        DetailSwiper,
        DetailBaseInfo

    },

    mounted() {
        
    },

    created() {
        this.iid = this.$route.query.iid

        detaildata(this.iid).then(res => {
            const result = res.result
            this.slidimage = result.itemInfo.topImages
            this.goods = new goodsInfo(result.itemInfo, result.columns, result.shopInfo)
            console.log(res);

        })
    },

    activated() {
       
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

</style>