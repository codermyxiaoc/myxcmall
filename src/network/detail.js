import { requestone } from "./request"

export function detaildata(iid) {
    return requestone({
        url: '/detail',
        params: {
            iid
        }
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