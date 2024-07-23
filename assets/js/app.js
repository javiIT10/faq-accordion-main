// Variables
const expandBtns = document.querySelectorAll(".expandBtn");

expandBtns.forEach((expandBtn) => {
  expandBtn.addEventListener("click", function (e) {
    const reference = e.target.parentElement.nextElementSibling;

    if (e.target.alt === "icon-plus") {
      e.target.src = "assets/images/icon-minus.svg";
      e.target.alt = "icon-minus.svg";

      mostrarContenido(reference);
    } else {
      e.target.src = "assets/images/icon-plus.svg";
      e.target.alt = "icon-plus";

      ocultarContenido(reference);
    }
  });
});

function mostrarContenido(reference) {
  reference.classList.remove("h-0", "overflow-hidden");
  reference.classList.add("mt-4");
}

function ocultarContenido(reference) {
  reference.classList.add("h-0", "overflow-hidden");
  reference.classList.remove("mt-4");
}
