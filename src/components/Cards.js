import React from 'react'
import Card from './Card'
import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"
import img3 from "../assets/image3.jpg"

function Cards() {
    const cards =[
        {
            id:1,
            title:"youtube.com",
            image:img1,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sapiente, non animi beatae quae consequatur ut explicabo repellat, debitis dignissimos nulla voluptatum suscipit quam? Tempora non odit vel explicabo dolorum.',
            url:'youtube.com'
        },
        {
            id:2,
            title:"facebook.com",
            image:img2,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sapiente, non animi beatae quae consequatur ut explicabo repellat, debitis dignissimos nulla voluptatum suscipit quam? Tempora non odit vel explicabo dolorum.',
            url:'facebook.com'
        },
        {
            id:3,
            title:"uber.com",
            image:img3,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sapiente, non animi beatae quae consequatur ut explicabo repellat, debitis dignissimos nulla voluptatum suscipit quam? Tempora non odit vel explicabo dolorum.',
            url:'uber.com'
        }
    ]
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className="row">
            {
                cards.map(card =>(
                    <div className="col-md-4" key={card.id}>
                     <Card card ={card}/>
                    </div>

                  ))
            }
            
            
        </div>
       
    </div>
  )
}

export default Cards