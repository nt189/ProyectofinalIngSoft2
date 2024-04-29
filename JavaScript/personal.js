// /*Directorio personal*/

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var contactName = document.getElementById("contactName").value;
//     var address = document.getElementById("address").value;
//     var email = document.getElementById("email").value;
//     var phoneHome = document.getElementById("phoneHome").value;
//     var phoneCell = document.getElementById("phoneCell").value;
//     var relationship = document.getElementById("relationship").value;

//     /*crear tarjeta*/
//     var card = document.createElement("div");
//     card.classList.add("card");
//     var deleteBtn = document.createElement("span");
//     deleteBtn.classList.add("delete-btn");  
//     deleteBtn.innerText = "Eliminar";   
//     card.innerHTML = "<h2>Información de contacto:</h2>" +
//                      "<p><strong>Nombre:</strong> " + contactName + "</p>" +
//                      "<p><strong>Dirección postal:</strong> " + address + "</p>" +
//                      "<p><strong>Correo electrónico:</strong> " + email + "</p>" +
//                      "<p><strong>Teléfono particular:</strong> " + phoneHome + "</p>" +
//                      "<p><strong>Teléfono celular:</strong> " + phoneCell + "</p>" +
//                      "<p><strong>Parentesco:</strong> " + relationship + "</p>";
//     card.appendChild(deleteBtn);
//     document.getElementById("cardContainer").appendChild(card);

//     /*limpiar campos */ 
//     document.getElementById("contactName").value = "";
//     document.getElementById("address").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phoneHome").value = "";
//     document.getElementById("phoneCell").value = "";
//     document.getElementById("relationship").value = "";

//     /*botón de eliminar*/
//     deleteBtn.addEventListener("click", function() {
//         card.remove();
//     });
// });

// /*Directorio personal*/


// Función para guardar las tarjetas en el localStorage
function saveCardsToLocalStorage(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
  }
  
  // Función para obtener las tarjetas guardadas del localStorage
  function getCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    return cards;
  }
  
  // Función para rellenar los campos del formulario con los datos de la tarjeta
  function fillFormWithCardData(card) {
    document.getElementById("contactName").value = card.name;
    document.getElementById("address").value = card.address;
    document.getElementById("email").value = card.email;
    document.getElementById("phoneHome").value = card.phoneHome;
    document.getElementById("phoneCell").value = card.phoneCell;
    document.getElementById("relationship").value = card.relationship;
  }
  
  // Función para renderizar las tarjetas
  function renderCards(cards) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ''; // Limpiar tarjetas anteriores
  
    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
  
      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerText = "Eliminar";
      deleteBtn.addEventListener("click", () => {
        cards.splice(index, 1); // Eliminar la tarjeta del array
        saveCardsToLocalStorage(cards); // Guardar los cambios en el localStorage
        renderCards(cards); // Renderizar las tarjetas actualizadas
      });
  
      const editBtn = document.createElement("span");
      editBtn.classList.add("edit-btn");
      editBtn.innerText = "Editar";
      editBtn.addEventListener("click", () => {
        fillFormWithCardData(card); // Rellenar los campos del formulario con los datos de la tarjeta
        editBtn.style.display = "none"; // Ocultar el botón "Editar"
  
        const saveBtn = document.createElement("span");
        saveBtn.classList.add("save-btn");
        saveBtn.innerText = "Guardar";
        saveBtn.addEventListener("click", () => {
          // Actualizar los datos de la tarjeta en el array
          card.name = document.getElementById("contactName").value;
          card.address = document.getElementById("address").value;
          card.email = document.getElementById("email").value;
          card.phoneHome = document.getElementById("phoneHome").value;
          card.phoneCell = document.getElementById("phoneCell").value;
          card.relationship = document.getElementById("relationship").value;
  
          saveCardsToLocalStorage(cards); // Guardar los cambios en el localStorage
          renderCards(cards); // Renderizar las tarjetas actualizadas
          saveBtn.remove(); // Eliminar el botón "Guardar"
          editBtn.style.display = "inline"; // Mostrar el botón "Editar" nuevamente
        });
  
        cardElement.appendChild(saveBtn);
      });
  
      cardElement.innerHTML = `
        <h2>Información de contacto:</h2>
        <p><strong>Nombre:</strong> ${card.name}</p>
        <p><strong>Dirección postal:</strong> ${card.address}</p>
        <p><strong>Correo electrónico:</strong> ${card.email}</p>
        <p><strong>Teléfono particular:</strong> ${card.phoneHome}</p>
        <p><strong>Teléfono celular:</strong> ${card.phoneCell}</p>
        <p><strong>Parentesco:</strong> ${card.relationship}</p>
      `;
  
      cardElement.appendChild(deleteBtn);
      cardElement.appendChild(editBtn);
      cardContainer.appendChild(cardElement);
    });
  }
  
  // Cargar las tarjetas guardadas en el localStorage al cargar la página
  window.onload = function() {
    const cards = getCardsFromLocalStorage();
    renderCards(cards);
  };
  
  // Evento de envío del formulario
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos
    var contactName = document.getElementById("contactName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phoneHome = document.getElementById("phoneHome").value;
    var phoneCell = document.getElementById("phoneCell").value;
    var relationship = document.getElementById("relationship").value;
  
    // Crear objeto con los datos de la tarjeta
    const card = {
      name: contactName,
      address: address,
      email: email,
      phoneHome: phoneHome,
      phoneCell: phoneCell,
      relationship: relationship
    };
  
    // Obtener las tarjetas existentes del localStorage
    const cards = getCardsFromLocalStorage();
  
    // Agregar la nueva tarjeta al array
    cards.push(card);
  
    // Guardar las tarjetas en el localStorage
    saveCardsToLocalStorage(cards);
  
    // Renderizar las tarjetas
    renderCards(cards);
  
    // Limpiar los campos del formulario
    document.getElementById("contactName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneHome").value = "";
    document.getElementById("phoneCell").value = "";
    document.getElementById("relationship").value = "";
  });





