<template>
    <div class="baseinfo" v-if="Object.keys(goods).length!==0">
        <div class="title">{{goods.title}}</div>
        <div class="priceinfo">
            <span class="price">{{ goods.price }}</span>
            <span class="oldprice">{{ oldprice }}</span>
            <span class="discountDesc" v-show="isdiscountDesc">{{
            goods.discountDesc}}</span>
        </div>
        <div class="goodinfo">
            <span class="left">{{ goods.columns[0] }}</span>
            <span class="center">{{ goods.columns[1] }}</span>
            <span class="right">{{ goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="freightage">
            <span v-for="itme in goods.services.length-1" :key="itme">
                <img :src="goods.services[itme-1].icon" alt="">
                {{ goods.services[itme-1].name }}
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyxcmallDetailbaseinfo',

    data() {
        return {
            
        };
    },

    props: {
        goods: {
            type: Object,
            default() {
                return{}
            }
        }
    },

    mounted() {

    },

    methods: {
        
    },
    computed: {
        oldprice() {
            return this.goods.oldprice != null ? this.goods.oldprice : '￥' + this.goods.lowPrice  
        },
        isdiscountDesc() {
            return this.goods.discountDesc != ''
        }
    },

};
</script>

<style lang="css" scoped>
.baseinfo {
    padding: 0 8px;
    position: relative;
    border-bottom: 5px solid #f2f5f8;
}

.title{
    margin-top: 10px;
    
}
.priceinfo {
    margin-top: 10px;
}
.priceinfo .price {
    font-size: 22px;
    color: var(--color-tint);
}
.priceinfo .oldprice {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
    color: rgb(155, 155, 155);
}
.priceinfo .discountDesc  {
    margin-left: 5px; 
    padding: 2px;
    text-align: center;
    font-size: 9px;
    color: #fff;
    border-radius:8px;
    position: absolute;
    top: 44px;
    font: 500;
    background-color: var(--color-high-text);
}
.goodinfo {
    margin-top: 20px;
    display:flex;
    font-size: 13px;
    color: rgb(155, 155, 155);
    height: 25px;
    box-shadow: 0px 1px 0px rgba(100, 100, 100, 0.2);
    justify-content: space-between;
    
}

.freightage {
    line-height: 60px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    position: relative;

}
.freightage img {
    height: 14px;
    position: relative;
    top: 3px;
    left: 1px;
}



</style>