import React, { Component } from 'react'
import Layout from '../components/Layout'
import Ror from '../img/rubyor.svg'
import Ruby from '../img/ruby.svg'
import Ember from '../img/ember.svg'
import Js from '../img/js.svg'

import '../components/scss/usluge.scss'

export default class usluge extends Component {
  render() {
    return (
      <Layout>
          <div className="container-fluid pt-5">
      <div className="row">
         <div className="col-md-2">
         </div>
         <div className="col-md-8">
            <ul className="list-unstyled">
               <li className="media">
                  <img className="pt-3" src={Ror} alt="Ruby on Rails" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ruby on Rails</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <span className="hr"/>
               </li>
               <li className="media my-4">
                  <img className="pt-3" src={Ruby} alt="Ruby" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ruby</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <span className="hr"/>
               </li>
               <li className="media my-4">
                  <img className="pt-5" src={Ember} alt="Ember" width="45" height="65" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ember</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <span className="hr"/>
               </li>
               <li className="media">
                  <img className="pt-3" src={Js} alt="Js" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">JavaScript</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </div>
      </Layout>
    )
  }
}