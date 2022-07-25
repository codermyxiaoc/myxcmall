<template>
    <div class="goodsitem">
        <img :src="goodsitem.show.img" alt="">
        <div class="goods-info">
            <p>{{ goodsitem.title }}</p>
            <span class="price">￥{{goodsitem.price}}</span>
            <span class="cfav">☆{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyxcmallGoodsinstitem',

    data() {
        return {
            
        };
    },
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
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


.goodsitem {
    padding-left: 3px ;
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goodsitem img {
    width: 100%;
    border-radius:5px ;
}
.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .cfav {
    position: relative;
}

.goods-info .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    widows: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>