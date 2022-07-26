<template>
        <swiper class="detail-swiper">
            <swiper-item class="swiper-item" v-for="item in sildimglist" :key="item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index';

export default {
    name: 'MyxcmallDetailswiper',

    data() {
        return {
            
        };
    },

    props: {
        sildimglist: {
            type: Array,
            default() {
                return []
            }
        }
    },

    components: {
        Swiper,
        SwiperItem
    },

    mounted() {
       
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>



.detail-swiper {
    height: 300px;
    overflow: hidden;
}

</style>