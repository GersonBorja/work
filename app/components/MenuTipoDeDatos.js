

export function MenuTipoDeDatos() {
  let $div = document.createElement('div')
  $div.id = 'tipoDeDocumentosView'
  $div.classList.add('tipos_De_Documentos_View')
  let htmlDinamico = `
           <h1>Tipos de documentos</h1>
           <nav>
           <ul class="container-second" id="accordion_View">
           </ul>
           </nav>`
    
  $div.innerHTML = htmlDinamico

  return $div
}
