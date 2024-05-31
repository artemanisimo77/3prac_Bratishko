var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(this)
    var svg = this.children[0];
    svg.classList.toggle("svg__active");

    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 130 + "px";
      panel.style.border = "1px solid #D3D3D3";
    } 
  });
}


// filter

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('.elem_filter_select');
  const catalogContent = document.querySelector('.join');

  // Store the initial order of items
  const initialItems = Array.from(catalogContent.querySelectorAll('.filtered_item'));

  selectElement.addEventListener('change', (event) => {
      if (event.target.value === 'price') {
          sortItemsByPrice();
      } else if (event.target.value === '') {
          resetItems();
      }
  });

  function sortItemsByPrice() {
      const items = Array.from(catalogContent.querySelectorAll('.filtered_item'));
      items.sort((b, a) => parseInt(a.getAttribute('data-finished')) - parseInt(b.getAttribute('data-finished')));

      // Remove existing items
      catalogContent.innerHTML = '';

      // Append sorted items
      items.forEach(item => catalogContent.appendChild(item));
  }

  function resetItems() {
      // Clear the current items
      catalogContent.innerHTML = '';

      // Append items in their original order
      initialItems.forEach(item => catalogContent.appendChild(item));
  }
});


//tabs

document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки вкладок и все содержимые вкладок
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Убираем класс активной кнопки у всех кнопок
          tabButtons.forEach(btn => btn.classList.remove('tab-btn-active'));
          // Добавляем класс активной кнопки текущей кнопке
          this.classList.add('tab-btn-active');

          // Получаем target id текущей кнопки
          const targetId = this.getAttribute('data-target-id');

          // Убираем класс показа вкладки у всех вкладок
          tabPanes.forEach(pane => pane.classList.remove('tab-pane-show'));

          // Добавляем класс показа соответствующей вкладке
          document.querySelector(`.tab-pane[data-id="${targetId}"]`).classList.add('tab-pane-show');
      });
  });
});

var close_btn = document.getElementById("no_btn") 
var cross = document.getElementById("close_btn")
var modal = document.querySelector(".modal-box")

var open_btn = document.querySelectorAll(".open-btn")


close_btn.onclick = function(){
  modal.classList.remove("modal-box_active")
}

cross.onclick = function(){
  modal.classList.remove("modal-box_active")
}

open_btn.forEach((btn) => {
  btn.onclick = function(){
    modal.classList.add("modal-box_active")
  }
})



const menuButton = document.querySelector('.burgerButton')
const burgerMenu = document.querySelector('.burgerMenu')
console.log(menuButton)
menuButton.addEventListener('click' , () => {
  burgerMenu.classList.toggle('burgerMenu_acitve')
  menuButton.classList.toggle('burgerButton_active')
})