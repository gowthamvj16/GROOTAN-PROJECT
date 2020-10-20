window.onload=function(){
const userOrder = {};

function getValues(e) {
  const elements = Array.prototype.slice.call(e.target.elements);
  elements.forEach((el) => {
    if (el.type !== "submit") {
      userOrder[el.name] = el.value;
    }
  });
  localStorage.setItem('userOrder', JSON.stringify(userOrder));
}  

document.getElementById("grootan").addEventListener("submit", getValues);
}