import { useEffect, useState } from 'react'
import { UseApp } from '../context/AppContext'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

function Home() {

    const { products, setProducts } = UseApp()
    const [redenderProducts, setRenderProducts] = useState(products)

  return (
    <>
      <Header/>
      <div className='h-24'></div>
      <div className='w-full grid-products px-4 sm:px-0'>
        {
          redenderProducts.map((product, index) => <ProductCard key={index} product={product} showStock={true}/>)
        }
      </div>
    </>
  )
}

export default Home