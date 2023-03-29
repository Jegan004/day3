import React from 'react'
import "../Components/about.css"
import pic from '../images/coffee.jpg'
import pic2 from '../images/beans.jpg'

import pic3 from '../images/coffee.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>The Hottest Coffee Quotes</h1><br></br>
        <i>"When my blood runs black as the abyss, and my heart beats fast like a wildebeest stampede, only then would I be able to say: "I’ve had enough coffee."</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>Awesome Aroma</h1>
        <i>"Depending on the roast of the coffee, it can range anywhere from light and fruity to burnt. Most coffee will smell lightly caramelized and almost nutty. A stale coffee will smell musty and cardboard-like.".</i>
       </div>
       <div className='top2'>
       <img src={pic2} alt=''/>
       <h1>Bean Varieties
</h1>
        <i>"The four main coffee types are Arabica, Robusta, Excelsa, and Liberica and all four of them have radically different taste profiles."</i>
       </div>
      
 
    </div>
   <div className='bottom'>
    <img src={pic3} alt=""/>
    <div>
    <h1>Taste & Sip Coffee Shop </h1><br></br>
    <p>The word espresso comes from Italian and means “expressed” or “forced out”. Espresso is made by forcing very hot water under high pressure through finely ground, compacted coffee.</p>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
