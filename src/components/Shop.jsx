import { useState, useEffect } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"


function Shop() {
   const [goods, setGoods] = useState([])
   const [loading, setLoading] = useState(true)
   const [order, setOrder] = useState([])
   const [isBasketShow, setBasketShow] = useState(false)
   const [alertName, setAlertName] = useState('')


   const addToBasket = (item) => {
      const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

      if (itemIndex < 0) {
         const newItem = { ...item, quantity: 1 }
         setOrder([...order, newItem])
      } else {
         const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
               return { ...orderItem, quantity: orderItem.quantity + 1 }
            } else {
               return orderItem
            }
         })
         setOrder(newOrder)
      }
      setAlertName(item.name)
   }

   const removeFromBasket = (itemId) => {
      const newOrder = order.filter(elem => elem.id !== itemId)
      setOrder(newOrder)
   }

   const handleBasketShow = () => {
      setBasketShow(!isBasketShow)
   }

   const closeAlert = () => {
      setAlertName('')
   }

   const increment = (itemId) => {
      const newOrder = order.map(elem => {
         if (elem.id === itemId) {
            const newQuantity = elem.quantity + 1
            return { ...elem, quantity: newQuantity }
         }
         else {
            return elem
         }
      })
      setOrder(newOrder)
   }
   const decrement = (itemId) => {
      const newOrder = order.map(elem => {
         if (elem.id === itemId) {
            console.log('decrement')
            const newQuantity = elem.quantity - 1
            console.log(newQuantity)
            return {
               ...elem,
               quantity: newQuantity >= 0 ? newQuantity : 0
            }
         }
         else {
            return elem
         }

      })
      setOrder(newOrder)
   }

   useEffect(function getGoods() {
      fetch(API_URL, {
         headers: {
            'Authorization': "515aeb53-9025a839-cdd94b1e-6e33fd86"
         }
      }).then(response => response.json())
         .then(data => {
            data.shop && setGoods(data.shop)
            setLoading(false)
         })
   }, [])

   return <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} decrement={decrement} increment={increment} />}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
   </main>
}

export { Shop }