import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"
import { ShopContext } from '../context'

function Shop() {
   const { goods, setGoods, loading, order, isBasketShow, alertName } = useContext(ShopContext)

   useEffect(function getGoods() {
      fetch(API_URL, {
         headers: {
            'Authorization': "515aeb53-9025a839-cdd94b1e-6e33fd86"
         }
      }).then(response => response.json())
         .then(data => {
            setGoods(data.shop)
         })
   }, [])

   return <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
   </main>
}

export { Shop }