import React from 'react'
import Layout from '../components/Layout'
import Mk from '../img/Show.svg'

import '../components/scss/index.scss'


class Landing extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid text-center" id="onama">
   <div className="row">
      <div className="col-md-4">
      </div>
      <div className="col-md-4 pb-3" id="slikaa">
         <img alt="MK" src={Mk} width="100" height="100"/>
      </div>
      <div className="col-md-4">
      </div>
   </div>
   <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-8" id="center">
         <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna.
         </p>
      </div>
      <div className="col-md-2">
      </div>
   </div>
</div>
      </Layout>
    )
  }
}

export default Landing
