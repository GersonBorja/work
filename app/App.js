import {Header} from './components/Header.js'
import {Nav} from './components/Nav.js'
import {Main} from './components/Main.js'
import {Router} from './components/Router.js'

export  function App () {
  const $root = document.getElementById('root')
  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Nav())
 
  $root.appendChild(Main())
  Router()
  //new Accordion('.container-second')
  
}