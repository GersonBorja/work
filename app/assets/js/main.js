document.addEventListener('DOMContentLoaded', () => {
  
  // seleccionar elementos
  const btnMenu = document.getElementById('btn_Menu')
  const menuNav = document.getElementById('menu_Nav')
  
  // establecer estado inicial
  let estadoMenu = true
  let estadoSubmenu = true
  
  // función para abrir/cerrar el menú
  function toggleMenu(e) {
    e.preventDefault()
    if (estadoMenu) {
      menuNav.style.left = '0%'
    } else {
      menuNav.style.left = '-100%'
    }
    estadoMenu = !estadoMenu
  }
  
  let submenuEmpresas = document.getElementById('submenu_Empresas')
  let submenuTipoDocumentos = document.getElementById('accordion_View')
  
  function traerEmpresas() {
      fetch('empresas.json')
      .then(res => res.json())
      .then(res => {
        let empresaHtml = ''
        res.empresas.forEach((empresa) => {
          console.log(empresa)
          empresaHtml += `
          <li><a href="#" style="font-size: 10px" class="empresa_Item"><i class="fa-regular fa-circle"></i>${empresa.razonsocial}</a></li>
          `
        })
        submenuEmpresas.innerHTML = ''
        submenuEmpresas.insertAdjacentHTML('beforeend', empresaHtml)
        
new Accordion('.accordion-container')
      })
  }
  
  function traerTiposDocumentos() {
      fetch('documentostipos.json')
      .then(res => res.json())
      .then(res => {
        let empresaHtml = ''
        res.docs.forEach((tipoDocumento) => {
          empresaHtml += `
          <li class="ac">
          <div class="ac-header option_Menu">
            <button type="button" class="ac-trigger">${tipoDocumento.nombre}</button>
          </div>
            <ul class="ac-panel">`
          tipoDocumento.documentostipos.forEach((ele) => {
            empresaHtml += `
            <li><a href="#" class="menuTipoDato">${ele.nombre}</a></li>
            `
          })
          empresaHtml += `</ul></li>`
        })
        
        submenuTipoDocumentos.innerHTML = ''
        submenuTipoDocumentos.insertAdjacentHTML('beforeend', empresaHtml)
        console.log(submenuTipoDocumentos)
        new Accordion('.container-second')
      })
  }
  
  // agregar evento al botón del menú
  btnMenu.addEventListener('click', toggleMenu)
  traerEmpresas()
  traerTiposDocumentos()
  
})
