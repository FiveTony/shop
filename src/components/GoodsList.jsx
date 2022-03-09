import { useContext } from 'react'
import { ShopContext } from '../context'
import { GoodsItem } from './GoodsItem'

function GoodsList() {
   const { goods = [] } = useContext(ShopContext)
   if (!goods.length) {
      return <h3>Nothing</h3>
   }

   return <div className='goods'>{goods.map(
      item => (<GoodsItem key={item.granted[0].id} {...item.granted[0]} price={item.price.regularPrice} />))}</div>
}

export { GoodsList }