# Browser Drag'n'Drop. Function for elements.

В качестве практики Drag'n'Drop, решил сделать функции-заготовки которые делают переданный им DOM - узел перетаскиваемым.
Решение основано на браузерном Drag'n'Drop, который многие не любят и плюются в него, и кстати на самом деле есть за что, но.... как я уже сказал это просто практика.

Имеется файл browserDrag.js, в нём находится реализация этой задумки, по факту, алгоритм Drag'n'Drop является одним единственным, меняется поведение элементов, которое нам нужно в зависимости от дизайна. Этот файл можно просто подключить к странице и в нём реализовывать свой Drag'n'Drop, или же из основного вашего main.js вызывать эти функции, я же просто сделал заготовку и привёл небольшой пример как это всё работает.

Давай уже к делу...

Даю!

1. Для начала получите DOM элемент который хотите сделать перетягиваемым (Drag).
2. Функция makeElementDraggable первым параметром принимает DOM - узел который вы хотите сделать перетаскиваемым, вторым необязательным параметром принимает строку - название класса стилей, который будет применяться к элементу когда вы его захватите. 

makeElementDraggable(DOM Node, 'drag-active'); - вызвали функцию, передали узел, ура! теперь он перетаскивается!

Вы можете сами стилизовать свои элементы при необходимых вам событиях, всё тело функции расписано комментариями.

Также в файле есть аналогичная функция makeElementReceiving, только она делает элемент принимающим, куда будет сбрасываться Drag элемент.

makeElementReceiving(dropElement, 'drop-active'); 

По сути, это всего лишь две функции, которые распространяют на переданные узлы группу событий Drag'n'Drop, одна функция даёт события и обработчики для перетаскиваемого элемента, а другая для принимающего.

### Вот список браузерных событий Drag'n'Drop:

Группа событий для перетаскиваемого элемента:
* dragstart – срабатывает, когда элемент начал перемещаться.
* dragend – сработает при окончании перетаскивания.
* drag – запускается при перемещении элемента (по типу mousemove).

Группа событий для принимающего элемента:
* dragenter – срабатывает когда drag элемент заходит на целевой.
* dragleave – срабатывает когда drag элемент не был отпущен, а покидает целевой.
* dragover – срабатывает когда drag элемент оказывается над целевым.
* drop – срабатывает когда drag элемент сброшен на целевой.
