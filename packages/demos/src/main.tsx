import React from 'react'
import ReactDOM from 'react-dom'

import Card from 'my-card'
import Button from 'my-button'

function App() {
  return (
    <div>
      <Card>Card demo</Card>
      <hr />
      <Button>Button demo</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
