# Makarov Vladimir
***
## Contacts
***
*	Telegram: @Vladimir_Makarof
*	Email: stan13.09@mail.ru
*	Skype: Vladimir_Makarof

## About Me
***
Currently, I have received a second higher education in the specialty of a web developer at ITMO University. I want to become a Fullstack Developer. I have several educational projects. I love to learn from this and study on my own, that’s why I’m currently studying online to achive my goal of becoming a pro.

## Soft Skills
***
*	Communication. Effective communication is key both at work and at home.
*	Willingness to learn. Modern technologies are developing rapidly. I need to learn new things to keep abreast of things happening in the world of the web.
*	Creativity. Creating new visions is exciting and interesting for me.
*	Problem solving. I quickly admit my own and others' mistakes and strive to correct them.
*	Teamwork. For me in teamwork, it is important to listen and hear the team members for the success of all.
*	Open-mindedness. The ability to look at problems as an opportunity for development.

## Tech Skills
***
`General:`
*	HTML5
*	CSS 
*	Basic JavaScript 
*	Bootstrap 4 / Flexbox
*	BEM
*	npm
*	Git / GitHub


`Some Concepts:`

*	OOP (Java / C# / PHP)
*	Databases (MySQL)

## Code Examples
### HTML
```
<section class="catalog">
		<div class="wrapper">
			<div class="grid">
				<div class="grid-item grid-item-title">
					<h2 class="title-h2">Специальные предложения</h2>
				</div>
				<div class="grid-item grid-item-img">
					<img src="img/car.svg" alt="Delivery">
				</div>
				<div class="grid-item grid-item-catalog">
					<div class="bg-white">
						<div class="thumb">
							<img src="img/chair.png" alt="chair">
							<p class="grid-titile">Парикмахерское кресло «Норм» гидравлическое</p>
							<p class="grid-price">9 900 ₽ </p>
							<a class="grid-btn" href="#">Купить</a>
						</div>
					</div>
				</div>
				<div class="grid-item grid-item-catalog">
					<div class="bg-white">
						<div class="thumb">
							<img src="img/chair.png" alt="chair">
							<p class="grid-titile">Парикмахерское кресло «Норм» гидравлическое</p>
							<p class="grid-price">9 900 ₽ </p>
							<a class="grid-btn" href="#">Купить</a>
						</div>
					</div>
				</div>
				<div class="grid-item grid-item-catalog">
					<div class="bg-white">
						<div class="thumb">
							<img src="img/chair.png" alt="chair">
							<p class="grid-titile">Парикмахерское кресло «Норм» гидравлическое</p>
							<p class="grid-price">9 900 ₽ </p>
							<a class="grid-btn" href="#">Купить</a>
						</div>
					</div>
				</div>
				<div class="grid-item grid-item-catalog">
					<div class="bg-white">
						<div class="thumb">
							<img src="img/chair.png" alt="chair">
							<p class="grid-titile">Парикмахерское кресло «Норм» гидравлическое</p>
							<p class="grid-price">9 900 ₽ </p>
							<a class="grid-btn" href="#">Купить</a>
						</div>
					</div>
				</div>
				<div class="grid-item grid-item-left">
					<div class="bg-green">
						<div class="bg-green-item">
							<h3 class="title-h3">Получайте бонусы и подарки</h3>
							<p>Каждый месяц разыгрываем <br> 10 000 рублей для наших клиентов</p>
							<input type="email" placeholder="Введите e-mail">
						</div>
						
							<img class="bg-green-img" src="img/envelope.svg" alt="envelope">
						
					</div>
				</div>
				<div class="grid-item grid-item-right">
					<div class="bg-green">
						<div class="bg-green-item">
							<h3 class="title-h3">Заходите к нам</h3>
							<p>Более 300 магазинов <br>по всей России</p>
							<a class="btn" href="#">Карта магазинов</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<footer>
		<div class="bg-white">
			<div class="wrapper">
				<div class="footer-top">
					<div class="footer-top-item">
						<ul class="social">
							<li class="social-item"><a class="social-link social-youtube" href="" target="_blank"></a></li>
							<li class="social-item"><a class="social-link social-vk" href="" target="_blank"></a></li>
							<li class="social-item"><a class="social-link social-facebook" href="" target="_blank"></a></li>
							<li class="social-item"><a class="social-link social-instagram" href="" target="_blank"></a></li>
						</ul>
					</div>
					<div class="footer-info">
						<span>198555, Невский пр. 140, офис 140</span>
						<span>8 (812) 123-45-67</span>
						<button type="button">Обратный звонок </button>
						</div>
		</div>
					</div>
					</div>
					<div class="wrapper">
						<div class="footer-bottom">
						<p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</p>
						<a href="#">Политика конфиденциальности</a>
					    </div>
					</div>
	</footer>
```
### CSS

```
.body{
	background: #EFEFEF;
	color: #333333;
	font-size: 14px;
	font-family: 'Roboto', sans-serif;
}
.nav{
	display: flex;
	justify-content: center;
	list-style-type: none;
	padding: 4px 0;
}
.wrapper{
	max-width: 1110px;
	padding-right: 15px;
	padding-left: 15px;
	margin: 0 auto;
}
.nav>li{
	margin-left: 15px;
	margin-right: 15px;
}
.nav>li>a{
	text-decoration: none;
	color: #333333;
}
.header{
	background-color: #fff;
	padding-top: 10px;
}
.header-top{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0 12px 0;
}
.logo{
	color: #66C05D;
	font-size: 36px;
	font-weight: 700;
	display: flex;
	align-items: center;
	letter-spacing: 4px;
}
.logo-img{
	display: block;
	height: 80px;
	width: 80px;
	background-image: url(../img/logo.svg);
	margin-right: 20px;
}
.header-info span{
	font-style: 16px;
}
.header-info button{
	font-style: 14px;
	border-radius: 20px;
	border: 2px solid #66C05D;
	padding: 10px 25px;
	background-color: transparent;
	margin-left: 36px;
	transition: 0.2s ease;
	cursor: pointer;
}
.header-info button:hover{
	background-color: #66C05D;
}
.header-bottom{
	padding: 20px 0 27px 0;
}
.header-bottom .nav{
font-size: 16PX;
margin: 0;
}
.header-bottom .nav>li{
	margin-left: 20px;
	margin-right: 20px;
}
hr{
	border: none;
	background-color: #66C05D;
	height: 1px; 
}
.banner{
	background-image: url(../img/bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	padding-top: 159px;
	padding-bottom: 204px;
	color: #fff;
}
.title{
	font-size: 48px;
	font-weight: 700;
	margin-bottom: 42px;
}
```
### JavaScript

```
"use strict";

const isNumber = function (str) {
	if (isNaN(+str) || str === "" || (str !== "0" && +str === 0)) return false;
	else return true;
};

const guessNumber = function () {
	do {
		var guess = prompt("Ваша попытка:");
		if (guess !== null && !isNumber(guess)) alert("Введи число!");
	} while (!isNumber(guess) && guess !== null);

	return guess;
}

const play = function() {
	do {
		var userGuess = guessNumber();
		if (userGuess !== null) {
			if (parseInt(userGuess) > correctNumber) alert("Меньше!");
			else if (parseInt(userGuess) < correctNumber) alert("Больше!");
			else if (parseInt(userGuess) === correctNumber) alert ("Правильно!");
		}
	} while (parseInt(userGuess) !== correctNumber && userGuess !== null);
}

var correctNumber = Math.floor(Math.random() * 1000);
alert("Поиграем? Угадайте число от 0 до 1000!");
console.log(correctNumber);
play();
```
## Experience
***
I’ve several educational projects. 
<code>[chairs-shop-online](https://vladimirmakarof.github.io/chairs-shop-online/ "Интернет магазин стульев")
</code>
<code>[ See_Food](https://vladimirmakarof.github.io/Sea_Food/ "Интернет магазин рыбные продукты")
</code>
<code>[ Carshering](https://vladimirmakarof.github.io/Carshering/ "Каршеринг в Киеве")
</code>

## Education
***
*	ITMO University (St. Petersburg, Russia)
*	GeekBrain 
*	GloCademy marathones
*	The Rolling Scopes School (currently)
*	FreeCodeCamp / HTMLAcademy / Codecademy
*	Youtube

## English
***
Level: B1 (Intermediate)
I studied English at school, after I entered the university there I also continued to study English. After university, 6 years ago I finished 2 levels at a language school. I use English in my international travels for communication with people. I am currently studying at a language school in St. Petersburg.