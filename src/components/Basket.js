import React, { useEffect, useState } from "react";
import CardO from "./CardO";
import { useDispatch, useSelector } from "react-redux";
import { clear_all } from "./redux/Actions/cartActions";

const Basket = () => {
  const arr = useSelector((state) => state);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)

  function clearAll(){
   dispatch(clear_all())
   setTotal(0)
  }

    useEffect(()=>{
        function fetchTotal(){
            let tot=0;
            if(arr.length > 0){
            arr.map((ele)=>{
                tot=tot+ele.price
            })
            setTotal(()=>tot)
            }
            
        }fetchTotal()
    },[arr])


console.log("Basket ",total)
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Basket</h1>
      <div className="b-container">
        <div className="basket">
            {
                arr.map((ele)=><CardO key={ele.id} {...ele} />)
            }
        </div>
        <div className="check-out">
            <h4 style={{textAlign:"center"}}>Checkout List</h4>
            <div className="c-div">
                {
                    arr.map((ele)=>
                        {
                            return (
                            <div className="box">
                                <span>{ele.title}</span>
                                <span>{ele.price}</span> 
                            </div>
                            )
                        }
                       
                    )
                }
            
            <p>Total: {total}</p> 
            {
                total > 0 && <button onClick={clearAll}>Checkout</button>
            }      
            </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
