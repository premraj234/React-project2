import axios from 'axios'
import React, {useEffect, useState} from 'react'


import { Container, ListGroup } from 'react-bootstrap'
export default function AdminPannel() {
  const [data,setData]=useState([])
  const scatter = [];

 
  useEffect(()=>{
    async function doGetRequest() {

      let res = await axios.get('https://zqai76gevj.execute-api.ap-south-1.amazonaws.com/production/');
              setData(res.data)
    }
    
    doGetRequest();
  }); 
  data.map(item=>{
    return (
      scatter.push(JSON.parse(item['Items']))   
    ) 
  })
  let result =[].concat(...scatter);


  return (
    <Container className='mt-5'>
       <h1>Orders</h1>
      
    <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope='col'></th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        
        <tbody>
        {   result.map((item,index)=>{
            return(
                  <tr className='table-active' key={index}>
                    <td>{item.productName}</td>
                    <td ><img src={item.Img} style={{height:'5rem', borderRadius:'2px'}} alt={item.productName}/></td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
            )
          })
        } 
        </tbody>
    </table>
   
     </Container>
  )
}

