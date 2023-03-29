import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/2.jpg"

export default class Menu extends Component {
    state={Posts:[
      {title:"Caffe Americano",description:"Short"},
      {title:"Iced Shaken Tea ",description:"Short"},
      {title:"Chocolate Mocha ",description:"Short"},
      {title:"Caramel Macchiato ",description:"Short"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1> MenuCard</h1>
        <div className=''>
        <SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="₹110" />
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="₹125" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="₹130" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="₹170" />
        </div>
        </div>
      </section>
    )
  }
}
