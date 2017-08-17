/*
1.	Dodaj kilka elementów button do strony. Nadaj im klasę button.

2.	Za pomocą pętli for przejdź przez wszystkie te elementy
3.	i wyświetl tekst zawarty w każdym z nich za pomocą alert().




4.	W pliku index.html dodaj kilka elementów <button> na stronie, zgodnie z powyższym schematem.

5.	Użyj metody document.getElementsByClassName aby pobrać elementy ze strony i przypisz je do zmiennej.

6.	Stwórz pętlę for, która wykona się tyle razy, ile jest elementów na stronie 
(przyda ci się do tego właściwość length.)

7.	Wewnątrz pętli wykonaj instrukcję, która wyświetli tekst zawarty w każdym z tych buttonów 
(użyj właściwości innerText).

8.	Stwórz nowe repozytorium i wyślij tam swoje zadanie, link do niego wklej poniżej
pamiętaj o udostępnieniu repozytorium swojemu mentorowi.
*/

var buttonClassElements = document.getElementsByClassName('button');
var buttonClassElementsNumber = buttonClassElements.length;
	for (i = 0; i < buttonClassElementsNumber; i++) {
		var buttonClassElementsText = buttonClassElements[i].innerText;
		console.log("Treść w CLASS .button: " + buttonClassElementsText);
	}
