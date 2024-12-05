import React from "react"
import { ItemList } from "../ItemList/ItemList"
import { orderRenderer, orders } from "./utils"



export const ListUseExample: React.FC = () => {
    return(
        <>
            <ItemList items={orders} renderCallback={orderRenderer}/>
        </>
    )
}

export default ListUseExample