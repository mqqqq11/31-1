import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/slice/ProductsSlice"
import './ProductsPage.css'
import { MoreInfoProducts } from "../../components/MoreInfoProducts"

export const ProductsPage = () => {
    const {products, loading} = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


  return (
    <>
        <h1 className="title">Products page</h1>
        {loading ? 'loading...' :
            <div className="products">
                {products.map(product => (
                    <div className="products__item" key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt="product" />
                        <MoreInfoProducts moreInfoProducts={product.description}/>
                    </div>
                ))}
            </div>
        }
    </>
  )
}
