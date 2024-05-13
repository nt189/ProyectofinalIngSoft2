/**/
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nombreContacto = params.get('nombre');
  
  
    document.getElementById('nombre').value = nombreContacto || '';
  
    const form = document.getElementById('cita-form');
    const citasList = document.getElementById('citas-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const fecha = document.getElementById('fecha').value;
      const horaInicio = document.getElementById('hora-inicio').value;
      const horaFin = document.getElementById('hora-fin').value;
      const lugar = document.getElementById('lugar').value;
      const asunto = document.getElementById('asunto').value;
  
      const cita = {
        nombre: nombre,
        fecha: fecha,
        horaInicio: horaInicio,
        horaFin: horaFin,
        lugar: lugar,
        asunto: asunto
      };
  
      guardarCita(cita);
      mostrarCitas();
      form.reset();
    });
  
    function guardarCita(cita) {
      let citas = JSON.parse(localStorage.getItem('citas')) || [];
      citas.push(cita);
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  
    function mostrarCitas() {
      citasList.innerHTML = '';
      const citas = JSON.parse(localStorage.getItem('citas')) || [];
      citas.forEach(function(cita, index) {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${cita.nombre}</strong><br>
          <span>Fecha: ${cita.fecha}</span><br>
          <span>Hora de inicio: ${cita.horaInicio}</span><br>
          <span>Hora de finalización: ${cita.horaFin}</span><br>
          <span>Lugar: ${cita.lugar}</span><br>
          <span>Asunto: ${cita.asunto}</span><br>
        `;
        citasList.appendChild(li);
      });
    }
  
    
  
    mostrarCitas();
  });


  