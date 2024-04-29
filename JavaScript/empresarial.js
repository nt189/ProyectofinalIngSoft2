/*directorio empresarial*/
// document.getElementById("companyForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var companyName = document.getElementById("companyName").value;
//     var businessType = document.getElementById("businessType").value;
//     var companyAddress = document.getElementById("companyAddress").value;
//     var legalRepresentative = document.getElementById("legalRepresentative").value;
//     var companyPhone = document.getElementById("companyPhone").value;
//     var companyEmail = document.getElementById("companyEmail").value;

//     var card = document.createElement("div");
//     card.classList.add("card");
//     var deleteBtn = document.createElement("span");
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.innerText = "Eliminar";
//     card.innerHTML = "<h2>Información recibida:</h2>" +
//                      "<p><strong>Nombre de la empresa:</strong> " + companyName + "</p>" +
//                      "<p><strong>Giro:</strong> " + businessType + "</p>" +
//                      "<p><strong>Dirección postal:</strong> " + companyAddress + "</p>" +
//                      "<p><strong>Representante legal:</strong> " + legalRepresentative + "</p>" +
//                      "<p><strong>Teléfono:</strong> " + companyPhone + "</p>" +
//                      "<p><strong>Correo electrónico:</strong> " + companyEmail + "</p>";
//     card.appendChild(deleteBtn);
//     document.getElementById("cardContainer1").appendChild(card);

//     document.getElementById("companyName").value = "";
//     document.getElementById("businessType").value = "";
//     document.getElementById("companyAddress").value = "";
//     document.getElementById("legalRepresentative").value = "";
//     document.getElementById("companyPhone").value = "";
//     document.getElementById("companyEmail").value = "";

//     deleteBtn.addEventListener("click", function() {
//         card.remove();
//     });
// });


document.getElementById("companyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var companyName = document.getElementById("companyName").value;
    var businessType = document.getElementById("businessType").value;
    var companyAddress = document.getElementById("companyAddress").value;
    var legalRepresentative = document.getElementById("legalRepresentative").value;
    var companyPhone = document.getElementById("companyPhone").value;
    var companyEmail = document.getElementById("companyEmail").value;

    var card = document.createElement("div");
    card.classList.add("card");
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Eliminar";
    card.innerHTML = "<h2>Información recibida:</h2>" +
                     "<p><strong>Nombre de la empresa:</strong> " + companyName + "</p>" +
                     "<p><strong>Giro:</strong> " + businessType + "</p>" +
                     "<p><strong>Dirección postal:</strong> " + companyAddress + "</p>" +
                     "<p><strong>Representante legal:</strong> " + legalRepresentative + "</p>" +
                     "<p><strong>Teléfono:</strong> " + companyPhone + "</p>" +
                     "<p><strong>Correo electrónico:</strong> " + companyEmail + "</p>";
    card.appendChild(deleteBtn);
    document.getElementById("cardContainer1").appendChild(card);

    document.getElementById("companyName").value = "";
    document.getElementById("businessType").value = "";
    document.getElementById("companyAddress").value = "";
    document.getElementById("legalRepresentative").value = "";
    document.getElementById("companyPhone").value = "";
    document.getElementById("companyEmail").value = "";

    deleteBtn.addEventListener("click", function() {
        card.remove();
    });
});