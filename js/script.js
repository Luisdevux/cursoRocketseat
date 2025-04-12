function toggleMode() {
  const html = document.documentElement
  //Metodo pronto//
  html.classList.toggle("light");

  //Pegar a tag img //Depois substituir a img
  const img = document.querySelector("#profile img");

  //Não vou usar pois na minha img só muda a borda, e faço isso no css//
  // if (html.classList.contains("light")) {
  //   //Se tiver light mode, mudar a img light
  //   img.setAttribute("src", "/assets/Sun.png");
  // } else {
  //   //Se não deixar normal
  //   img.setAttribute("src", "/assets/perfil.png");
  // }
}