import React, { useEffect, useState } from "react";
import CardO from "./CardO";
import { useSelector } from "react-redux";

const Basket = () => {
  const arr = useSelector((state) => state);
  const [total, setTotal] = useState(0)

    useEffect(()=>{
        function fetchTotal(){
            if(arr.length > 0){
            let tot = arr.reduce((prev, curr)=> prev.price+curr.price)
            setTotal(()=>tot)
            }
            
        }fetchTotal()
    },[arr])


  // console.log("Basket ",arr)
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
                total > 0 && <button>Checkout</button>
            }      
            </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
