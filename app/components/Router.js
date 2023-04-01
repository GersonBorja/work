import api from '../helpers/api.js'
import {ajax} from '../helpers/ajax.js'
import {MenuTipoDeDatos} from './MenuTipoDeDatos.js'

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
            <li><a href="#" class="menuTipoDato">${ele.nombre}</a></li>
            `
          })
          htmlDinamico +=  `</ul></li>
          `
        })
        tipos.insertAdjacentHTML('beforeend', htmlDinamico)
        new Accordion('.container-second')
      }
})
}
}