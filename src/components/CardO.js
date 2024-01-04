import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_from_cart} from './redux/Actions/cartActions'

const CardO = ({thumbnail, title, price, id}) => {
    const dispatch = useDispatch()
  return (
        <div>
            <div className='card-image'><img src={thumbnail} /></div>
            <div className='card-desc'>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
            </div>
            <div className='card-add-btn'>
                <button onClick={()=>dispatch(delete_from_cart(id))}>Remove from Cart</button>
            </div>
        </div>
  )
}

export default CardO