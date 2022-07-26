<template>
    <div>
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="swiperimgload">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index';

export default {
    name: 'MyxcmallHomeswiper',

    data() {
        return {
            isload:true
        };
    },

    props: {
        banners: {
            type: Array,
            default() {
                return []
            } 
        }
    },

    mounted() {
        
    },

    methods: {
        swiperimgload() {
            if(this.isload) {
                this.$emit('swiperimgload')
                this.isload = false
            }
        } 
        
    },
    components: {
        SwiperItem,
        Swiper
    }
};
</script>

<style lang="scss" scoped>

</style>