function llamar () {
}
export function Nav(){
  let $nav = document.createElement('nav')
  $nav.id = 'menu_Nav'
  
  document.addEventListener('click', (e) => {
    if(e.target.matches('.submenuEmp a.btnMenuLi')){
      e.preventDefault()
      
    }
  })
  
  let htmlDinamico = `
  <ul class="accordion-container">
    <li class="ac">
      <div class="ac-header submenuEmp">
        <a href="#" class="ac-trigger btnMenuLi">Cambiar empresa</a>
      </div>
      <ul id="submenu_Empresas" class="ac-panel"></ul>
    </li>
    <li><a href="#/tipodedatos"><i class="fa-solid fa-file-signature"></i> Agregar documentos</a></li>
    <li><a href="#"><i class="fa-solid fa-file-signature"></i> Consultar documentos</a></li>
    <li><a href="#"><i class="fa-solid fa-users"></i> Clientes</a></li>
    <li><a href="#"><i class="fa-solid fa-signal"></i> Estados de cuentas</a></li>
  </ul>`
  
  $nav.innerHTML = htmlDinamico
  
  return $nav
}