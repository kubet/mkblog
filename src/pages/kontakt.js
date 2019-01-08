import React, { Component } from 'react'
import Layout from '../components/Layout'

import '../components/scss/kontakt.scss'

export default class kontakt extends Component {
  render() {
    return (
      <Layout>
          <div className="form pt-5" id="forma">
            <div className="container-fluid">
               <form name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
          <input type="hidden" name="bot-field" />
          </p>
                  <p>
                     <label>Ime</label>
                     <input type="text" className="form-control" name="name" />
                  </p>
                  <p>
                     <label>Email</label>
                     <input type="text" className="form-control" name="email" />
                  </p>
                  <p>
                     <label>Poruka</label>
                     <textarea name="message" className="form-control" rows="5" ></textarea>
                  </p>
                  <p>
                     <button id="button" className="btn btn-lg posaljid" type="submit">Posalji</button>
                  </p>
               </form>
            </div>
         </div>
      </Layout>
    )
  }
}
