// Guardar cards en localsotage
function saveCardsToLocalStorage(cards) {
    localStorage.setItem('cardss', JSON.stringify(cards));
}

// Cargar cards en local
function getCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('cardss')) || [];
    return cards;
}

// Funcion para renderizar cartas
function renderCards(cards) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ''; 

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Eliminar";

        deleteBtn.addEventListener("click", () => {
            
            const index = cards.indexOf(card);
            if (index !== -1) {
                cards.splice(index, 1);
                saveCardsToLocalStorage(cards); 
                renderCards(cards); 
            }
        });

        cardElement.innerHTML = `
            <h2>Información de contacto:</h2>
            <p><strong>Nombre de la empresa:</strong> ${card.companyName}</p>
            <p><strong>Giro:</strong> ${card.businessType}</p>
            <p><strong>Dirección postal:</strong> ${card.companyAddress}</p>
            <p><strong>Representante legal:</strong> ${card.legalRepresentative}</p>
            <p><strong>Teléfono:</strong> ${card.companyPhone}</p>
            <p><strong>Correo electrónico:</strong> ${card.companyEmail}</p>
        `;
        cardElement.appendChild(deleteBtn);
        cardContainer.appendChild(cardElement);
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

    const card = {
        companyName: companyName,
        businessType: businessType,
        companyAddress: companyAddress,
        legalRepresentative: legalRepresentative,
        companyPhone: companyPhone,
        companyEmail: companyEmail
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