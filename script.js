//CON XMLHTTPREQUEST
const { ajax } = rxjs.ajax;
const { fromEvent } = rxjs;

const input = document.querySelector(".input");
const search = document.querySelector(".search");
const container = document.querySelector(".container");
const limpiar = document.querySelector(".clear");
const text = document.getElementsByTagName("p");
const radioButtons = document.getElementsByName("llamada");


ajax.getJSON("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
  .subscribe({
    next: (response) => {
      console.log(datos);

      datos = response;
      limpiar.addEventListener("click", cleaning);
    },
    error: (error) => {
      console.error("Error en la petición:", error);
    }
  });


function cleaning() {
  document.querySelectorAll("p").forEach((e) => {
    e.innerHTML = "";
    input.value = "";
    text.ContentText = "";

  });
}




let datos = null;


// llamar desde  el radio button


document.querySelector(".search").addEventListener(`click`, () => {
  const CallBack = document.getElementById("CallBack");
  const Promesa = document.getElementById("Promesa");
  const AsyncAwait = document.getElementById("AsyncAwait");
  const Observables = document.getElementById("Observables")


});


function ConPromesas() {
  console.log("--- Ejemplo API con Promesas (Fetch) ---");
  fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limitd2323")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((datos) => {
      console.log("Datos:", datos);
      let html;
      search.addEventListener("click", () => {
        let idDato = Number(input.value);
        console.log(typeof idDato);

        let html = "";
        let datoBuscado = datos.find((dato) => dato.id === idDato);

        if (datoBuscado) {
          html = `<p>ID: ${datoBuscado.id} </p>
                    <p>Título: ${datoBuscado.title}</p>
                    <p>URL: <a href="${datoBuscado.url}" target="_blank">${datoBuscado.url}</a></p>`;
        } else {
          html = "<p>Petición Incorrecta</p>";
        }


      });


      limpiar.addEventListener("click", () => {

        document.querySelectorAll("p").forEach((e) => {
          e.innerHTML = "";
          input.value = '';
        });
      });
    })
    .catch((error) => {
      console.error("Error en la petición Fetch:", error);
    })
    .finally(() => {
      console.log("Operación Fetch finalizada\n");
    });
}

function llamarApiConCallback(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      callback(new Error(`Error de solicitud: ${xhr.status}`), null);
    }
  };
  xhr.onerror = () => {
    callback(new Error("Error de red"), null);
  };

  xhr.send();
}

function ejemploApiCallback() {
  console.log("--- Ejemplo API con Callback (XMLHttpRequest) ---");
  llamarApiConCallback(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5",
    (error, datos) => {
      if (error) {
        console.error("Error en la llamada:", error);
      } else {
        console.log("Datos:", datos);

        search.addEventListener("click", () => {
          let idDato = Number(input.value);
          console.log(typeof idDato);

          let html = "";
          let datoBuscado = datos.find((dato) => dato.id === idDato);

          if (datoBuscado) {
            html = `<p>ID: ${datoBuscado.id} </p>
                    <p>Título: ${datoBuscado.title}</p>
                    <p>URL: <a href="${datoBuscado.url}" target="_blank">${datoBuscado.url}</a></p>`;
          } else {
            html = "<p>Petición Incorrecta</p>";
          }

          
        });

        limpiar.addEventListener("click", () => {
          document.getElementById("resultado").innerHTML = "";
        });
      }
    }
  );
}



function vacio(id) {
  if (id = null) {
    console.log("Favor de no dejar la funcion vacia:");
  }
}

async function ApiAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
    );
    if (!response.ok) {
      console.log("ERROR AL BUSCAR LOS DATOS");
    }
    datos = await response.json();
    console.log("Datos:", datos);
    let html;
    searcher(html, datos);
  } catch (e) {
    console.log("Error en la peticion", e);
  } finally {
  }
}

search.addEventListener("click", () => {
  let idDato = Number(input.value);



  if (idDato >= 0 && idDato < 5) {
    let datoBuscado = datos.find((dato) => dato.id == idDato);
    console.log("Que viene:", datoBuscado);
    html = `<p>ID: ${datoBuscado.id} </p>
                      <p>Titulo: ${datoBuscado.title}</p>
                      <p>URL: ${datoBuscado.url} </p> `;
    cleaning();
  } else {
    html = "<p>Peticion Incorrecta</p>";
  }

  cleaning();
  container.insertAdjacentHTML("beforeend", html);

  limpiar.addEventListener("click", cleaning);
});

function searcher(html, datos) {

}


fromEvent(search, "click").subscribe(() => {
  function cleaning() {
    document.querySelectorAll("p").forEach((e) => {
      e.innerHTML = "";
      input.value = "";
    })
  };
  if (Observables.checked) {
    let idDato = Number(input.value);
    let html;



    console.log(idDato);
    console.log(input.value);
    let inputValue = input.value.trim();
    if (inputValue === "") {
      html = "<p>Peticion vacia</p>";
    }
    else {
      if (idDato >= 0 && idDato < 5) {
        let datoBuscado = datos.find((dato) => dato.id == idDato);
        console.log("Que viene:", datoBuscado);
        html = `<p>ID: ${datoBuscado.id} </p>
                          <p>Titulo: ${datoBuscado.title}</p>
                          <p>URL: ${datoBuscado.url} </p> `;
        cleaning();
      } else {
        html = "<p>Peticion Incorrecta</p>";
      }

      cleaning();
      container.insertAdjacentHTML("beforeend", html);

      limpiar.addEventListener("click", cleaning);
    };
  } else if (CallBack.checked) {
    const input = document.querySelector(".input");
    const search = document.querySelector(".search");
    const container = document.querySelector(".container");
    const limpiar = document.querySelector(".clear");
    const text = document.getElementsByTagName("p");
    const radioButtons = document.getElementsByName("llamada");


    ejemploApiCallback();


  } else if (Promesa.checked) {

    ConPromesas();


  } else if (AsyncAwait.checked) {
    //ASYNC AWAIT


    ApiAsync();

    function cleaning() {
      document.querySelectorAll("p").forEach((e) => {
        e.innerHTML = "";
        input.value = "";
      });
    }



  }
});





