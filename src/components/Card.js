import React from 'react'
import { useDispatch } from 'react-redux'
import { add_to_cart} from './redux/Actions/cartActions'

const Card = ({thumbnail, title, price, id}) => {
    const dispatch = useDispatch()
  return (
        <div>
            <div className='card-image'><img src={thumbnail} /></div>
            <div className='card-desc'>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
            </div>
            <div className='card-add-btn'>
                <button onClick={()=>dispatch(add_to_cart({thumbnail, title, price, id}))}>Add to Cart</button>
            </div>
        </div>
  )
}

export default Card