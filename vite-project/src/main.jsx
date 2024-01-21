import React from 'react'
import ReactDOM from 'react-dom/client'
import {UsersApp} from './UsersApp'
import './styles.css'
//npm run dev para correr el programaS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
