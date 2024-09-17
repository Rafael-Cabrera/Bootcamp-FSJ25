import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola desde MainTS</h1>
    <form id="loginForm">
      <section>
        <label>Nombre de usurio:</label>
        <input type="text" id="username" name="name" placeholrder="Ingresa tu nombre de usuario">
      </section>
      <section>
        <label>Password:</label>
        <input type="text" id="password" name="password" placeholder="Ingresa tu password">
      </section>

      <button type="submit">Iniciar sesion</button>
    </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Esto es texto desde el p";
const form = document.getElementById("loginForm") as HTMLFormElement;

form.addEventListener("submit", (e:SubmitEvent)=> {
  e.preventDefault();
  console.log('Holis!!');
});
