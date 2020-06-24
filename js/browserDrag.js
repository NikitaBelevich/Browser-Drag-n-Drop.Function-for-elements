'use strict';

const dragElement1 = document.querySelector('.drag-element-1');
const dragElement2 = document.querySelector('.drag-element-2');
const dragElement3 = document.querySelector('.drag-element-3');
const dropElement = document.querySelector('.drop-element');


makeElementDraggable(dragElement1, 'drag-active'); // Сделали 1 элемент Drag
makeElementDraggable(dragElement2, 'drag-active'); // Сделали 2 элемент Drag
makeElementDraggable(dragElement3); // Сделали 3 элемент Drag
// Функция принимает 1 параметром DOM элемент и делает его перетаскиваемым
// Вторым параметром принимает строку, название CSS класса который следует применять когда элемент захвачен
function makeElementDraggable(dragElement, classStyle) {
    const namePrototypeDragElement = dragElement.__proto__.__proto__.constructor.name;

    try {
        // Проверяем по цепочке прототипов, является ли переданный аргумент экземпляром конструктора HTMLElement, то есть HTML узлом
        // Если это не HTML узел, тогда бросаем ошибку в консоль
        if (namePrototypeDragElement != 'HTMLElement') { 
            throw new TypeError('The argument is not a DOM node');
        }

        // Drag'n'Drop не выполнится если выскочит ошибка 
        // Элемент захвачен
        dragElement.addEventListener('dragstart', function(e) {
            // Если строка не пустая и была передана в функцию (не undefined по умолчанию)
            if (classStyle && classStyle != undefined) {
               this.classList.add(classStyle); // Тогда добавили стили для указания что Drag элемент активен
            }
            
            // Запоминаем координаты курсора при захвате
            const offsetX = e.offsetX;
            const offsetY = e.offsetY;

            // Drag элемент перемещается
            this.addEventListener('drag', function(e) {
                
            });

            // Drag элемент завершил перемещение
            this.addEventListener('dragend', function (e) {
                const pageX = e.pageX;
                const pageY = e.pageY;
                // позиционируем с учётом позции курсора при захвате
                this.style.cssText = `
                                    position: absolute;
                                    left: ${pageX - offsetX - 2}px;
                                    top: ${pageY - offsetY - 2}px;
                `;
                // Если при захвате элемента класс стилизации был добавлен элементу
                if (this.classList.contains(classStyle)) {
                    this.classList.remove(classStyle); // Тогда удаляем его и возвращаем исходный стиль
                }
            });
        });

    } catch (error) {
        console.log('catch');
        console.error(`TypeError: ${error.message}`);
    }
}


// Сделали переданный элемент принимающим
makeElementReceiving(dropElement, 'drop-active'); 

function makeElementReceiving(receivingElement, classStyle) {
    const namePrototypeDragElement = receivingElement.__proto__.__proto__.constructor.name;

    try {
        // Проверяем по цепочке прототипов, является ли переданный аргумент экземпляром конструктора HTMLElement, то есть HTML узлом
        // Если это не HTML узел, тогда бросаем ошибку в консоль
        if (namePrototypeDragElement != 'HTMLElement') { 
            throw new TypeError('The argument is not a DOM node');
        }

        // Drag'n'Drop не выполнится если выскочит ошибка
        // Drag элемент зашёл на принимающий элемент
        receivingElement.addEventListener('dragenter', function(e) {

            // Если строка не пустая и была передана в функцию (не undefined по умолчанию)
            if (classStyle && classStyle != undefined) {
                this.classList.add(classStyle); // Тогда добавили стили для указания что Drag элемент активен
            }

            // Drag элемент находится над целевым
            this.addEventListener('dragover', function(e) {
                e.preventDefault(); // Обязательный момент для работы Drop
            });

            this.addEventListener('dragleave', function(e) {

                this.classList.remove(classStyle); // Когда элемент уходит с принимающего, удаляем класс активности
            });

            this.addEventListener('drop', function (e) {
                // Делаем что-то когда положили элемент в принимающий
                if (classStyle && classStyle != undefined) {
                    this.classList.add(classStyle);
                }
            });
        });
    } catch (error) {
        console.log('catch');
        console.error(`TypeError: ${error.message}`);
    }
}

