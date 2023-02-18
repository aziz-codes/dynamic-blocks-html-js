const items = ["Home", "About us", "Support", "Products"];
const container = document.getElementById("container");
const menus = document.getElementById("menus");
let lists = "";
items.forEach((el, index) => {
  lists += `<li onclick=navigate(${index})>${el}</li>`;
});

menus.innerHTML = lists;

function navigate(link) {
  //   alert(items[link].replace(" ", "").toLowerCase());
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "./" + items[link].replace(" ", "").toLowerCase() + ".html",
    true
  );
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // console.log(xhr.response);
        container.innerHTML = xhr.response;
      } else {
        console.log("something went wrong");
      }
    }
  };
  xhr.send();
}
