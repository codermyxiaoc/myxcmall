<template>
    <div class="tab-bar-itme" @click="clickitme">
        <div v-if="!isactive">
            <slot name="tab-iocn"></slot>
        </div>
        <div v-else>
            <slot name="tab-iocn-active"></slot>
        </div>
        <div :style="activestyle" :class="{active:isactive}">
            <slot name="tab-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueTabbaritme',

    data() {
        return {

        };
    },
    props: {
        path: {
            type: String
        },
        activecolor: {
            type: String,
            default: '#000'
        }
    },
    mounted() {
        
    },
    
    methods: {
        clickitme(){
            this.$router.push(this.path).catch(err=>err)
        },
       
    },

    computed: {
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle() {
            return this.isactive ? { color: this.activecolor } : {}
                
        }
    }
};
</script>

<style lang="css" scoped>


.tab-bar-itme {
    flex: 1;
    text-align: center;
    font-size: 14px;
}
.tab-bar-itme img {
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
}

.active {
    font-weight :800;
}

</style>