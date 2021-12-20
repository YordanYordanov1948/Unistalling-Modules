import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = numbersArray.filter((n) => n % 2 === 0);
  console.log(isEven);

  ul.append([isEven]);
});
