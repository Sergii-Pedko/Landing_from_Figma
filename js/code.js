(function () { // Функция без заданных - названия ф-ции и аргумента - 
               //САМОРАСКРЫВЮЩИЕСЯ Ф-ЦИЯ 

    // Зададим ф-ции КОНСТАНТУ с ИМЕНЕМ header 
    //и присвоим ей элемент с заданным селектором класса ('.header')         
	const header = document.querySelector('.header');
	// Метод document.querySelector - ищет и возвращает первый найденный
	// элемент с заданным селектором ('.header')

	window.onscroll = () => {// При скролинге страници мы будем выполнять
	// некую стрелочную ф-цию () => которая будет выполнять проверку 

		if (window.pageYOffset > 50) {// Если мы проскролили какое-то
		                              // кол-во пикселей > 50px; 

			header.classList.add('header_active');
            // то к слассу .header мы добавляем класс .header_active 
            // у которого в CSS background: #0E1D28;

		} else {header.classList.remove('header_active');
          //а если мы не скролим - то сласс .header_active удаляется
        }
	};
}());
//_____________________________________________________________________

// Cначала обратимся к Бургеру - и потом подвесим к нему 
//                                                  ОБРАБОТЧИК СОБЫТИЯ
// Мы хотим, чтобы при клике на БУРГЕР - 
//выезжала синяя панель .header__nav-active{transform: translateX(0%);}
//которая изначально полностью сдвинута вправо - за пределы экрана
//.header_nav {transform: translateX(100%);}

(function () {// Функция без заданных - названия ф-ции и аргумента - 
                //САМОРАСКРЫВЮЩИЕСЯ Ф-ЦИЯ 

// Зададим ф-ции КОНСТАНТУ с ИМЕНЕМ burgerItem 
//присвоим ей элемент с заданным селектором класса ('.header__burger')                                                      
    const burgerItem = document.querySelector('.header__burger');

    // Метод document.querySelector - ищет и возвращает первый найденный
    // элемент с заданным селектором ('.header__burger') - 
    // т.е. - 3-Линии, на которые будем кликать 

    const menu = document.querySelector('.header_nav');
// Константе menu - присвоим ей элемент с заданным селектором класса
// ('.header_nave') - при помощи метода document.querySelector
// т.е. - Синюю панель - сдвинутую с экрана ВПРАВО

    const menuCloseItem = document.querySelector('.header__nav-close');
// Конст menuCloseItemu - присвоим ей элемент с заданным селектором класса
// ('.header__nav-close') - при помощи метода document.querySelector
// т.е. - КРЕСТИК на Синей панели


//Теперь Бургеру (3-Линии) - добавляем Обработчик События - КЛИК МЫШИ
// при помощи метода addEventListener('click',
// и внутренней стрелочной ф-ции () => которая к классу .header_nav

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
// добавит класс .header_active 
// у которого в CSS transform:translateX(0%); - т.е. появится на экране


//Теперь КРЕСТИКУ - добавляем Обработчик События - КЛИК МЫШИ
// при помощи метода addEventListener('click',
// и внутренней стрелочной ф-ции () => которая из класса .header_nav

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });

// удаляет класс .header_active 
// у которого в CSS transform:translateX(0%); - т.е. синяя панель
// снова сдвинется назад за пределы экрана - ведь у нее изначально
// в CSS transform:translateX(100%);
}());
//____________________________________________________________________

