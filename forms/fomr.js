function logar(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senhalogin').value;

    if(login == "admin" && senha =="admin"){
        alert('Bem-vindo');
        location.href = "admin.html";
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



const form = document.getElementById("cadastro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // PEGAR DADOS
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senhacadastro").value;

    // SALVAR NO LOCALSTORAGE
    localStorage.setItem("nome", nome);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("senhacadastro", senha);

    // REDIRECIONAR PARA OUTRA PÁGINA
    window.location.href = "../index.html";
});



   