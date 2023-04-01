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

  // Agregar evento de carga del acordeón
  

  return $div
}
