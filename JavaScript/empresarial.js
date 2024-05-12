// Guardar cards en localsotage


function saveCardsToLocalStorage(cards) {
    localStorage.setItem('cardss', JSON.stringify(cards));
}

// Cargar cards en local
function getCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('cardss')) || [];
    return cards;
}

///////////////// editado
function fillFormWithCardData(card) {
    document.getElementById("companyName").value = card.company;
    document.getElementById("businessType").value = card.busines ;
    document.getElementById("companyAddress").value = card.adress1 ;
    document.getElementById("legalRepresentative").value = card.phone1 ;
    document.getElementById("companyPhone").value = card.phone2;
    document.getElementById("companyEmail").value = card.email1;

    
    
  }

// Funcion para renderizar cartas
function renderCards(cards) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ''; 
    var cont=0;

    cards.forEach((card, index) => {
        if(card.id == localStorage.getItem('id')){
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
                card.company = document.getElementById("companyName").value;
                card.busines = document.getElementById("businessType").value;
                card.adress1 = document.getElementById("companyAddress").value;
                card.phone1 = document.getElementById("legalRepresentative").value;
                card.phone2 = document.getElementById("companyPhone").value;
                card.email1 = document.getElementById("companyEmail").value;

                saveCardsToLocalStorage(cards); // Guardar los cambios en el localStorage
                renderCards(cards); // Renderizar las tarjetas actualizadas
                saveBtn.remove(); // Eliminar el botón "Guardar"
                editBtn.style.display = "inline"; // Mostrar el botón "Editar" nuevamente
            }); 
        
              cardElement.appendChild(saveBtn);
        });

        cont=cont+1;
        cardElement.innerHTML = `
            <h2>Información de contacto:</h2> <!--card num: ${cont}--> 
            <p><strong>Nombre de la empresa:</strong> ${card.company}</p>
            <p><strong>Giro:</strong> ${card.busines}</p>
            <p><strong>Dirección postal:</strong> ${card.adress1}</p>
            <p id=${'"'+'card'+cont+'"'}><strong>Representante legal:</strong> ${card.phone1}</p>
            <p><strong>Teléfono:</strong> ${card.phone2}</p>
            <p><strong>Correo electrónico:</strong> ${card.email1}</p> 
            <a onclick="Agendar(${cont})" href="agendaE.html" id="agendar">  Agendar cita </a>
        `;

        cardElement.appendChild(deleteBtn);
        cardElement.appendChild(editBtn);
        cardContainer.appendChild(cardElement);
         }
    });
}

window.onload = function() {
    const cards = getCardsFromLocalStorage();
    renderCards(cards);
};


document.getElementById("companyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    var companyName = document.getElementById("companyName").value;
    var businessType = document.getElementById("businessType").value;
    var companyAddress = document.getElementById("companyAddress").value;
    var legalRepresentative = document.getElementById("legalRepresentative").value;
    var companyPhone = document.getElementById("companyPhone").value;
    var companyEmail = document.getElementById("companyEmail").value;
    var id = localStorage.getItem('id');

    const card = {
        company : companyName,
        busines : businessType,
        adress1 : companyAddress,
        phone1 : legalRepresentative,
        phone2 : companyPhone,
        email1 : companyEmail,
        id : id
    };
    
    const cards = getCardsFromLocalStorage();
    
    cards.push(card);
    
    saveCardsToLocalStorage(cards);
    
    renderCards(cards);

    document.getElementById("companyName").value = "";
    document.getElementById("businessType").value = "";
    document.getElementById("companyAddress").value = "";
    document.getElementById("legalRepresentative").value = "";
    document.getElementById("companyPhone").value = "";
    document.getElementById("companyEmail").value = "";
});

function Agendar(x){
    let nom = document.getElementById('card'+x).textContent;
    nom = nom.replace('Representante legal: ', '');
    
    alert(nom);
  
    sessionStorage.setItem('nombre', nom);
  }
