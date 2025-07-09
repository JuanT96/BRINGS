function agregarAlCarrito(productoId) {
      // Obtener carrito actual del localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      // Agregar ID al carrito
      carrito.push(productoId);

      // Guardar en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));
      console.log(JSON.parse(localStorage.getItem('carrito')))

      alert('Producto agregado al carrito');
    }

    // Funcionalidad carrito de compras

    // Diccionario con la información completa de los productos
    //                            ------ PANTALLA ------
const productos = {
    "p001": {
        nombre: "Monitor Gamer LG UltraGear 27 Pulgadas Curvo QHD 180Hz 1ms FreeSync HDR10 Gris",
        precio: 1050000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_951719-MLA84733958428_052025-F.webp"
    },
    "p002": {
        nombre: "Monitor Gamer Xiaomi con pantalla de 34 Pulgadas 180Hz y resolución WQHD",
        precio: 1485000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_827699-MLU74975109969_032024-F.webp"
    },
    "p003": {
        nombre: "Monitor Gamer Asus con pantalla de 27 Pulgadas 75Hz resolución WQHD",
        precio: 1725000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_861432-MLU78838667682_092024-F.webp"
    },
    "p004": {
        nombre: "Monitor Gamer Samsung con pantalla de 24 Pulgadas 75Hz y resolución Full HD",
        precio: 599000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_835617-MLU70462000211_072023-F.webp"
    },
    "p005": {
        nombre: "Monitor LG Ips Ultrawide Full Hd De 34 21:9 Y Amd Freesync Color Negro 110/220V",
        precio: 1299000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_848187-MLA84546358426_052025-F.webp"
    },
    "p006": {
        nombre: "Monitor Gamer Rog Strix Fhd Fast Ips 310hz 1ms Gtg Xg259cms Color Negro",
        precio: 1515000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_864759-MLA84262098806_052025-F.webp"
    },
//                                ------ AUDIFONOS ------
    "p007": {
        nombre: "Audífonos Gaming Hyperx 4p5m2aa Cloud Orbit S Color Negro Color de la luz Sin Luz",
        precio: 730000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_804334-MLU78537057657_082024-F.webp"
    },
    "p008": {
        nombre: "Auriculares Gaming Hyperx Cloud Flight Color Negro",
        precio: 599000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_704310-MLA84549541734_052025-F.webp"
    },
    "p009": {
        nombre: "Auriculares Headset Hyperx Orbit 7.1",
        precio: 1390000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_689770-MLA42169945079_062020-F.webp"
    },
     "p010": {
        nombre: "Cable De Audio Tipo Mix Para Audífonos Hyperx Cloud Alpha",
        precio: 35000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_828043-MCO72091454196_102023-F.webp"
    },
     "p011": {
        nombre: "Auriculares gamer inalámbricos HyperX Cloud Stinger S HHSS1S-AA negro",
        precio: 185000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_671971-MLU72574184778_112023-F.webp"
    },
    //                             ------ GRAFICAS ------
     "p012": {
        nombre: "Tarjeta Gráfica Msi Rtx 5070 12gb Gddr7 Ventus Oc X3",
        precio: 4650000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_926851-MCO83475857848_042025-F.webp"
    },
    "p013": {
        nombre: "Tarjeta Grafica Inno3d Geforce Rtx 5080 X3 Oc White 16gb",
        precio: 6420000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_613496-MCO83681377647_042025-F.webp"
    },
    "p014": {
        nombre: "Tarjeta Gráfica Geforce Rtx 4060 Asus Dual 8gb Oc",
        precio: 2290000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_697272-MLA79474716510_102024-F.webp"
    },
    "p015": {
        nombre: "Tarjeta Grafica Msi Geforce Rtx 3050 Gaming X 6gb Gddr6",
        precio: 1090000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_676816-MCO86281482785_062025-F.webp"
    },
    //                            ------ CONTROLES ------
    "p016": {
        nombre: "Control Xbox One Series S/x Blanco Bluetooth Compatible Pc",
        precio: 290000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_982250-MCO75131838751_032024-F.webp"
    },
    "p017": {
        nombre: "Control Ps5 Dualsense Blanco",
        precio: 320000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_973394-MLU74649860089_022024-F.webp"
    },
    "p018": {
        nombre: "Control Inalámbrico Dualsense Starlight Blue | G0006615",
        precio: 290000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_988009-MLA84856612175_052025-F.webp"
    },
    //                              ------ WEB CAMS ------
    "p019": {
        nombre: "Logitech Brio, Ultra Hd Pro Webcam 4k / Rightlight 3 Con Hdr Color Negro",
        precio: 650000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_745072-MLU75193448603_032024-F.webp"
    },
    "p020": {
        nombre: "Logitech C920s Pro, Webcam Hd / Videochats En Full Hd 1080p Color Negro",
        precio: 310000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_760342-MLA49170463523_022022-F.webp"
    },
    //                              ------ MICROFONOS ------
    "p021": {
        nombre: "Logitech Mx Brio, Cámara Web Ultra Hd 4k Para Colaboración Color Negro",
        precio: 820000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_893112-MLA84543334006_052025-F.webp"
    }, 
    "p022": {
        nombre: "Micrófono Blue Yeti Condensador Omnidireccional color blackoutS",
        precio: 465000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_652335-MLU70044828764_062023-F.webp"
    },
    "p023": {
        nombre: "Micrófono Fifine T669 Condensador Cardioide color negroS",
        precio: 260000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_834714-MLU73204494797_122023-F.webp"
    },
    "p024": {
        nombre: "Tarjeta De Captura Externa De Elgato Hd60 S, Usb30",
        precio: 1799000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_639663-CBT83919978736_042025-F.webp"
    },
};

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function contarProductos(carrito) {
    const contador = {};
    carrito.forEach(id => {
        contador[id] = (contador[id] || 0) + 1;
    });
    return contador;
}

