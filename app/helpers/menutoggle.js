export function menuToggle(e, estadoMenu) {
  e.preventDefault()
  if (estadoMenu) {
    menuNav.style.left = '0%'
  } else {
    menuNav.style.left = '-100%'
  }
  estadoMenu = !estadoMenu
}