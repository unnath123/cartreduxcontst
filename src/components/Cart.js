import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
import Card from './Card'

const url = 'https://dummyjson.com/products'
const Cart = () => {
  const [arr, setArr] = useState([])
  useEffect(()=>{
    function fetchData(){
      const pr = fetch(url)
      .then((data)=>data.json())
      .then((data1)=>{
        setArr((prev)=>[...prev, ...data1.products])
        // console.log(data1.products)
      })
    }fetchData()
    
  },[])


  return (
    <div>
        {/* <Navbar/> */}
        <div className='heading'>
          <h1 style={{textAlign:"center"}}>All Items</h1>
        </div>
        <div className='shop-page'>
          <div className='cards'>
            {
              arr.map((ele)=><Card key={ele.id} {...ele} />)
            }
          </div>
        </div>
    </div>
  )
}

export default Cart