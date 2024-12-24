/***************************************************
 * 1) LISTA DE REFRANES (texto + explicación + pistasAdicionales)
 ***************************************************/
const refranes = [
  {
    texto: "mas vale prevenir que curar",
    explicacion:
      "Recomienda tomar precauciones antes de que un problema ocurra, para evitar males mayores.",
    pistasAdicionales: [
      "Popularmente asociado al ámbito de la salud y la medicina",
      "Implica prudencia y responsabilidad para evitar problemas",
    ],
  },
  {
    texto: "a buen hambre no hay pan duro",
    explicacion:
      "Cuando uno tiene verdadera necesidad, las imperfecciones pasan a un segundo plano.",
    pistasAdicionales: [
      "Las carencias hacen que apreciemos cualquier solución",
      "Resalta la importancia de la verdadera necesidad",
    ],
  },
  {
    texto: "no dejes para manana lo que puedas hacer hoy",
    explicacion: "Aconseja no procrastinar ni aplazar tareas importantes.",
    pistasAdicionales: [
      "Un consejo clásico de productividad",
      "Insta a la acción inmediata para no acumular pendientes",
    ],
  },
  {
    texto: "Dime con quién andas y te diré quién eres",
    explicacion:
      "Sugiere que las personas son influenciadas por las compañías que mantienen, reflejando su carácter o comportamiento.",
    pistasAdicionales: [
      "Refleja la importancia de las amistades y relaciones",
      "Implica que las compañías pueden influir en la reputación",
    ],
  },
  {
    texto: "El que mucho abarca, poco aprieta",
    explicacion:
      "Indica que intentar hacer demasiadas cosas a la vez puede resultar en no hacer ninguna de ellas bien.",
    pistasAdicionales: [
      "Advierte contra la sobrecarga de tareas",
      "Refleja la importancia de la concentración y el enfoque",
    ],
  },
  {
    texto: "En casa de herrero, cuchillo de palo",
    explicacion:
      "Se refiere a la paradoja de que a veces falta lo que uno produce o domina en su propio entorno.",
    pistasAdicionales: [
      "Refleja la ironía de las situaciones personales",
      "Implica que las habilidades no siempre se aplican en el hogar",
    ],
  },
  {
    texto: "A caballo regalado no le mires el diente",
    explicacion:
      "Significa que cuando recibes un regalo, no debes criticarlo o exigirle perfección.",
    pistasAdicionales: [
      "Enfatiza la gratitud hacia los obsequios",
      "Refleja la importancia de apreciar lo que se recibe",
    ],
  },
  {
    texto: "No hay mal que por bien no venga",
    explicacion:
      "Sostiene que de una situación negativa siempre puede surgir algo positivo.",
    pistasAdicionales: [
      "Promueve una perspectiva optimista",
      "Implica que cada problema trae consigo una oportunidad",
    ],
  },
  {
    texto: "A buen entendedor, pocas palabras bastan",
    explicacion:
      "Indica que una persona inteligente entiende rápidamente con pocas explicaciones.",
    pistasAdicionales: [
      "Resalta la capacidad de comprensión rápida",
      "Sugiere que no es necesario hablar mucho para hacerse entender",
    ],
  },
  {
    texto: "No hay rosa sin espinas",
    explicacion:
      "Indica que incluso las cosas más hermosas o valiosas tienen sus inconvenientes o dificultades.",
    pistasAdicionales: [
      "Refleja la dualidad de la vida",
      "Implica que nada es perfecto",
    ],
  },
  {
    texto: "A mal tiempo, buena cara",
    explicacion:
      "Sugiere mantener una actitud positiva incluso en situaciones difíciles.",
    pistasAdicionales: [
      "Promueve la resiliencia y la positividad",
      "Refleja la importancia de la actitud frente a los desafíos",
    ],
  },
  {
    texto: "Más sabe el diablo por viejo que por diablo",
    explicacion:
      "Destaca la sabiduría adquirida con la experiencia a lo largo del tiempo.",
    pistasAdicionales: [
      "Refleja el valor de la experiencia",
      "Indica que la edad trae consigo conocimientos",
    ],
  },
  {
    texto: "Ojos que no ven, corazón que no siente",
    explicacion:
      "Sugiere que la falta de conocimiento sobre algo puede evitar el sufrimiento emocional.",
    pistasAdicionales: [
      "Refleja la ignorancia como un mecanismo de defensa",
      "Implica que la ausencia de información puede proteger emocionalmente",
    ],
  },
  {
    texto: "No hay peor ciego que el que no quiere ver",
    explicacion:
      "Indica que algunas personas eligen ignorar la realidad a pesar de tener la capacidad de verla.",
    pistasAdicionales: [
      "Refleja la obstinación y la negación",
      "Implica que la voluntad puede ser más poderosa que la visión",
    ],
  },
  {
    texto: "Cuando el río suena, agua lleva",
    explicacion:
      "Significa que los rumores o señales suelen tener alguna base de verdad.",
    pistasAdicionales: [
      "Refleja la conexión entre señales y hechos",
      "Implica que las apariencias indican la realidad",
    ],
  },
  {
    texto: "A grandes males, grandes remedios",
    explicacion:
      "Sugiere que situaciones difíciles requieren soluciones fuertes o drásticas.",
    pistasAdicionales: [
      "Refleja la proporcionalidad de las respuestas",
      "Implica que lo que es necesario depende de la magnitud del problema",
    ],
  },
  {
    texto: "Cada loco con su tema",
    explicacion:
      "Indica que cada persona tiene sus propias obsesiones o intereses únicos.",
    pistasAdicionales: [
      "Refleja la individualidad y la diversidad de intereses",
      "Implica que las personas son diferentes en sus pasiones",
    ],
  },
  {
    texto: "No todo lo que brilla es oro",
    explicacion:
      "Advierte que no todo lo que parece valioso o atractivo realmente lo es.",
    pistasAdicionales: [
      "Refleja la importancia de mirar más allá de las apariencias",
      "Implica que la superficialidad puede ser engañosa",
    ],
  },
  {
    texto: "A quien madruga, Dios le ayuda",
    explicacion:
      "Sugiere que aquellos que trabajan duro y temprano en el día tienen más probabilidades de tener éxito.",
    pistasAdicionales: [
      "Refleja la importancia de la diligencia y la iniciativa",
      "Implica que el esfuerzo temprano trae recompensas",
    ],
  },
  {
    texto: "No hay peor ciego que el que no quiere ver",
    explicacion:
      "Indica que algunas personas eligen ignorar la realidad a pesar de tener la capacidad de verla.",
    pistasAdicionales: [
      "Refleja la obstinación y la negación",
      "Implica que la voluntad puede ser más poderosa que la visión",
    ],
  },
  {
    texto: "No dejes para mañana lo que puedas hacer hoy",
    explicacion:
      "Aconseja no posponer tareas importantes, fomentando la proactividad.",
    pistasAdicionales: [
      "Promueve la eficiencia y la gestión del tiempo",
      "Refleja la importancia de la acción inmediata",
    ],
  },
  {
    texto: "Quien mucho abarca, poco aprieta",
    explicacion:
      "Indica que intentar hacer demasiadas cosas a la vez puede resultar en no hacer ninguna de ellas bien.",
    pistasAdicionales: [
      "Advierte contra la sobrecarga de tareas",
      "Refleja la importancia de la concentración y el enfoque",
    ],
  },
  {
    texto: "A buen entendedor, pocas palabras bastan",
    explicacion:
      "Indica que una persona inteligente entiende rápidamente con pocas explicaciones.",
    pistasAdicionales: [
      "Resalta la capacidad de comprensión rápida",
      "Sugiere que no es necesario hablar mucho para hacerse entender",
    ],
  },
  // Puedes añadir más refranes aquí siguiendo la misma estructura
];


