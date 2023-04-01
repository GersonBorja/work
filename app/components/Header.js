export function Header() {
  let $header = document.createElement('header')
  $header.innerHTML = `<h1>MttZoftware</h1>
  <a href="" class="btn_Alertas" id="btn_Alertas"><i class="fa-sharp fa-solid fa-bell"></i></a>
  <a href="#/tipodedatos" class="btn_Menu" id="btn_Menu"><span class="material-symbols-outlined">
menu
</span></a>
  `
  let estadoMenu = true
  
  document.addEventListener('click', (e) => {
    
    let menuNav = document.getElementById('menu_Nav')
    if(e.target.matches('header span')){
      e.preventDefault()
      if (estadoMenu) {
        menuNav.style.left = '0%'
      } else {
        menuNav.style.left = '-100%'
      }
      estadoMenu = !estadoMenu
    }
  })
  
  return $header
}