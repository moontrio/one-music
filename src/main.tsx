import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import App from './App'
// import 'iconfont'
// import '//at.alicdn.com/t/font_2811059_y5jx0ih8yba.css?url'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
