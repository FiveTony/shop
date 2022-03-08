function BasketItem(props) {
   const { id, price, name, quantity, removeFromBasket = Function.prototype, decrement = Function.prototype, increment = Function.prototype } = props
   return <li className="collection-item">
      {name} <i className="material-icons basket-quantity" onClick={() => decrement(id)}>remove</i> x{quantity}{' '}
      <i className="material-icons  basket-quantity" onClick={() => increment(id)}>add</i>= {price * quantity}
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
         <i className="material-icons basket-delete">close</i>
      </span >
   </li>

}

export { BasketItem }