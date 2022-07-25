<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles" :key="item"
            :class="{currentcolor:currentindex===index }" @click="clickbut(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyxcmallTabcontrol',

    data() {
        return {
           
            currentindex: 0
        };
    },

    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },

    mounted() {
        
    },

    methods: {
        clickbut(index) {
            this.currentindex = index 
            this.$emit('tabclick',index)
        }
    },

    computed: {
        
    }
};
</script>

<style lang="css" scoped>







.tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color:#fff ;
}

.tab-control-item {
    flex: 1;
}

.currentcolor {
    color: var(--color-high-text);
}
.currentcolor span {
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text);
}
</style>