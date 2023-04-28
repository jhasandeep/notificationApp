const Notification = props => {
  //  Write your code here.
  const containerClassName = {`Notifications-container ${className}`}

  return (
      <div className="containerClassName">
          <img className="icon" src="{iconUrl}"/>
          <p className="message">{message}</p>
      </div>
  )
}

const element = (
  //  Write your code here.   

  <div className="bg-container">
  <h1>Notifications</h1>
  <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" message="Information Message" className="information"/>
  <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" message="Success Message" className="success"/>
  <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" message="Warning message" className="warning"/>
  <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" message="Error message" className="error"/>





  </div>
)

ReactDOM.render(element, document.getElementById('root'))
