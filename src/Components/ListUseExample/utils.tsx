import { Order } from "./types"
export const orders: Order[] =[
    {
        id:'1',
        items:['Manzana'],
        total:100
    },
    {
        id:'2',
        items:['Camiseta','Zapatos'],
        total:100
    },
    {
        id:'3',
        items:['Manzana','EEsta wea'],
        total:100
    }
]
export const orderRenderer = (order:Order) => {
    return (
        <>
            <p>{order.id}</p>
            <ul>
                {order.items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <p>{order.total}</p>
        </>
    )
}