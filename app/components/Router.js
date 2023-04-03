import api from '../helpers/api.js'
import {ajax} from '../helpers/ajax.js'
import {MenuTipoDeDatos} from './MenuTipoDeDatos.js'
import {BusquedaClientes} from './BusquedaClientes.js'

export function Router () {
  const {hash} = location
  const $main = document.getElementById('main')
  
  if(!hash || hash === '#/'){
    
  
}else if(hash.includes('#/tipodedatos')){
  $main.appendChild(MenuTipoDeDatos())
  let tipos = document.getElementById('accordion_View')
    ajax({
      url: api.API_DOCUMENTOS_TIPOS,
      cbcallback: (res) => {
        let htmlDinamico = ''
        res.docs.forEach((elem) => {
          htmlDinamico += `
          <li class="ac">
          <div class="ac-header option_Menu">
            <button type="button" class="ac-trigger">${elem.nombre}</button>
          </div>
            <ul class="ac-panel">`
            elem.documentostipos.forEach((ele) => {
            htmlDinamico += `
            <li><a href="#/${ele.nombre}" data-seccion="${ele.nombre}" data-id="${ele.documentotipoid}"  class="menuTipoDato">${ele.nombre}</a></li>
            `
          })
          htmlDinamico +=  `</ul></li>
          `
        })
        tipos.insertAdjacentHTML('beforeend', htmlDinamico)
        new Accordion('.container-second')
      }
})
}else if(hash.includes('#/Tiquete%20Electronico%20/%20Contado')){
  $main.appendChild(BusquedaClientes())
  }else{
  $main.innerHTML = 'hola'
}
}