<template>
    <div class="shop">
        <div class="shop-top">
            <img :src="merchantInfo.shopLogo" alt="">
            <span class="title">{{ merchantInfo.name }}</span>
        </div>
        <div class="shop-detail">
            <div class="good-sales">
                <div>
                    <span>{{ merchantInfo.cSells | cSells }}</span>
                    <span>{{ merchantInfo.cGoods }}</span>
                </div>
                <div>
                    <span>销售量</span>
                    <span>全部宝贝</span>
                </div>
            </div>
            <div class="good-des">
                <div class="score" v-for="item in merchantInfo.score" :key="item.name">
                    <span>{{ item.name }}&nbsp;&nbsp;</span>
                    <span :style="iscolor(item.isBetter)">{{ item.score |score }}&nbsp;&nbsp;</span>
                    <span class="better" :style="isbackcolor(item.isBetter)">{{ item.isBetter? '高': '低'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyxcmallDetailshopInfo',

    data() {
        return {
            
        };
    },

    props: {
        merchantInfo: {
            type: Object,
            default() {
                return{}
            }
        }
    },

    mounted() {
        
    },

    methods: {
        iscolor(flag) {
            return flag ? {color: 'red'} : { color: 'green' }
        },
        isbackcolor(flag) {
            return flag ? { backgroundColor: 'red' } : { backgroundColor: 'green'} 
        }
    },
    filters: {
        score(value) {
            return value.toFixed(2)
        },
        cSells(value) {
            if (value >= 10000) return (value/10000).toFixed(1) + '万'
            return value
        }

    },
    computed: {

    }
};
</script>

<style lang="css" scoped>

.shop {
    padding: 9px;
    border-bottom: 5px solid #f2f5f8;
}

.shop-top {
    margin-top: 15px;
    line-height: 50px;
    display: flex;
    align-items: center;
}

.shop-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
}

.shop-top .title {
    text-align: center;
    margin-left: 10px;
}
.shop-detail {
    display: flex;
    margin-top: 20px;
}
.shop-detail .good-sales {
    width: 50%;
    justify-content: space-between;
    box-shadow: 2px 0px 0px rgba(100, 100, 100, .1);
}
.shop-detail .good-sales div{
    text-align: center;
    margin-top: 5px;
    display: flex;
}
.shop-detail .good-sales div span {
    flex: 1;
}
.shop-detail .good-des {
    width: 50%;
    font-size: 14px;
}
.shop-detail .good-des .score {
    text-align: right;
    margin-bottom: 4px;
}
.better {
    color: aliceblue;
}

</style>