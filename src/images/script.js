"use strict";
const app = document.getElementById("app");

function createEl(tag, className, text) {
  let el = document.createElement(tag);
  text ? (el.innerText = text) : null;

  if (className) {
    let arr = className.split(" "); //Метод split осуществляет разбиение строки в массив по указанному разделителю, у нас пробел.У меня на один тэг бывает по 2 класса, их я пишу через пробел
    // console.log(arr);
    for (let elem of arr) {
      //перебираю классы в массиве из классов
      el.classList.add(elem); // присваиваю класс своему элементу
    }
  }
  return el;
}

const navbar = createEl("div", "navbar");
app.append(navbar);
const container = createEl("div", "container navbar__container");
navbar.append(container);
const burger = createEl("div","header__burger");
burger.id="burger";
const burgerLine1=createEl("span", "burger__line burger__line_first" )
const burgerLine2=createEl("span", "burger__line burger__line_second" )
const burgerLine3=createEl("span", "burger__line burger__line_third" )

container.prepend(burger);
burger.append(burgerLine1, burgerLine2, burgerLine3);
const svgWildb = createEl("img", "navbar__logo");
// svgWildb.src = "./images/src/wb_logo_cm2.png";
svgWildb.src = "./images/src/wb_logo_cm2.png";
container.append(svgWildb);

const inputSearch = createEl("input", "navbar__input");
inputSearch.placeholder = "Я ищу...";
inputSearch.id = "elastic";
container.append(inputSearch);
const wrapperCart = createEl("div", "navbar__cart");
container.append(wrapperCart);
const buttonCart = createEl("button", "navbar__cart-btn");
buttonCart.dataset.path = "one"; //Чтобы добавить дата-атрибут к элементу, нужно добавить новое поле в объект dataset. Название поля так же должно быть без префикса data-, браузер автоматически подставит его.
wrapperCart.append(buttonCart);
const imgCart = createEl("img", "navbar__shop");
imgCart.src = "./images/src/shoppingcart.svg";
buttonCart.append(imgCart);
const iconLoop = createEl("img", "navbar__loop");
iconLoop.src = "./images/src/search-icon.png";
const iconLoopAct = createEl("img", "navbar__loopAct");
iconLoopAct.src = "./images/src/search-icon.png";
container.append(iconLoop, iconLoopAct);

// !!!!!!!!! Это пример списка вместо карточек для поиска, нужно будет вставить карточки товарров:
const ul = createEl("ul", "elastic");
app.append(ul);
const li = createEl("li", "card__li");
const li2 = createEl("li", "card__li2");
const li3 = createEl("li", "card__li3");
li.innerText = "lorem";
li2.innerText = "toren";
li3.innerText = "coren";
ul.append(li, li2, li3);

//!!!!!!!!! ф-ция ПОИСКА в поисковой строке:!!!!!!!!!!!!!!
// при любом изм-и (oninput) инпута, вызыв ф-ю (аноним), получ значение, которое вводит пол-ль в инпут (this.value), обрезаю все пробелы, пол-ль м вводить с пробелами (this.value.trim())  и помещаю его в переменную (let val):
document.querySelector("#elastic").oninput = function search () {
  let val = this.value.trim();
  let elasticItem = document.querySelectorAll(".elastic li"); //получаем элементы списка
  if (val != "") {
    //если поле инпут не пустое, пол-ль что-то ввел в поиск, то:
    elasticItem.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        //.search(val)-это спец ф-ция , котоая ищет подстроку в строке и проверяет, есть ли там строка.Если да, то возвратит номер строки, если нет, то минус 1
        //    если не нашло такой строки, то я его скрываю:
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    //если пустое пол-ль ничего не ввел в поиск, то удаляю класс hide:
    elasticItem.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};

iconLoop.addEventListener("click", function (event) {
  inputSearch.display="block";
  iconLoop.display="none";
});

// !!!!!!!!!!!! 2 СПОСОБ ПОИСКА ТОВАРОВ:
// // ################################################################################################################################################
// // SEARCH START

// input.addEventListener('input', ({ target }) => {                                       // фильтр товаров
//     let tempArray = productName.filter((el) =>
//         (el.name + el.cost)
//             .toLowerCase()
//             .includes(target.value)
//     );
//     render(tempArray);
// });

// // SEARCH END