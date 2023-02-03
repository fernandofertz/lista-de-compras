const addButton = document.getElementById("addButton");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

// Adicionar item à lista de compras
addButton.addEventListener("click", function() {
  // Obter valor do input
  const itemValue = itemInput.value;

  // Adicionar item à lista
  const item = document.createElement("li");
  item.innerHTML = itemValue;
  shoppingList.appendChild(item);

  // Limpar valor do input
  itemInput.value = "";

  // Adicionar funcionalidade de riscar item
  item.addEventListener("click", function() {
    item.classList.toggle("checked");
  });
});

// Carregar lista de compras salva do LocalStorage
const savedList = localStorage.getItem("shoppingList");
if (savedList) {
  shoppingList.innerHTML = savedList;
  // Adicionar funcionalidade de riscar item aos itens carregados
  const items = shoppingList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(){
        items[i].classList.toggle("checked");
      });
    }
  }
  
  // Salvar lista de compras no LocalStorage ao atualizar a página
  window.addEventListener("beforeunload", function() {
    localStorage.setItem("shoppingList", shoppingList.innerHTML);
  });
  
  const clearButton = document.getElementById("clearButton");

// Apagar lista de compras
clearButton.addEventListener("click", function() {
  shoppingList.innerHTML = "";
  localStorage.removeItem("shoppingList");
});

