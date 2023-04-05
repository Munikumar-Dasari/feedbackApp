// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {value: true}

  giveFeedback = () => {
    this.setState({value: false})
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li
              className="emoji-card"
              key={eachEmoji.id}
              onClick={this.giveFeedback}
            >
              <img
                src={eachEmoji.imageUrl}
                className="emoji"
                alt={eachEmoji.name}
              />
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="heading">Thank you</h1>
        <p className="emoji-name">
          We will use your feedback to improve out customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {value} = this.state

    return (
      <div className="bg-container">
        {value ? this.renderEmojiContainer() : this.renderSuccessfulContainer()}
      </div>
    )
  }
}

export default Feedback
