function comprar(item) {
  const popup = document.getElementById("popup");

  popup.innerText = item + " adicionado ao carrinho!";
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}
