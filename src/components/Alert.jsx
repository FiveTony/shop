import { useContext } from "react"
import { ShopContext } from '../context'
import { useEffect } from "react";

function Alert(props) {
   const { alertName: name = '', closeAlert = Function.prototype } = useContext(ShopContext)

   useEffect(() => {
      const timerId = setTimeout(closeAlert, 3000)

      return () => { clearTimeout(timerId) } //нужно снимать таймер
   }, [name])
   // eslint-disable-next-line

   return (<div id="toast-container">
      <div className="toast">{name} add to basket</div>
   </div>)
}

export { Alert }