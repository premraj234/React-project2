import React from 'react'
import Cards from "./Cards"
import data from "./data"
import {useState} from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function  Home() {
const [search, setSearch] = useState("");
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Nursery Live Online</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <form className="d-flex">
                                <input className="form-control me-4"  type="search" placeholder="Search" aria-label="Search" 
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        }}
                                        />  
                            </form>
                          <Link to={'/Cart'}><FontAwesomeIcon className="shopcart" icon={faShoppingCart}></FontAwesomeIcon></Link>   
                    </div>
                </div>
          </nav>      
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                {data.filter((item) => {
                            if (search === "") {
                                return item
                            } else if (item.productName.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        }).
                map((item,index)=>{
                    return(
                        <Cards Img={item.Img} productName={item.productName} price={item.price} item={item}  key={index}/>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Home;



