const cards = document.createElement('div');//общий контейнер
cards.className = 'container';
document.body.append(cards);

const title = document.createElement('h2');//заголовок
title.className= 'container-title';
title.innerHTML = 'Хиты продаж';
cards.append(title);

const cardsRecommendations = document.createElement('div');//контейнер с товарами
cardsRecommendations.className = 'container-recommendations';
cards.append(cardsRecommendations);

const cardsRecommendation = document.createElement('div');
cardsRecommendation.className = 'container-recommendation';
cardsRecommendations.append(cardsRecommendation);

for(let i = 0; i < 15; i++){
    const card = document.createElement('div');//полноя карточка товара
    card.className = 'recommendations-card';
    card.id = 'recommendations-card';
    cardsRecommendation.append(card);

    const cardAll = document.createElement('div');//полноя карточка товара
    cardAll.className = 'recommendations-cards';
    cardAll.id = 'recommendations-cards';
    card.append(cardAll);

    const cardProduct = document.createElement('div');//карточка товара без корзины
    cardProduct.className = 'recommendations-card-product';
    cardProduct.id = 'recommendations-card-product';
    cardAll.append(cardProduct);

    const cardImages = document.createElement('div');//фото товара div
    cardImages.className = 'recommendations-card-product__images';
    cardImages.id = 'recommendations-card-product__images';
    cardProduct.append(cardImages);

    const cardImage = document.createElement('img');//фото товара img
    cardImage.className = 'recommendations-card-product__image';
    cardImage.id = 'recommendations-card-product__image';
    cardProduct.append(cardImage);

    const cardInfo = document.createElement('div');//информация о товаре
    cardInfo.className = 'recommendations-card-product__info';
    cardInfo.id = 'recommendations-card-product__info';
    cardProduct.append(cardInfo);

    const cardPrice = document.createElement('div');//общий блок цены товара
    cardPrice.className = 'recommendations-card-product__info-price';
    cardPrice.id = 'recommendations-card-product__info-price';
    cardInfo.append(cardPrice);

    const cardPriceDiscount = document.createElement('div');//цена товара со скидкой
    cardPriceDiscount.className = 'recommendations-card-product__info-price-discount';
    cardPriceDiscount.id = 'recommendations-card-product__info-price-discount';
    cardPrice.append(cardPriceDiscount);

    const cardPricePercent = document.createElement('div');//процент скидки
    cardPricePercent.className = 'recommendations-card-product__info-price-percent';
    cardPricePercent.id = 'recommendations-card-product__info-price-percent';
    cardPricePercent.innerHTML = `- ${Math.floor(Math.random() * 50)} %`
    cardPrice.append(cardPricePercent);

    const cardPriceFull = document.createElement('div');//цена товара без скидки
    cardPriceFull.className = 'recommendations-card-product__info-price-full';
    cardPriceFull.id = 'recommendations-card-product__info-price-full';
    cardPrice.append(cardPriceFull);

    const cardName = document.createElement('div');//наименование товара
    cardName.className = 'recommendations-card-product__info-name';
    cardName.id = 'recommendations-card-product__info-name';
    cardInfo.append(cardName);

    const basket = document.createElement('button');//корзина
    basket.className = 'recommendations-card-basket';
    basket.id = 'recommendations-card-basket';
    basket.type = 'button';
    basket.innerHTML = 'В корзину';
    card.append(basket);

//вывод картинки, цены, наименования товара
async function product() {
    let response = await fetch('https://63c6c9904ebaa802854dcc32.mockapi.io/product-card');
    let products = await response.json();
    console.log(products);

    cardImage.src = products[i].image + `?random = ${[i]}`;
    cardImages.append(cardImage);
    cardPriceFull.innerHTML = products[i].price + ` р.`;
    cardPrice.append(cardPriceFull);
    cardName.innerHTML = products[i].name;
    cardInfo.append(cardName);
};
product();

cardPriceDiscount.innerHTML = `${(cardPriceFull-(cardPriceFull*(cardPriceDiscount/100)))} р.`;
}