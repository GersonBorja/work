export function MenuTipoDeDatos() {
  let $div = document.createElement('div')
  $div.id = 'tipoDeDocumentosView'
  $div.classList.add('tipos_De_Documentos_View')
  let htmlDinamico = `
    <h1>Tipos de documentos</h1>
    <nav>
      <ul class="container-second" id="accordion_View">
        <!-- Contenido del acordeón aquí -->
      </ul>
    </nav>`

  $div.innerHTML = htmlDinamico

  document.addEventListener('click', (e) => {
    if(!e.target.matches('a.menuTipoDato')) return false
    localStorage.setItem('id', e.target.dataset.id)
    localStorage.setItem('seccion', e.target.dataset.seccion)
  })
  

  return $div
}