/***************************************************
 * 2) VARIABLES GLOBALES
 ***************************************************/
// Control de la partida
let refranSecreto = "";
let explicacionSecreta = "";
let pistasExtras = [];
let indicePistaExtra = 0; 

// Para pintar y comparar el refrán
let letrasRefran = [];

// Intentos y puntuación
const maxIntentos = 6;
let intentosRealizados = 0;
/**
 * AQUI: Se inicializa en 0, pero AHORA cada vez que termina
 * la partida (aciertes o falles) se vuelve a poner en 0.
 */
let puntuacion = 0; 


/***************************************************
 * 3) REFERENCIAS AL DOM
 ***************************************************/
const grid = document.getElementById("grid");
const guessInput = document.getElementById("guessInput");
const btnEnviar = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");
const pistaInicialDiv = document.getElementById("pistaInicial");
const explicacionDiv = document.getElementById("explicacionRefran");
const pistasExtrasDiv = document.getElementById("pistasExtras");
const btnPedirPista = document.getElementById("btnPedirPista");
const intentosRestantesSpan = document.getElementById("intentosRestantes");
const btnCompartir = document.getElementById("btnCompartir");
const puntuacionSpan = document.getElementById("puntuacion");

/***************************************************
 * 4) INICIAR JUEGO
 ***************************************************/
