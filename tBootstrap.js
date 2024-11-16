let carrito =[];

function agregarAlcarrito(nombre,precio){
    const productoExistente = carrito.find(producto =>
        producto.nombre === nombre);

        if (productoExistente) {
        productoExistente.cantidad ++;
        } else {
            carrito.push({nombre,precio,cantidad:1});
        }
        actualizarCarrito();
         }

function actualizarCarrito(){
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';

    let total = 0;

    if(carrito.length === 0){
        carritoItems.innerHTML = '<p>Aun no has agregado productos al carrito</p>';
        } else {
            carrito.forEach((producto, index) => {
              total += producto.precio * producto.cantidad;
              carritoItems.innerHTML += `
              <div class = "cart-item d-flex justify-contend-between align-items-center">
                    <span>${producto.nombre}</span>
                    <span>$${producto.precio}</span>
                    <span> 
                    <button class="btn btn-secundary btn-sm" onclick="modificarCantidad(${index}, - 1)">-</button>
                    ${producto.cantidad}
                    <button class="btn btn-secundary btn-sm" onclick="modificarCantidad(${index}, 1)">+</button>
                    </span>
                    <button class="btn btn-danger btn-sm" onclick ="eliminarProducto(${index})">Eliminar</button>
              </div>
              `;
             });
            } 

             document.getElementById('total').textContent=total.toFixed(2);
            }

             function modificarCantidad(index,cantidad){
                const producto = carrito[index];

                if(cantidad < 0 && producto.cantidad > 1){
                    producto.cantidad += cantidad;
                }else if(cantidad > 0){
                    producto.cantidad += cantidad;
                }
                actualizarCarrito();
            }
             function eliminarProducto(index){
                carrito.splice(index, 1);

                actualizarCarrito();
            }

            $(document).ready(function() {
                $('.navbar-toggler').click(function(){

                    $('#navbarSupportedContent').tooglerClass('collapse');
                 });

                });


    



