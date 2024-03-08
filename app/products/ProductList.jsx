import React from 'react'
import Whiskeys from "../../components/Whiskeys.json"
import "./ProductList.scss"

export default function ProductList(){
  return (
    <div className="shopContainer">
            {
              Whiskeys.map( (whiskey, index) => {
              return(
              <a className="card-a" href={`/products/${whiskey.slug}`}>
                <div className="card" index={index} key={whiskey.slug}>
                    
                        <img className="card-img" src={`./${whiskey.png}`}></img>
                        <h3 className="card-h3" >$ {whiskey.price}</h3>
                        <h2 className="card-h2" >{whiskey.title}</h2>
                    
                </div>
            </a>
                )
              })
            }
    </div>

  )
}
