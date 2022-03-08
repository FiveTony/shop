import { BasketItem } from './BasketItem'

function BasketList(props) {
   const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, decrement = Function.prototype, increment = Function.prototype } = props

   const totalPrice = order.reduce((sum, elem) => {
      return sum + elem.price * elem.quantity
   }, 0)

   return <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {
         order.length ? order.map(item => (<BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} decrement={decrement} increment={increment} />))
            : (
               <li className='collection-item'>
                  Basket is empty
               </li>)}
      <li className="collection-item active" style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
         Full price: {totalPrice}
         <button className="secondary-content btn btn-small " >Buy</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
   </ul>
}

export { BasketList }