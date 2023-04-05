import api from './helpers/api.js'
import {ajax} from './helpers/ajax.js'
import {Header} from './components/Header.js'
import {Nav} from './components/Nav.js'
import {Main} from './components/Main.js'
import {Router} from './components/Router.js'


export  function App () {
  const $root = document.getElementById('root')
  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Nav())
  ajax({
      url: api.API_EMPRESAS,
      cbcallback: (res) => {
        let htmlDinamico = ''
        res.empresas.forEach(item => {
          htmlDinamico += `
          <li><a href="#" style="font-size: 10px" class="empresa_Item"><i class="fa-regular fa-circle"></i>${item.razonsocial}</a></li>`
        })
        document.getElementById('submenu_Empresas').innerHTML = ''
        document.getElementById('submenu_Empresas').insertAdjacentHTML('beforeend', htmlDinamico)
        new Accordion('.accordion-container');
      }
    })
    
  $root.appendChild(Main())
  
  const appContainer = document.querySelector("main");
appContainer.classList.remove("visible");

setTimeout(() => {
  appContainer.classList.add("visible");
}, 0);



  
  Router()
}