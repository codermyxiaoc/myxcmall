<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: 'MyxcmallScroll',

    data() {
        return {
            BSinstance: null,
            topshow: false
        };
    },

    props: {
        probeType: {
            type: Number,
            default:0
        },
        pullingUp: {
            type: Boolean,
            default() {
                return false
            }
        }
    },

    mounted() {
        this.BSinstance = new BScroll(this.$refs.wrapper,{
            click: true,
            observeDOM: true,
            probeType: this.probeType,
            pullUpLoad: this.pullingUp
        })
        this.BSinstance.on('scroll',position => {
           this.$emit('scrollpos',position)    
        })
        this.BSinstance.on('pullingUp', () => {
            this.$emit('pullingUp') 
            
        })
    },

    methods: {
        scrollTo(x , y, itme=500) {
            this.BSinstance.scrollTo( x, y, itme)
        },
        finishPullUp() {
            setTimeout(() => {
                this.BSinstance.finishPullUp()
            }, 2000);
        },
        refresh() {
            this.BSinstance.refresh()
        }
        
    },
};
</script>

<style lang="css" scoped>

</style>