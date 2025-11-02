// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

function kwtophp(kw){
  return kw*1.36;
}
function Car(){
  return(
    <>
    {/* component in react */}
      <h1>My Car</h1>
      <p>it has {kwtophp(218)} horsepower</p>
      {/* expression evaluated expression final outcome */}
    </>
  )
}

createRoot(document.getElementById('root')).render(

    <Car/>
 
)
// create a component that returns a list of 5 fruits with there price in the form of a table and render that compornt in the webpage
