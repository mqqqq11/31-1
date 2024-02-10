import { useState } from "react"
import '../pages/ProductsPage/ProductsPage.css'

export const MoreInfoProducts = ({moreInfoProducts}) => {

    const [show, setShow] = useState(false)

  return (
    <>
    <button className="btn-products" onClick={() => setShow(!show)}>
        {show ? 'Close' : 'More info'}
    </button>
    {show && <p className="products__text">{moreInfoProducts}</p>}
    </>
  )
}