function iniciarJuego() {
  // 1. Escoger refrán AL AZAR
  refranIDActual = Math.floor(Math.random() * refranes.length);
  const refranSeleccionado = refranes[refranIDActual];

  // 2. Setear variables globales
  refranSecreto = refranSeleccionado.texto;
  explicacionSecreta = refranSeleccionado.explicacion;
  pistasExtras = refranSeleccionado.pistasAdicionales || [];
  indicePistaExtra = 0;
  letrasRefran = refranSecreto.split("");
  intentosRealizados = 0;

  // 3. Reiniciar la cuadrícula
  grid.innerHTML = "";
  crearGrid(letrasRefran.length, maxIntentos);

  // 4. Pista inicial
  pistaInicialDiv.textContent =
    "Pista inicial: " + generarPistaInicial(refranSecreto);

  // 5. Explicación
  explicacionDiv.textContent = explicacionSecreta;

  // 6. Pistas extras
  pistasExtrasDiv.innerHTML =
    "<em>(Pulsa “Pedir pista” para ver más aclaraciones)</em>";

  // 7. Limpiar campo
  guessInput.value = "";
  guessInput.disabled = false;
  btnEnviar.disabled = false;

  // 8. Actualizar info
  actualizarIntentosRestantes();
  // Puntuación se mantiene en 0 aquí para cada nueva partida
  puntuacionSpan.textContent = puntuacion;
}


/***************************************************
 * 5) CREAR LA CUADRÍCULA
 ***************************************************/
