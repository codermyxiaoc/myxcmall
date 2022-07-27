import { requestone } from "./request"

export function detaildata(iid) {
    return requestone({
        url: '/detail',
        params: {
            iid
            
        }
    })
}
export function getrecommend() {
    return requestone({
        url: '/recommend'
    })
}
export class goodsInfo {
    constructor(iteminfo, columns, shopInfo) {
        this.title = iteminfo.title
        this.oldprice = iteminfo.oldPrice
        this.price = iteminfo.price
        this.lowPrice = iteminfo.lowPrice
        this.discountDesc = iteminfo.discountDesc
        this.color = iteminfo.discountBgColor
        this.columns = columns
        this.services = shopInfo.services
    }
}
export class merchantInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.score = shopInfo.score
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.cFans = shopInfo.cFans
        this.name = shopInfo.name
    }
} 
export class goodsparam {
    constructor(info,rule) {
        this.images  = info.images ? info.images[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}