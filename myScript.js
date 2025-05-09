function toggleSezione(id, btn) {
  let sezione = document.getElementById(id);
  let icon = btn.querySelector("i");

  if (sezione.classList.contains("chiudi")) {
    // Mostro la sezione
    sezione.classList.remove("chiudi");
    sezione
      .querySelectorAll(".card")
      .forEach((el) => (el.style.display = "block"));
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  } else {
    // Nascondo la sezione
    sezione.classList.add("chiudi");
    sezione
      .querySelectorAll(".card")
      .forEach((el) => (el.style.display = "none"));
    icon.classList.remove("bi-chevron-down");
    icon.classList.add("bi-chevron-up");
  }
}

function rimuoviCards() {
  let cards = document.querySelectorAll(".carousel-item");

  cards.forEach((card) => {
    if (card.classList.contains("chiudi")) {
      card.classList.remove("chiudi");
      card.style.display = "block";
    } else {
      card.classList.add("chiudi");
      card.style.display = "none";
    }
  });
}

function aggiornaContatoreCards() {
  const cards = document.querySelectorAll(".card");
  document.getElementById("numeroCards").textContent = cards.length;
}

// Attiva il conteggio quando la pagina è caricata
document.addEventListener("DOMContentLoaded", aggiornaContatoreCards);


document
  .getElementById("formContatti")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailUtente").value;
    if (email) {
      alert(`Grazie! Ti contatteremo a ${email}`);
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalContatti")
      );
      modal.hide();
    }
  });