function mostrarCarrito() {
    const tbody = document.querySelector('#tabla-carrito tbody');
    tbody.innerHTML = '';
    const carrito = obtenerCarrito();
    const contador = contarProductos(carrito);
    let totalFinal = 0;

    Object.keys(contador).forEach(id => {
        const cantidad = contador[id];
        const producto = productos[id];

        if (producto) {
            const total = producto.precio * cantidad;
            totalFinal += total;

            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>
            <button onclick="cambiarCantidad('${id}', -1)">–</button>
            ${cantidad}
            <button onclick="cambiarCantidad('${id}', 1)">+</button>
            </td>
            <td>$${total.toLocaleString()}</td>
            <td><button onclick="eliminarProducto('${id}')">Eliminar</button></td>
          `;
            tbody.appendChild(fila);
        }
    });

    document.getElementById('total-final').textContent = `Total a pagar: $${totalFinal.toLocaleString()}`;
}

function cambiarCantidad(id, delta) {
    let carrito = obtenerCarrito();
    if (delta > 0) {
        carrito.push(id);
    } else {
        const index = carrito.indexOf(id);
        if (index !== -1) {
            carrito.splice(index, 1);
        }
    }

    if (carrito.includes(id)) {
        guardarCarrito(carrito);
    } else {
        eliminarProducto(id); // si se quedó en cero, eliminar completamente
    }

    mostrarCarrito();
}

function eliminarProducto(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(pid => pid !== id);
    guardarCarrito(carrito);
    mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

function comprar() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert("¡Compra realizada con éxito!");
    vaciarCarrito();
}

// Inicializar
mostrarCarrito();


//Modal Carito de compras

function abrirModal() {
    document.getElementById('modal-carrito').style.display = 'block';
    mostrarCarrito();
}

function cerrarModal() {
    document.getElementById('modal-carrito').style.display = 'none';
}
