<template>
    <div>
        <tab-bar>
            <tab-bar-itme path="/home" >
                <img slot="tab-iocn" src="~assets/img/tabbar/home_light.png" alt="">
                <img slot="tab-iocn-active" src="~assets/img/tabbar/home_fill_light.png" alt="">
                <div slot="tab-text">首页</div>
            </tab-bar-itme>
            <tab-bar-itme path="/classify" >
                <img slot="tab-iocn" src="~assets/img/tabbar/classifys.png" alt="">
                <img slot="tab-iocn-active" src="~assets/img/tabbar/classify-fill.png" alt="">
                <div slot="tab-text">分类</div>
            </tab-bar-itme>
            <tab-bar-itme path="/cart" >
                <img slot="tab-iocn" src="~assets/img/tabbar/cart.png" alt="">
                <img slot="tab-iocn-active" src="~assets/img/tabbar/cart_fill.png" alt="">
                <div slot="tab-text">购物车</div>
            </tab-bar-itme>
            <tab-bar-itme path="/profile" >
                <img slot="tab-iocn" src="~assets/img/tabbar/my.png" alt="">
                <img slot="tab-iocn-active" src="~assets/img/tabbar/my_fill.png" alt="">
                <div slot="tab-text">我的</div>
            </tab-bar-itme>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '../common/tabbar/tabbar.vue'
import TabBarItme from '../common/tabbar/tabbaritme.vue'

export default {
    name: 'VueMiantabbar',
    components: {
        TabBar,
        TabBarItme
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>