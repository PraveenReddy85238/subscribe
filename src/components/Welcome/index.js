// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  changeButtonText = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setSate({text: 'Subscribed'})
    }
    this.setSate({text: 'Subscribe'})
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="para">Thank you ! Happy Learning</p>
        <div>
          <button onClick={this.changeButtonText} className="btn" type="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
