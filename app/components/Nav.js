
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
        <button type="button" class="ac-trigger btnMenuLi">Cambiar empresa</button>
      </div>
      <ul id="submenu_Empresas" class="ac-panel"></ul>
    </li>
    <li><a href="#/tipodedatos"><i class="fa-solid fa-file-signature"></i> Agregar documentos</a></li>
    <li><a href="#"><i class="fa-solid fa-file-signature"></i> Consultar documentos</a></li>
    <li><a href="#"><i class="fa-solid fa-users"></i> Clientes</a></li>
    <li><a href="#"><i class="fa-solid fa-signal"></i> Estados de cuentas</a></li>
  </ul>`
  
  $nav.innerHTML = htmlDinamico
  $nav.addEventListener('load', function() {
    new Accordion('.accordion-container');
  });
  return $nav
}