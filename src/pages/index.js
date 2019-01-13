import React from 'react'
import Layout from '../components/Layout'

import '../components/scss/index.scss'


class Landing extends React.Component {
  render() {
    return (
      <Layout>
         <div class="container">
        <p className="text-center mainparagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna.
         </p>
</div>
      </Layout>
    )
  }
}

export default Landing
