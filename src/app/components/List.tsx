import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { addToCart, fetchProducts } from "../features/productSlices";
import { Product } from "./Product";
import { Button, Container } from "react-bootstrap";

const List = () => {
  const products = useAppSelector((state) => state.products.products) //state.storeProducts.SlicePRoducts
  const cartItems = useAppSelector((state) => state.products.carts)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products)
  return <div>
    

    <h1> List of product</h1><>
    {products.map((product) => {
     return <Container key={product.id}>
  <Product {...product} />
       <Button variant="warning" className="mb-3" onClick={() => (dispatch(addToCart(product)))}>Add to Cart
         (<>+{cartItems.filter(items => items.id === product.id).length}</>
         
  )</Button>
</Container>
    }
    )};
    </>


  </div>;
}
export { List };
