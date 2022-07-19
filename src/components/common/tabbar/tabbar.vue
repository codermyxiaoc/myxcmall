<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VueTabbar',

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

<style lang="css" scoped>


.tab-bar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #f6f6f6;

    height: 49px;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>