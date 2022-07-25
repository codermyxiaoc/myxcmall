<template>
    <div class="recommend">
        <div v-for="item  in recommends" :key="item.link" class="recommenditem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyxcmallRecommendView',

    data() {
        return {
            
        };
    },
    props: {
        recommends: {
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



.recommend {
    display: flex;
    text-align: center;
    padding: 10px 0px 20px;
    border-bottom:8px solid #eee;
    font-size:13px;
}

.recommenditem {
    flex: 1;
}

.recommenditem img{
    height: 70px;
    width: 70px;
}
</style>