
/* RONDA - NAVEGACIÓN DE LA APP */

const rondaPages = {

  "Formación": [
    "CRECÉ EN TU FE",
    "Descubrí contenidos que te ayudan a conocer, comprender y vivir tu fe.",
    "Explorá y aprendé",
    "Biblia, vida cristiana, santos y recursos de formación."
  ],

  "Música": [
    "MÚSICA QUE CONECTA",
    "Canciones que inspiran, acompañan y nos unen a través de la fe.",
    "Playlist destacada",
    "Música para rezar, reflexionar y compartir."
  ],

  "Agenda": [
    "NOS ENCONTRAMOS PRONTO",
    "Descubrí próximos encuentros, actividades y eventos para compartir tu fe.",
    "Próximas actividades",
    "Encuentros, retiros, voluntariado y celebraciones."
  ]

};


/* CAMBIAR DE PANTALLA */

function rondaGo(page) {

  const home = document.getElementById("ronda-home");
  const oracion = document.getElementById("pagina-oracion");
  const comunidad = document.getElementById("pagina-comunidad");
  const formacion = document.getElementById("pagina-formacion");
  const musica = document.getElementById("pagina-musica");
  const agenda = document.getElementById("pagina-agenda");
  const detail = document.getElementById("ronda-detail");

  // Ocultar las pantallas
 


home.classList.add("hidden");
oracion.classList.remove("active");
comunidad.classList.remove("active");
formacion.classList.remove("active");
musica.classList.remove("active");
agenda.classList.remove("active");
detail.classList.remove("active");


  // Actualizar el menú inferior
  document.querySelectorAll(".navitem").forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.page === page
    );

  });

  // Mostrar la pantalla elegida

  if (page === "Inicio") {

    home.classList.remove("hidden");

  } else if (page === "Oración") {

    oracion.classList.add("active");

  
} else if (page === "Comunidad") {

  comunidad.classList.add("active");


} else if (page === "Formación") {

  formacion.classList.add("active");

} else if (page === "Música") {

  musica.classList.add("active");

} else if (page === "Agenda") {

  agenda.classList.add("active");

} else {


    const contenido = rondaPages[page];

    if (!contenido) {
      home.classList.remove("hidden");
      return;
    }

    detail.classList.add("active");

    document.getElementById("ronda-detail-title")
      .textContent = contenido[0];

    document.getElementById("ronda-detail-subtitle")
      .textContent = contenido[1];

    document.getElementById("ronda-feature-title")
      .textContent = contenido[2];

    document.getElementById("ronda-feature-description")
      .textContent = contenido[3];

  }

  // Volver arriba
  const screen = document.querySelector(".screen");

  if (screen) {
    screen.scrollTop = 0;
  }

}


/* CONECTAR LOS BOTONES DEL MENÚ */

document.querySelectorAll(".navitem").forEach(boton => {

  boton.addEventListener("click", () => {

    rondaGo(boton.dataset.page);

  });

});


/* CONECTAR LAS CATEGORÍAS DEL HOME */

document.querySelectorAll(".cat").forEach(boton => {

  boton.addEventListener("click", () => {

    const texto = boton.textContent.trim();

    if (texto.includes("Oración")) {
      rondaGo("Oración");
    }

    if (texto.includes("Comunidad")) {
      rondaGo("Comunidad");
    }

    if (texto.includes("Formación")) {
      rondaGo("Formación");
    }

    if (texto.includes("Música")) {
      rondaGo("Música");
    }

  });

});


function abrirArticuloFe() {
  document.getElementById("ronda-home")
    .classList.add("hidden");

  document.getElementById("articulo-fe")
    .classList.add("active");

  document.querySelector(".screen")
    .scrollTop = 0;
}

function cerrarArticuloFe() {
  document.getElementById("articulo-fe")
    .classList.remove("active");

  document.getElementById("ronda-home")
    .classList.remove("hidden");

  document.querySelector(".screen")
    .scrollTop = 0;
}


function abrirHistorias() {

  document.getElementById("ronda-home")
    .classList.add("hidden");

  document.getElementById("articulo-fe")
    ?.classList.remove("active");

  document.getElementById("pagina-historias")
    .classList.add("active");

  document.querySelector(".screen")
    .scrollTop = 0;
}

function cerrarHistorias() {

  document.getElementById("pagina-historias")
    .classList.remove("active");

  document.getElementById("ronda-home")
    .classList.remove("hidden");

  document.querySelector(".screen")
    .scrollTop = 0;
}
