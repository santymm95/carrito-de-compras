document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultsList = document.getElementById("results");
    const noResultsMessage = document.getElementById("noResultsMessage");
    const cartIcon = document.getElementById("cartIcon");
    const cartItemCount = document.getElementById("cartItemCount");
    const cartModal = document.getElementById("cartModal");
    const modalCartItems = document.getElementById("modalCartItems");
    const closeModal = document.getElementById("closeModal");
    const calculateTotalButton = document.getElementById("calculateTotalButton");
    const checkoutButton = document.getElementById("checkoutButton");
    const refres = document.getElementById("refres");
    const nombreEmpresa = "Dynamick Mark<br/>NIT 900396602<br/>Calle 28A 38F151<br/>Contacto:3136895352";


   

 
    

    // Precios en pesos colombianos (COP)
       // Precios en pesos colombianos (COP)
       const devices = [
        { name: "Smartphone", priceCOP: 1_500_000, reference: "REF001" },
        { name: "Laptop", priceCOP: 3_000_000, reference: "REF002" },
        { name: "Tablet", priceCOP: 900_000, reference: "REF003" },
        { name: "Smartwatch", priceCOP: 600_000, reference: "REF004" },
        { name: "Televisor", priceCOP: 2_400_000, reference: "REF005" },
        { name: "Altavoz inteligente", priceCOP: 300_000, reference: "REF006" },
        { name: "Cámara digital", priceCOP: 1_200_000, reference: "REF007" },
        { name: "Auriculares inalámbricos", priceCOP: 450_000, reference: "REF008" },
        { name: "Consola de videojuegos", priceCOP: 1_200_000, reference: "REF009" },
        { name: "Impresora", priceCOP: 600_000, reference: "REF010" },
        { name: "Portátil HP", priceCOP: 2_200_000, reference: "REF011" },
        { name: "Monitor LG", priceCOP: 800_000, reference: "REF012" },
        { name: "Reproductor de Blu-ray", priceCOP: 350_000, reference: "REF013" },
        { name: "Cafetera Nespresso", priceCOP: 400_000, reference: "REF014" },
        { name: "Bicicleta de montaña", priceCOP: 1_800_000, reference: "REF015" },
        { name: "Máquina de ejercicio", priceCOP: 900_000, reference: "REF016" },
        { name: "Robot aspirador", priceCOP: 1_000_000, reference: "REF017" },
        { name: "Aspiradora Dyson", priceCOP: 1_600_000, reference: "REF018" },
        { name: "Horno microondas", priceCOP: 300_000, reference: "REF019" },
        { name: "Cocina de gas", priceCOP: 1_200_000, reference: "REF020" },
        { name: "Nevera Samsung", priceCOP: 2_500_000, reference: "REF021" },
        { name: "Lavadora LG", priceCOP: 1_800_000, reference: "REF022" },
        { name: "Secadora Whirlpool", priceCOP: 1_400_000, reference: "REF023" },
        { name: "Silla de oficina", priceCOP: 400_000, reference: "REF024" },
        { name: "Mesa de comedor", priceCOP: 800_000, reference: "REF025" },
        { name: "Sofá de cuero", priceCOP: 2_000_000, reference: "REF026" },
        { name: "Silla de jardín", priceCOP: 150_000, reference: "REF027" },
        { name: "Cama queen-size", priceCOP: 1_600_000, reference: "REF028" },
        { name: "Escritorio de estudio", priceCOP: 450_000, reference: "REF029" },
        { name: "Lámpara de pie", priceCOP: 120_000, reference: "REF030" },
    ];

    const cart = [];

    function formatPrice(priceCOP) {
        return priceCOP.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    function displayResults(results) {
        resultsList.innerHTML = "";
        noResultsMessage.style.display = "none";

        if (results.length > 0) {
            results.forEach((device) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${device.name} - Precio en COP: ${formatPrice(device.priceCOP)}`;

                const addToCartButton = document.createElement("button");
                addToCartButton.textContent = "Agregar al carrito";
                addToCartButton.addEventListener("click", () => {
                    addToCart(device);
                });

                listItem.appendChild(addToCartButton);

                resultsList.appendChild(listItem);
            });
        } else {
            noResultsMessage.style.display = "block";
        }

        resultsList.style.display = "block";
    }

    function search() {
        const query = searchInput.value.toLowerCase();

        // Verificar si el campo de búsqueda no está vacío
        if (query.trim() === "") {
            resultsList.style.display = "none";
            return;
        }

        const filteredDevices = devices.filter((device) =>
            device.name.toLowerCase().includes(query)
        );

        displayResults(filteredDevices);
    }

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search();
        }
    });

    function addToCart(device) {
        cart.push(device);
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        modalCartItems.innerHTML = "";

        cart.forEach((item, index) => {
            const cartItem = document.createElement("li");
            const cartItemText = document.createElement("span");
            cartItemText.textContent = `${item.name} - Precio en COP: ${formatPrice(item.priceCOP)}`;
            cartItem.appendChild(cartItemText);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });

            cartItem.appendChild(removeButton);
            modalCartItems.appendChild(cartItem);
        });

        cartItemCount.textContent = cart.length;
    }

    function calculateTotal() {
        const total = cart.reduce((acc, item) => acc + item.priceCOP, 0);
        alert(`Precio Total en COP: ${formatPrice(total)}`);
    }

    function generateReceipt() {
        alert("Ingresar los datos del cliente para imprimir el recibo y finalizar la compra")
        let client = prompt("Nombre del Cliente");
        let numberDocument = prompt("Documento de Identidad");
        let numberPhone = prompt("Número de Contacto");
    

        let receipt = "Datos del vendedor: <br/>"+ nombreEmpresa+ "<hr/>"+ " <br/>Datos del cliente: <br/>" +"Nombre: "+client +"<br/>" +"Documento: "+numberDocument+"<br/>" +"Celular: " +numberPhone+"<hr/><br/>" + "Recibo de Compra:\n\n";
        
        cart.forEach((item) => {
            receipt += `${item.name} - Precio Unitario: ${formatPrice(item.priceCOP)}\n`;
        });
        const total = cart.reduce((acc, item) => acc + item.priceCOP, 0);
        receipt += `\nTotal: ${formatPrice(total)}`;

        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(`<pre>${receipt}</pre>`);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    }

    
    calculateTotalButton.addEventListener("click", calculateTotal);
    checkoutButton.addEventListener("click", generateReceipt);

    cartIcon.addEventListener("click", function () {
        cartModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        cartModal.style.display = "none";
    });

    refres.addEventListener('click', ()=>{
        window.location. reload()
    })


     
    
        
    
      
    
    

});
