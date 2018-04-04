import React, { Component } from 'react'
import $ from 'jquery'
import moment from 'moment'

class MyListingCard extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip()
  }

  render() {
    const { _id, active, category, createdAt, quantity, title, unitsAvailable } = this.props.listing
    const status = active ? 'active' : 'inactive'
    const timestamp = `Created on ${moment(createdAt).format('MMMM D, YYYY')}`

    return (
      <div className="transaction card">
        <div className="card-body d-flex flex-column flex-lg-row">
          <div className="image-container">
            <img role="presentation" />
          </div>
          <div className="content-container d-flex flex-column">
            <span className={`status ${status}`}>{status}</span>
            <p className="category">{category}</p>
            <h2 className="title">{title}{unitsAvailable <= quantity && <span className="badge badge-info">Sold Out</span>}</h2>
            <p className="timestamp">{timestamp}</p>
            <p className="price">$1,000</p>
            <div className="d-flex counts">
              <p>Total Quantity: {unitsAvailable}</p>
              <p>Total Remaining: {unitsAvailable - quantity}</p>
            </div>
            <div className="d-flex counts">
              <p>2 Pending Transactions</p>
              <p>3 Completed Transactions</p>
            </div>
            <div className="actions d-flex">
              <div className="links-container">
                <a onClick={() => alert('To Do')}>Edit</a>
                {!active && <a onClick={() => alert('To Do')}>Enable</a>}
                {active && <a onClick={() => alert('To Do')}>Disable</a>}
                <a className="warning" onClick={() => alert('To Do')}>Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyListingCard