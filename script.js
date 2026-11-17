
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
  const oracionInterna = document.getElementById("oracion-contenido");
  const comunidad = document.getElementById("pagina-comunidad");
  const formacion = document.getElementById("pagina-formacion");
const formacionInterna = document.getElementById("formacion-contenido");
  const musica = document.getElementById("pagina-musica");
  const agenda = document.getElementById("pagina-agenda");
  const detail = document.getElementById("ronda-detail");

  // Ocultar las pantallas
 


home.classList.add("hidden");
oracion.classList.remove("active");
oracionInterna.classList.remove("active");
comunidad.classList.remove("active");
formacion.classList.remove("active");

if (formacionInterna) {
  formacionInterna.classList.remove("active");
}

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


/* CONTENIDO DE LAS PÁGINAS DE ORACIÓN */

const contenidosOracion = {
  Rosario: {
    icono: "📿",
    titulo: "SANTO ROSARIO",
    descripcion: "Un momento para rezar junto a María.",
    tarjetas: [
      ["¿Cómo rezar el Rosario?",
       "Comenzá con la señal de la cruz, rezá el Credo, un Padre Nuestro, tres Avemarías y un Gloria."],
      ["Misterios gozosos",
       "Se rezan los lunes y sábados. Nos invitan a contemplar la infancia de Jesús."],
      ["Misterios dolorosos",
       "Se rezan los martes y viernes. Recordamos la pasión y muerte de Jesús."],
      ["Misterios gloriosos",
       "Se rezan los miércoles y domingos. Celebramos la resurrección y la gloria de Jesús."],
      ["Misterios luminosos",
       "Se rezan los jueves. Reflexionamos sobre la vida pública de Jesús."]
    ]
  },

  Oraciones: {
    icono: "📖",
    titulo: "ORACIONES",
    descripcion: "Encontrá palabras para hablar con Dios.",
    tarjetas: [
      ["Padre Nuestro",
       "Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo."],
      ["Ave María",
       "Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús."],
      ["Oración de la mañana",
       "Señor, gracias por este nuevo día. Acompañame en cada paso y ayudame a compartir tu amor con los demás."],
      ["Oración de la noche",
       "Señor, gracias por todo lo vivido hoy. Te entrego mis preocupaciones y descanso en tu paz."]
    ]
  },

  Santos: {
    icono: "✝️",
    titulo: "SANTOS",
    descripcion: "Conocé historias de personas que vivieron su fe.",
    tarjetas: [
      ["San Francisco de Asís",
       "Nos enseña a vivir con sencillez, amar la creación y ayudar a quienes más lo necesitan."],
      ["Santa Teresita del Niño Jesús",
       "Nos recuerda que podemos demostrar nuestro amor a Dios a través de pequeños gestos cotidianos."],
      ["San Carlo Acutis",
       "Un joven apasionado por la tecnología y la Eucaristía que nos inspira a vivir la fe en el mundo digital."]
    ]
  },

  Reflexiones: {
    icono: "📜",
    titulo: "REFLEXIONES",
    descripcion: "Un espacio para detenerte y conectar con Dios.",
    tarjetas: [
      ["Confiar en Dios",
       "Aunque no siempre entendamos lo que sucede, podemos encontrar esperanza en la oración y en su amor."],
      ["La importancia de compartir",
       "La fe también se vive acompañando, escuchando y ayudando a los demás."],
      ["Un momento de gratitud",
       "Hoy dedicá unos minutos a agradecer por las personas y las pequeñas cosas que hacen especial tu vida."]
    ]
  }
};

