import React, {Component} from 'react'
import FaqItem from './FaqItem'

class Faq extends Component {
  render() {
    const {faqList} = this.props

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faq-list">
            {faqList.map(eachItem => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faq
