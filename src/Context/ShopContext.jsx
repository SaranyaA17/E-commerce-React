import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
    
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefultCart());

    console.log(getDefultCart());
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
        
    }
    console.log(cartItems,'afterr');
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getCartDiscount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]; 
                totalAmount = (10/100) * totalAmount;
            }
            
        }
        return totalAmount;
         
    }

    
    const getGst = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]; 
                const afterDiscountAmount = getCartDiscount()
                totalAmount = totalAmount - afterDiscountAmount
                totalAmount = (totalAmount*18)/100;
            }
            
        }
        return totalAmount;
    }

    const getActualAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]; 
                
            }
            
        }
        return totalAmount;
    }
    

    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]; 
                totalAmount = totalAmount - (10/100) * totalAmount;
                totalAmount = totalAmount + getGst()
            }
            
        }
        return totalAmount;
    }
    

    const getTotalCartItems = () => {
       let totalItem = 0;
       for(const item in cartItems)
       {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
       } 
       return totalItem;
    }

    const contextValue = {getActualAmount,getCartDiscount,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,getTotalCartItems,getGst};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider> 
    )
}

export default ShopContextProvider;