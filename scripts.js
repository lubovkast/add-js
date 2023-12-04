"use strict";

let html1 = document.querySelector(`html`); // получаем доступ ко всем св-вам, которые есть у этого элемента (см. в консоле)
html1.setAttribute(`lang`, `en`);// добавляем в html


let metaUtf8 = document.createElement('meta'); //создаем meta
metaUtf8.setAttribute('charset', 'UTF-8') // ПЕРВЫЙ ПАРАМЕТР-ИМЯ, ВТОРОЙ -ЕГО ЗНАЧЕНИЕ
console.log (metaUtf8);
document.head.appendChild(metaUtf8); // вставляем в html document
//<meta http-equiv="X-UA-Compatible" content="IE=edge">
let metaHttp = document.createElement(`meta`); // создали metaHttp
metaHttp.setAttribute(`http-equiv`, `X-UA-Compatible`);// вписали в него текст
metaHttp.setAttribute(`content`, `IE=edge`);// вписали в него текст
console.log (metaHttp);
document.head.appendChild(metaHttp);

//<meta name="viewport" content="width=device-width, initial-scale=1.0">
let metaName = document.createElement('meta');
metaName.setAttribute(`name`, 'viewport')
metaName.setAttribute(`content`, `width=device-width, initial-scale=1.0`);
document.head.appendChild(metaName);

let title = document.createElement('title');// создали title
title.innerHTML = 'Call_to_Action'; // вписали в него текст
document.head.appendChild(title); // вставляем в html document

// body----------------------------------------------------------------------------
// первый вариант добавления стилей

let div10 = document.createElement('div');
div10.classList.add('main-block');
document.body.appendChild(div10); 
div10.style.cssText = 'margin-bottom: 139px;';

let div1 = document.createElement('div');
div1.classList.add('header-block');
document.body.appendChild(div1); 
div1.style.cssText = 'display: flex; flex-direction: column; justify-content: center; text-align: center; margin-top: 150px; gap: 20px;';


let h1 =  document.createElement('h1');
h1.innerHTML = 'Choose Your Option';// добавляем текст
document.body.appendChild(h1); 
h1.style.cssText = 'font-family: Arvo, san-serif; font-weight: normal; font-size: 45px; line-height: 45px; letter-spacing: 2px;';

let p1 =  document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';// добавляем текст
document.body.appendChild(p1); 
p1.style.cssText = 'font-family: Montserrat, san-serif; font-weight: normal; font-size: 21px; line-height: 25px; opacity: 0.50; color: #666;';

div1.appendChild(h1);
div1.appendChild(p1);

// второй вариант добавления стилей будет в <style></style>

let div2 = document.createElement('div');
div2.classList.add('box_section');
document.body.appendChild(div2); 


let div3 = document.createElement('div');
div3.classList.add('box_section1');
document.body.appendChild(div3); 

let div4 = document.createElement('div');
div4.classList.add('box_section1');
document.body.appendChild(div4); 

div2.appendChild(div3);
div2.appendChild(div4);


// div3

let h2 =  document.createElement('h2');
h2.innerHTML = 'FREELANCER';// добавляем текст
h2.classList.add('box_title1'); // добавляем класс
document.body.appendChild(h2); 

let p2 =  document.createElement('p');
p2.innerHTML = 'Initially <br> designed to';// добавляем текст
p2.classList.add('box_title2');
document.body.appendChild(p2); 

let p3 =  document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing';// добавляем текст
p3.classList.add('box_title3');// добавляем класс
document.body.appendChild(p3); 
//------------button
let button1 =  document.createElement('button');
button1.classList.add('btn');// добавляем класс
document.body.appendChild(button1); 

let p6 =  document.createElement('p');
p6.innerHTML = 'START HERE';// добавляем текст
p6.classList.add('btn_text');// добавляем класс
document.body.appendChild(p6); 

// третий вид добавления стилей
let style = document.createElement('style');
style.innerHTML = `
  .btn_text {
    font-family: 'Montserrat', san-serif;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 3px;
    text-align: center;
  }
`;
document.head.appendChild(style);



button1.appendChild(p6);
//--------------------

div3.appendChild(h2);
div3.appendChild(p2);
div3.appendChild(p3);
div3.appendChild(button1);


// div4

let h3 =  document.createElement('h3');
h3.innerHTML = 'STUDIO';// добавляем текст
h3.classList.add('box_title1');
document.body.appendChild(h3); 

let p4 =  document.createElement('p');
p4.innerHTML = 'Initially  <br> designed to';// добавляем текст
p4.classList.add('box_title2');// добавляем класс
document.body.appendChild(p4); 

let p5 =  document.createElement('p');
p5.innerHTML = 'But I must explain to you how all this <br> mistaken idea of denouncing';// добавляем текст
p5.classList.add('box_title3');// добавляем класс
document.body.appendChild(p5); 

//------------button
let button2 =  document.createElement('button');
button2.classList.add('btn');// добавляем класс
document.body.appendChild(button2); // добавляем в body

let p7 =  document.createElement('p');
p7.innerHTML = 'START HERE';// добавляем текст
p7.classList.add('btn_text');// добавляем класс
document.body.appendChild(p7); 


button2.appendChild(p7);
//--------------------

div4.appendChild(h3);
div4.appendChild(p4);
div4.appendChild(p5);
div4.appendChild(button2);





div10.appendChild(div1);
div10.appendChild(div2);