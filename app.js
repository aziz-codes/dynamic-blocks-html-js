const items = ["Home", "About us", "Support", "Products"];

const menus = document.getElementById("menus");
let lists = "";
items.forEach((el, index) => {
  lists += `<li onclick=navigate(${index})>${el}</li>`;
});

menus.innerHTML = lists;

function navigate(link) {
  alert(items[link]);
}
