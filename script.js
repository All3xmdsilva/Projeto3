function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
   // if(html.classList.contains('light')) {
   //   html.classList.remover('light')
   // } else{
   //     html.classList.add('light')
   // }

   //pegar a tag img
   const img = document.querySelector("#profile img")

   //Substituir a imagem
   if(html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./imagens/Avatar.png", "alt", "Foto de Alex M. de camisa cinza")
    } else{
        //set tiver sem lioght mode
        img.setAttribute("src", "./imagens/Avatar-darck.png", "alt", "Foto de Alex M. em um campo de golf")
   }


}