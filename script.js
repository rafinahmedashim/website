/*-----------------------------------------------------*/
/* Navigation Menu
   ------------------------------------------------------ */

// <Menu bar design menu is X or normal>

/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-clicked");
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// window.onscroll = function () {
//   whenScrolled();
// };
// function whenScrolled() {
//   var scrollTop = document.documentElement.scrollTop;

// window.pageYOffset							this is my comment

//   if (scrollTop > 100) {
//     var scrollHigh = document.getElementById("static-help");
//     if (scrollHigh.className == "static-helper static") {
//       scrollHigh.className = "static-helper";
//     } else {
//       scrollHigh.className = "static-helper static";
//     }
//   }
// }
// window.addEventListener("scroll", () => {
//   if (window.scrollY < 100) {
//     console.log("Not past 100px");
//   } else {
//     console.log("Past 100px!");
//   }
// });

// </Menu bar design menu is X or normal>
