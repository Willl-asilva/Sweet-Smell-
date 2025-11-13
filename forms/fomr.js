function logar(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login == "admin" && senha =="admin"){
        alert('Bem-vindo');
        location.href = "produtos.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }
}
/*carrossel*/

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


// Opcional: Auto Slide
setInterval(() => { changeSlide(1); }, 5000);



   