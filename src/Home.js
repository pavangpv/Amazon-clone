import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
          <img  className='home_image'
             src='https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=1080&w=1920' alt='image' />
         <div className='home_row'>
          <Product 
          title="One plus Mobile"
          price ={29999}
          image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg"
          rating={4}
          />
          <Product 
          title="Amazon Brand - Solimo Elite High Back Mesh Office Chair (Fabric, Black)"
          price ={7500}
          image="https://m.media-amazon.com/images/I/81U34n-jPdL._SL1500_.jpg"
          rating={5}
          
          />

        </div>
        <div className='home_row'>
          <Product 
                    title="Amazfit GTS2 Mini (New Version) Smart Watch with Always-on AMOLED Display"
                    price ={5999}
                    image="https://m.media-amazon.com/images/I/51W+7ZMog7L._SX679_.jpg"
                    rating={4}
          
          />
                    <Product 
                    title=" Amazon Brand - Inkast Denim Co. Men's Skinny Jeans"
                    price ={699}
                    image="https://m.media-amazon.com/images/I/81QuBoalHQL._UY879_.jpg"
                    rating={3}
          
          />          <Product 
          title="One plus Mobile"
          price ={29999}
          image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg"
          rating={4}

/>
        </div>
        <div className='home_row'>
        <Product 
                    title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black) (2022 Model) | with Alexa Compatibility"
                    price ={66499}
                    image="https://m.media-amazon.com/images/I/71ZKGDdz1lL._SX679_.jpg"
                    rating={4}
          
          />
          

        </div>
        </div>
    </div>
  )
}

export default Home