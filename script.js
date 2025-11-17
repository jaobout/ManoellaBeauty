// MOSTRAR PIX SE O CLIENTE ESCOLHER PIX
document.addEventListener("change", () => {
  let pixArea = document.getElementById("pix-area");
  let pgPix = document.querySelector("input[value='pix']");

  if (pgPix && pgPix.checked) {
    pixArea.style.display = "block";
  } else {
    pixArea.style.display = "none";
  }
});

// CONFIRMAR AGENDAMENTO
function confirmarAgendamento() {
  let servico = document.getElementById("servico").value;
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;
  let nome = document.getElementById("nome").value;

  if (!servico || !data || !hora || !nome) {
    alert("Preencha todos os campos antes de confirmar!");
    return;
  }

  alert(`Agendamento confirmado!\n\nServiço: ${servico}\nData: ${data}\nHora: ${hora}\nNome: ${nome}`);
}