function abrirContenidoOracion(tipo) {
  const contenido = contenidosOracion[tipo];
  if (!contenido) return;

  const paginaOracion = document.getElementById("pagina-oracion");
  const paginaInterna = document.getElementById("oracion-contenido");

  if (!paginaInterna) return;

  paginaOracion.classList.remove("active");
  paginaInterna.classList.add("active");

  document.getElementById("oracion-interna-icono").textContent =
    contenido.icono;

  document.getElementById("oracion-interna-titulo").textContent =
    contenido.titulo;

  document.getElementById("oracion-interna-descripcion").textContent =
    contenido.descripcion;

  const lista = document.getElementById("oracion-interna-lista");
  lista.innerHTML = "";

  contenido.tarjetas.forEach(([titulo, texto]) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "oracion-interna-tarjeta";

    const encabezado = document.createElement("h3");
    encabezado.textContent = titulo;

    const parrafo = document.createElement("p");
    parrafo.textContent = texto;

    tarjeta.append(encabezado, parrafo);
    lista.appendChild(tarjeta);
  });

  const pantalla = document.querySelector(".screen");
  if (pantalla) pantalla.scrollTop = 0;
}


/* CONTENIDOS DE FORMACIÓN */

const contenidosFormacion = {
  "Biblia": {
    icono: "📖",
    titulo: "LA BIBLIA EN NUESTRA VIDA",
    descripcion: "Descubrí cómo la Palabra de Dios puede acompañarte todos los días.",
    articulos: [
      {
        titulo: "¿Por qué leer la Biblia?",
        texto: "La Biblia nos ayuda a conocer a Dios, descubrir sus enseñanzas y encontrar orientación para nuestra vida."
      },
      {
        titulo: "Cómo empezar a leerla",
        texto: "Podés comenzar por los Evangelios, dedicar unos minutos por día y reflexionar sobre lo que Dios quiere decirte."
      },
      {
        titulo: "La Palabra en lo cotidiano",
        texto: "Llevá lo que aprendés a tus relaciones, decisiones y encuentros con los demás."
      }
    ]
  },

  "Vida cristiana": {
    icono: "❤️",
    titulo: "¿QUÉ SIGNIFICA TENER FE HOY?",
    descripcion: "La fe se vive en las pequeñas acciones de cada día.",
    articulos: [
      {
        titulo: "Confiar en Dios",
        texto: "Tener fe es aprender a confiar en Dios incluso cuando no tenemos todas las respuestas."
      },
      {
        titulo: "Vivir el amor",
        texto: "La fe también se demuestra escuchando, ayudando, perdonando y acompañando a quienes nos rodean."
      },
      {
        titulo: "Crecer en comunidad",
        texto: "Compartir nuestra fe con otros nos fortalece y nos ayuda a seguir creciendo."
      }
    ]
  },

  "Santos": {
    icono: "✝️",
    titulo: "SANTOS QUE INSPIRAN",
    descripcion: "Conocé personas que hicieron del amor a Dios una forma de vida.",
    articulos: [
      {
        titulo: "San Francisco de Asís",
        texto: "Nos inspira a vivir con sencillez, cuidar la creación y ayudar a quienes más lo necesitan."
      },
      {
        titulo: "Santa Teresita del Niño Jesús",
        texto: "Nos enseña que podemos acercarnos a Dios a través de pequeños gestos de amor."
      },
      {
        titulo: "San Carlo Acutis",
        texto: "Un joven que utilizó la tecnología para compartir su fe y acercar a otros a Jesús."
      }
    ]
  }
};

function abrirFormacion(categoria) {
  const contenido = contenidosFormacion[categoria];
  if (!contenido) return;

  const pagina = document.getElementById("formacion-contenido");
  if (!pagina) return;

  document.getElementById("formacion-interna-icono").textContent = contenido.icono;
  document.getElementById("formacion-interna-titulo").textContent = contenido.titulo;
  document.getElementById("formacion-interna-descripcion").textContent = contenido.descripcion;

  const lista = document.getElementById("formacion-interna-lista");
  lista.innerHTML = "";

  contenido.articulos.forEach(articulo => {
    const tarjeta = document.createElement("article");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");

    titulo.textContent = articulo.titulo;
    texto.textContent = articulo.texto;

    tarjeta.append(titulo, texto);
    lista.appendChild(tarjeta);
  });

  rondaGo("Formación");
  document.getElementById("pagina-formacion").classList.remove("active");
  pagina.classList.add("active");

  const pantalla = document.querySelector(".screen");
  if (pantalla) pantalla.scrollTop = 0;
}
