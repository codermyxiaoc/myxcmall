<template>
    <div class="goods">
        <goods-inst-item v-for="(item,index) in goodsinst" :key="index" :goodsitem="item"></goods-inst-item>
    </div>
</template>

<script>
import GoodsInstItem from './goodsinstitem.vue'

export default {
    name: 'MyxcmallGoodsinst',

    data() {
        return {
            
        };
    },
   components: {
       GoodsInstItem
   },

    props: {
        goodsinst: {
            type: Array,
            default() {
                return []
            }
        }
    },

    mounted() {
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>