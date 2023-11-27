document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
  <div class="carousel__nav">
    ${buttonsHtml.join("")}
  </div>
`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach(item => item.classList.remove("carousel__item--selected"));
      buttons.forEach(button => button.classList.remove("carousel__button--selected"));

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");


    });
  });
  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

// buttonbelow

// $(document).ready(function () {
//   $("button").mouseover(function () {
//     $(".fa-solid").animate({
//       bottom: '40px',
//     });
//   });
// });


// $(".fa-solid").hover(
// function(){
//   $(this).filter(':not(:animated)').animate ({
//     marginTop:'20px'
//   },'slow');

// },
// function() {
// $(this).animate({
//   marginTop:'20px'
// },'slow');

// });

const element = document.querySelector('.fa-solid');

element.addEventListener('mouseover', function () {
  this.classList.add('animated');
});