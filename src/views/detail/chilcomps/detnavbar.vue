<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="left" @click="backclick">
                <img src="~assets/img/detail/direction-left.png" alt="">
            </div>
            <div slot="center" class="center">
                <div v-for="(item,index) in title" @click="currentavtive(index)"
                    :class="{active:currentindex === index}" :key="item">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue';
export default {
    name: 'MyxcmallDetnavbar',

    data() {
        return {
            title: ['商品', '参数', '评论','推荐'],
            currentindex: 0 
        };
    },

    components: {
        NavBar
    },

    mounted() {
        
    },

    methods: {
        currentavtive(index) {
            this.currentindex = index
        },
        backclick() {
            this.$router.go(-1)
        }
    },
    
    computed: {
        
    }
};
</script>

<style lang="css" scoped>




.nav-bar img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
}

.nav-bar .center {
    display: flex;
}

.nav-bar .center div {
    flex: 1;
    font-size: 13px;
}
.active{
    color: var(--color-tint) !important;
}
</style>