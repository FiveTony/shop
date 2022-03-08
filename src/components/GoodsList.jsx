import { GoodsItem } from './GoodsItem'

function GoodsList(props) {
   const { goods = [], addToBasket = Function.prototype } = props
   if (!goods.length) {
      return <h3>Nothing</h3>
   }

   return <div className='goods'>{goods.map(
      item => (<GoodsItem key={item.granted[0].id} {...item.granted[0]} price={item.price.regularPrice} addToBasket={addToBasket} />))}</div>
}

export { GoodsList }