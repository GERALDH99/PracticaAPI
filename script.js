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

    function vacio() {
      if (idDato = null) {
        console.log("Favor de no dejar la funcion vacia:");
      }
    }

    console.log(idDato);
    console.log(input.value);
    let inputValue = input.value.trim();
    if (inputValue === "") {
      html = "<p>Peticion vacia</p>";
    }
    else {
      if (idDato >= 0 && idDato < 5) {

        html = `<p>ID: ${datos[idDato - 1].id} </p>
                      <p>Titulo: ${datos[idDato - 1].title}</p>
                      <p>URL: ${datos[idDato - 1].url} </p>`;

      }
      else {
        html = "<p>Peticion Incorrecta</p>";

      }
    }
    cleaning();
    container.insertAdjacentHTML("beforeend", html);

  } else if (CallBack.checked) {
    const input = document.querySelector(".input");
    const search = document.querySelector(".search");
    const container = document.querySelector(".container");
    const limpiar = document.querySelector(".clear");
    const text = document.getElementsByTagName("p");
    const radioButtons = document.getElementsByName("llamada");

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
            console.log('Datos:', datos)
            let html;

            search.addEventListener("click", () => {

              let idDato = Number(input.value);
              console.log(typeof idDato);

              if (idDato > 0 || idDato <= 5) {
                html = `<p>ID: ${datos[idDato - 1].id} </p>
                          <p>Titulo: ${datos[idDato - 1].title}</p>
                          <p>URL: ${datos[idDato - 1].url} </p> `;
                cleaning();
              } else {
                html = "<p>Peticion Incorrecta</p>";

              }

              container.insertAdjacentHTML("beforeend", html);

            });

            limpiar.addEventListener('click', () => {
              document.querySelectorAll('p').forEach(e => {
                e.innerHTML = '';
              });
            });
          }
        }
      );
    }

    ejemploApiCallback();


  } else if (Promesa.checked) {
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

            if (idDato >= 0 && idDato < 5) {
              html = `<p>ID: ${datos[idDato - 1].id} </p>
                        <p>Titulo: ${datos[idDato - 1].title}</p>
                        <p>URL: ${datos[idDato - 1].url} </p> `;
              cleaning();
            } else {
              html = '<p>Peticion Incorrecta</p>'
              cleaning();
            }

            container.insertAdjacentHTML("beforeend", html);

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

    ConPromesas();


  } else if (AsyncAwait.checked) {
    //ASYNC AWAIT

    async function ApiAsync() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
        );
        if (!response.ok) {
          console.log("ERROR AL BUSCAR LOS DATOS");
        }
        const datos = await response.json();
        console.log("Datos:", datos);
        let html;
        searcher(html, datos);
      } catch (e) {
        console.log("Error en la peticion", e);
      } finally {
      }
    }

    ApiAsync();

    function cleaning() {
      document.querySelectorAll("p").forEach((e) => {
        e.innerHTML = "";
        input.value = "";
      });
    }

    function searcher(html, datos) {
      search.addEventListener("click", () => {
        let idDato = Number(input.value);

        if (idDato >= 0 && idDato < 5) {

          html = `<p>ID: ${datos[idDato - 1].id} </p>
                            <p>Titulo: ${datos[idDato - 1].title}</p>
                            <p>URL: ${datos[idDato - 1].url} </p> `;
          cleaning();
        } else {
          html = "<p>Peticion Incorrecta</p>";
        }
        cleaning();
        container.insertAdjacentHTML("beforeend", html);

        limpiar.addEventListener("click", cleaning);
      });
    }


  }
});





