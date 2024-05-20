window.onload = function () {
    const form = document.getElementById('cita-form');
    const citasList = document.getElementById('citas-list');

    citasList.innerHTML = '';
    const citas = JSON.parse(localStorage.getItem('citas')) || [];

    // Convertir la fecha y hora a un objeto Date para cada cita y agregarlo al objeto
    citas.forEach(cita => {
        cita.fechaHoraInicio = new Date(`${cita.fecha}T${cita.horaInicio}`);
    });

    // Ordenar las citas por fecha y hora de inicio
    citas.sort((a, b) => a.fechaHoraInicio - b.fechaHoraInicio);

    // Mostrar las citas ordenadas
    citas.forEach(function(cita, index) {
        if(cita.id === localStorage.getItem('id')){
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Nombre: ${cita.nombre}</strong><br>
                <span>Fecha: ${cita.fecha}</span>
                <span>Hora de inicio: ${cita.horaInicio}</span>
                <span>Hora de finalización: ${cita.horaFin}</span>
                <span>Lugar: ${cita.lugar}</span>
                <span>Asunto: ${cita.asunto}</span>
            `;
            citasList.appendChild(li);
        }
    });
}

