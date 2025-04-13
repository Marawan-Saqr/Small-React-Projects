import { useState } from 'react';

const ShoppingCart = () => {

  // Component States
  const productsArray = [
    {
      id: 0,
      productName: "Oil",
      count: 1
    },
    {
      id: 1,
      productName: "Sphagati",
      count: 1
    },
    {
      id: 2,
      productName: "cheese",
      count: 1
    }
  ]

  const [products, setProducts] = useState(productsArray);


  // Handle Increase Function
  const handleIncreaseClick = (productId)=> {
    const updatedProducts = products.map((element)=> {
      return element.id === productId ? {...element, count: element.count + 1} : element;
    })
    setProducts(updatedProducts);
  }


  // Handle Decrease Function
  const handleDecreaseClick = (productId)=> {
    let newProducts = [];
    for (let product of products) {
      if (product.id === productId) {
        if (product.count > 1) {
          let newProduct = {...product, count: product.count - 1};
          newProducts.push(newProduct);
        }
      } else {
        newProducts.push(product);
      }
    }
    setProducts(newProducts);
  }



  return (
    <div className='products'>
      {products.length >= 1 ? (products.map((product)=> (
        <div key={product.id} style={{width: "200px", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <h3>{product.productName}</h3>
          <h6>{product.count}</h6>
          <button onClick={()=> handleIncreaseClick(product.id)}>+</button>
          <button onClick={()=> handleDecreaseClick(product.id)}>-</button>
        </div>
      ))) : <h2>No Products Available</h2>}
    </div>
  )
}


export default ShoppingCart;