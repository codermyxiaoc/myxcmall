import { debounce } from "../tool/debounce"
export const itemListenerMixin = {
    data() {
        return{
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.content.refresh, 200)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemimgload', this.itemImgListener )   
    }
}