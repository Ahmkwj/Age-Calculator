document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(function () {
    document.getElementById("loading").classList.add("hidden");

    const ageInput = document.getElementById("ageInput").value;
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("ageResult").textContent = ageInput;
  }, 2000);
});