function crearGrid(longitudRefran, intentos) {
  for (let i = 0; i < intentos; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < longitudRefran; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${i}-${j}`;
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}


/***************************************************
 * 6) GENERAR PISTA INICIAL (PRIMERA LETRA POR PALABRA)
 ***************************************************/
function generarPistaInicial(refran) {
  const palabras = refran.split(" ");
  return palabras
    .map((palabra) =>
      palabra.length > 1 ? palabra[0] + "_".repeat(palabra.length - 1) : palabra
    )
    .join(" ");
}


/***************************************************
 * 7) CHECK GUESS
 ***************************************************/
function checkGuess() {
  // Si ya no hay intentos
  if (intentosRealizados >= maxIntentos) return;

  // Obtener la respuesta del usuario
  let guess = guessInput.value;
  let guessLower = guess.toLowerCase();
  let refranLower = refranSecreto.toLowerCase();

  // Ajustar longitud
  if (guessLower.length < letrasRefran.length) {
    guessLower = guessLower.padEnd(letrasRefran.length, " ");
  } else if (guessLower.length > letrasRefran.length) {
    guessLower = guessLower.slice(0, letrasRefran.length);
  }

  const letrasGuess = guessLower.split("");
  const copiaRefranLower = refranLower.split("");
  let resultado = new Array(letrasRefran.length).fill("pending");

  // 1) Marcar "correct"
  for (let i = 0; i < letrasGuess.length; i++) {
    if (letrasGuess[i] === copiaRefranLower[i]) {
      resultado[i] = "correct";
      copiaRefranLower[i] = null;
    }
  }

  // 2) Marcar "present" o "absent"
  for (let i = 0; i < letrasGuess.length; i++) {
    if (resultado[i] === "pending") {
      const letra = letrasGuess[i];
      const index = copiaRefranLower.indexOf(letra);
      if (letra !== " " && index !== -1) {
        resultado[i] = "present";
        copiaRefranLower[index] = null;
      } else {
        resultado[i] = "absent";
      }
    }
  }

  // 3) Pintar en la cuadrícula
  for (let i = 0; i < letrasGuess.length; i++) {
    const cell = document.getElementById(`cell-${intentosRealizados}-${i}`);
    if (cell) {
      // Mostrar la letra tal como la ingresó el usuario (mayúscula/minúscula)
      cell.textContent = guess[i] || " ";
      cell.classList.add(resultado[i]);
      cell.classList.add("anim-pop"); // Añadir clase para animación
      // Remover la clase después de la animación para permitir futuras animaciones
      cell.addEventListener("animationend", () => {
        cell.classList.remove("anim-pop");
      }, { once: true });
    }
  }

  // Aumentar intentos
  intentosRealizados++;
  actualizarIntentosRestantes();

  // 4) ¿Ganó?
  if (guessLower === refranLower) {
    // Antes sumábamos puntos, ahora la idea es que
    // la puntuación se reinicie. PERO, si aun así
    // quieres guardar los puntos "ganados" en esa partida
    // antes de resetear, podrías hacerlo aquí.
    const puntosGanados = Math.max(1, 10 - intentosRealizados);

    // Muestra un mensaje, pero resetea la puntuación
    setTimeout(() => {
      alert(
        `¡Felicidades, adivinaste el refrán!\nHas ganado ${puntosGanados} puntos (temporales).\nIniciando nueva partida...`
      );

      // AL TERMINAR LA PARTIDA RESETEAMOS PUNTUACIÓN
      puntuacion = 0;
      puntuacionSpan.textContent = puntuacion;

      // Iniciar nueva partida:
      iniciarJuego();
    }, 300);

    // Guardar estado (Eliminado para deshabilitar LocalStorage)
    // guardarEstadoEnLocalStorage();
    return;
  }

  // Si se acabaron los intentos
  if (intentosRealizados === maxIntentos) {
    setTimeout(() => {
      alert(`Se acabaron los intentos. El refrán era: "${refranSecreto}"`);

      // AL TERMINAR LA PARTIDA RESETEAMOS PUNTUACIÓN
      puntuacion = 0;
      puntuacionSpan.textContent = puntuacion;

      // Si deseas iniciar un nuevo refrán automáticamente, lo llamas aquí:
      iniciarJuego();
    }, 200);
  }

  // Limpiar input y guardar
  guessInput.value = "";
  // guardarEstadoEnLocalStorage(); // Eliminado para deshabilitar LocalStorage
}


/***************************************************
 * 8) PEDIR PISTA ADICIONAL
 ***************************************************/
function pedirPistaAdicional() {
  if (indicePistaExtra >= 3) {
    alert(
      `Has pedido demasiadas pistas. Se acaba la partida.\n\nEl refrán era: "${refranSecreto}"`
    );
    intentosRealizados = maxIntentos;
    guessInput.disabled = true;
    btnEnviar.disabled = true;

    // AL TERMINAR LA PARTIDA RESETEAMOS PUNTUACIÓN
    puntuacion = 0;
    puntuacionSpan.textContent = puntuacion;

    // Guardar estado (Eliminado para deshabilitar LocalStorage)
    // guardarEstadoEnLocalStorage();
    return;
  }

  if (indicePistaExtra < pistasExtras.length) {
    const nuevaPista = document.createElement("p");
    nuevaPista.textContent = "• " + pistasExtras[indicePistaExtra];
    pistasExtrasDiv.appendChild(nuevaPista);
  } else {
    const sinPistas = document.createElement("p");
    sinPistas.style.color = "gray";
    sinPistas.textContent = "No hay más pistas disponibles.";
    pistasExtrasDiv.appendChild(sinPistas);
  }

  indicePistaExtra++;
  // guardarEstadoEnLocalStorage(); // Eliminado para deshabilitar LocalStorage
}


/***************************************************
 * 9) ACTUALIZAR INTENTOS RESTANTES
 ***************************************************/
function actualizarIntentosRestantes() {
  if (intentosRealizados < maxIntentos) {
    intentosRestantesSpan.textContent = `Intento ${
      intentosRealizados + 1
    } de ${maxIntentos}`;
  } else {
    intentosRestantesSpan.textContent = `Sin intentos disponibles.`;
  }
}


/***************************************************
 * 10) COMPARTIR RESULTADO
 ***************************************************/
function compartirResultado() {
  let emojiGrid = `Refranle: "${refranSecreto}"\n`;
  for (let i = 0; i < intentosRealizados; i++) {
    let fila = "";
    for (let j = 0; j < letrasRefran.length; j++) {
      const cell = document.getElementById(`cell-${i}-${j}`);
      if (!cell) continue;
      if (cell.classList.contains("correct")) {
        fila += "🟩";
      } else if (cell.classList.contains("present")) {
        fila += "🟨";
      } else {
        fila += "⬜";
      }
    }
    emojiGrid += fila + "\n";
  }
  emojiGrid += `Puntuación actual: ${puntuacion} puntos.\n`;

  navigator.clipboard.writeText(emojiGrid).then(
    () => {
      alert("¡Resultado copiado al portapapeles!");
    },
    () => {
      alert("No se pudo copiar automáticamente:\n" + emojiGrid);
    }
  );
}


/***************************************************
 * 11) PERSISTENCIA EN LOCALSTORAGE (Eliminada)
 ***************************************************/
// Todas las funciones relacionadas con LocalStorage han sido eliminadas.

/***************************************************
 * 12) ASIGNAR EVENTOS
 ***************************************************/
btnEnviar.addEventListener("click", checkGuess);
btnReiniciar.addEventListener("click", iniciarJuego);
btnPedirPista.addEventListener("click", pedirPistaAdicional);
btnCompartir.addEventListener("click", compartirResultado);

guessInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});


/***************************************************
 * 13) INICIAR AL CARGAR
 ***************************************************/
window.addEventListener("load", () => {
  // Cargar estado de LocalStorage (Eliminado para deshabilitar persistencia)
  // cargarEstadoDeLocalStorage();

  // Iniciar un nuevo juego sin cargar estado previo
  iniciarJuego();
});
