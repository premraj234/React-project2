import React from 'react'
import {useState , useEffect} from "react";
import Axios from "axios";
 

function Orders() {
    const [data, setData] = useState([]);
    const scatter = [""]
   

    useEffect(()=>{
        async function doGetRequest() {
           const res =  await Axios.get('https://dab9jmmb6l.execute-api.ap-south-1.amazonaws.com/production/hello')
                console.log(res.data)
             }
             doGetRequest()
    },[])

        const text = JSON.parse(data)
        console.log(text)
        

  return (
   <>
   <section className='container py-5' >
    <div className='row justify-content-center'>
        <div className='col-12 mt-4'>
            <h5>My Orders</h5>
            <table className='table table-light table-hover'>
                <tbody>
                    <tr className='headings'>
                        <th></th>
                        <th>productName</th>
                        <th>price</th>                       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   </section>
   </>
  )
};

export default Orders;