/*Directorio personal*/
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var contactName = document.getElementById("contactName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phoneHome = document.getElementById("phoneHome").value;
    var phoneCell = document.getElementById("phoneCell").value;
    var relationship = document.getElementById("relationship").value;

    /*crear tarjeta*/
    var card = document.createElement("div");
    card.classList.add("card");
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Eliminar";
    card.innerHTML = "<h2>Información recibida:</h2>" +
                     "<p><strong>Nombre del contacto:</strong> " + contactName + "</p>" +
                     "<p><strong>Dirección postal:</strong> " + address + "</p>" +
                     "<p><strong>Correo electrónico:</strong> " + email + "</p>" +
                     "<p><strong>Teléfono particular:</strong> " + phoneHome + "</p>" +
                     "<p><strong>Teléfono celular:</strong> " + phoneCell + "</p>" +
                     "<p><strong>Parentesco:</strong> " + relationship + "</p>";
    card.appendChild(deleteBtn);
    document.getElementById("cardContainer").appendChild(card);

    /*limpiar campos */ 
    document.getElementById("contactName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneHome").value = "";
    document.getElementById("phoneCell").value = "";
    document.getElementById("relationship").value = "";

    /*botón de eliminar*/
    deleteBtn.addEventListener("click", function() {
        card.remove();
    });
});



