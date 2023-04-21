import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Overlay() {
  return(
    <div>
      <a href="https://www.linkedin.com/in/gerardocazares/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Gerardo Cazares
        <br />
        
      </a>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>,
)
