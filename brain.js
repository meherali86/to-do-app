let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");


ourForm.addEventListener("submit", (e) => {
    e.preventDefault();

    createItem(ourField.value)
})

function createItem(x){
    let listHTML = `<li class="list-group-item">${x} <button class = "btn" onclick = "deleteItemFromList(this)">❎</button></li>`;
    ourList.insertAdjacentHTML("beforeend", listHTML);
    ourField.value = "";
    ourField.focus();
}

function deleteItemFromList(deleleItem){
    deleleItem.parentElement.remove();
}
