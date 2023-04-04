import api from '../helpers/api.js';
import { ajax } from '../helpers/ajax.js';

export function BusquedaClientes() {
  let $div = document.createElement('div');
  $div.classList.add('buscadorClientes');

  function mostrarTitulo() {
    let seccion = localStorage.getItem('seccion');
    return seccion;
  }
  function renderizarClientes(clientes){
    let items = ''
    clientes.forEach(item => {
      items += `<a href="#" class="block border-b border-gray-300 p-4 text-black"><i class="far fa-user"></i>test ${item.nombre}</a>`
    })
    document.getElementById('lista').insertAdjacentHTML('beforeend', items)
  }
  function mostrarClientes() {
    ajax({
      url: api.API_CLIENTES,
      cbcallback: (res) => {
        document.querySelector('.modal').classList.remove('hidden')
        document.querySelector('.modal').classList.add('grid')
        renderizarClientes(res.clientes)
      }
    });
  }

  let htmlDinamico = `
  <h1 class="p-4 font-semibold">${mostrarTitulo()}</h1>
  <div class="flex items-center justify-between pt-0 p-4"><i class="far fa-user"></i>
<button class="buscarClient"><i class="fas fa-search buscarClient"></i></button>
</div>
<!--- Modal de búsqueda -->
<div class="modal fixed top-0 left-0 h-screen w-full bg-white z-50 hidden grid-cols-1" style="grid-template-rows: auto 1fr;">
<div>
<div class="flex items-center p-4 font-semibold">
<a href="#"><i class="fas fa-arrow-left"></i> Regresar</a> 
</div>
</div>
<div id="lista" class="overflow-y-scroll"></div>
</div>
  `;

  document.addEventListener('click', (e) => {
    if (!e.target.matches('button.buscarClient, i.buscarClient')) return false;
    mostrarClientes(e);
  });

  $div.innerHTML = htmlDinamico;
  return $div;
}
