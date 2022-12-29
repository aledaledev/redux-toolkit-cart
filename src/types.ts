export interface CartItemProps {
    id:string,
    price:string,
    title:string,
    img:string,
    amount:number
}

export interface CartState{
    cartItems: CartItemProps[],
    amount: number,
    total: number,
    isLoading: true    
}