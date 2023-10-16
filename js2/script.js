'use scrict';

//пункт 1
/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

/*
    let name = prompt ('Ваше имя?');
    alert('Ваше  имя ' +  name);
    console.log('Ваше имя ' + name);

    let age = +prompt ('Ваш возраст?');
    alert('Вам ' +  age + ' лет!');
    console.log('Вам ' +  age + ' лет!');

    const city = prompt ('Ваш город  проживания?');
    alert('Ваш город ' + city);
    console.log ('Ваш город '  + city);

    let phone =+prompt ('Ваш  номер  телефона?');
    alert('Ваш номер телефона ' + phone);
    console.log('Ваш  номер телефона ' + phone);

    let email = prompt ('Ваш e-mail?');
    alert('Ваш  email ' + email);
    console.log('Ваш email ' + email);

    let company = prompt ('Как называется компания, в которой  вы работаете?');
    alert('Вы работаете в ' + company);
    console.log('Вы работаете в ' + company);
    

    document.write(`Мое имя Свит. Мне 30 лет. Проживаю в Минске.Я работаю на дому. Мои контактные данные: номер телефона +375 29 3011111, e-mail: fbgfbfg-777@mail.ru.`);

    document.write ('<br/>')
*/
//пункт 2
/*Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». */
/*
x=2023;
    let birthYear = x - age;
    document.write ('Ваше  имя ' + name + ' вам ' + age + ' лет! ' + 'Вы родились в ' + birthYear + ' году');
    console.log('Ваше  имя ' + name + ' вам ' + age + ' лет!' + ' Вы родились в ' + birthYear + ' году');

    document.write ('<br/>')
*/

//пункт 3
/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме 
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 
 */

  /*
    let str = prompt ('Введите шестизначное число');
    if ((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])) {
        console.log('да,молодец');
    } else  {
        console.log ('нет');
    }
*/



//пункт 4
/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. */
/*
    let a = prompt ('введите число');
    if (a < 0) {
            console.log ('Меньше нуля');
    } else if (a > 0) { 
        console.log ('больше нуля');
    } else  { (a == 0)
    console.log ('равно ноль');
    }
    (a > 0) ? console.log ('верно') : console.log ('неверно');
*/


 //пункт 5
 /*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. */
/*

        a=10;
    let b=2;
    let SUM= a+b;
    let SUM2= a-b;
    let SUM3= a*b;
    let SUM4= a/b;
    console.log (SUM);
    console.log (SUM2);
    console.log (SUM3);
    console.log (SUM4);

    if (SUM > 1) {
        console.log (SUM**2);
    }
*/

 //пункт 6
 /*Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. */
/*
    if (a > 2 && a < 11) {
        console.log ('ВЕРНО');
    } else {(a >= 11 && a <= 2)
        console.log ('НЕ ВЕРНО');
    }
    
    if (b >= 6 && b < 14) {
        console.log (' ВЕРНО');
    } else { (b < 6 && b >= 14)
        console.log ('НЕ ВЕРНО');
    }
*/

 //пункт 7
 /*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */

/*
    let n = 30;
    if (n >= 0 && 15 >=n) {
        console.log ('1 четверть');
    }else  if (n > 15 && 30 >= n) {
        console.log ('2 четверть');
    }else  if (n > 30 && 45 >= n) {
        console.log ('3 четверть');
    } else { (n > 45 && 59 >=n)
        console.log ('4 четверть');
    }
*/


//пункт 8
/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). */

    let day= prompt('Введите число от 0 до 31, включительно, и узнаете декаду месяца');
    if ( day >=0 && day <= 10) {
        console.log ('1 декада');
    } else if (day > 10 && day <= 20) {
        console.log ('2 декада');
    } else { (day > 20 && day <= 31)
        console.log ('3 декада');
    }


//пункт 9
/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. */
/*

let days = + prompt('Введите количество дней','521');
let daysToYear = days/365;
let daysToMonth = days/31;
let daysToWeek = days/7;
let daysToHour = days*24;
let hourToMinute = daysToHour*60;
let minuteToSecond = hourToMinute*60;
document.write (`<br>Введенное число ` + days + `<br>`);

    if (daysToYear < 1 && daysToMonth < 1 && daysToWeek < 1) {
        document.write (`<br> Введенное количество дней меньше года, месяца, недели и соответствует ${daysToHour.toFixed(2)} часам, ${hourToMinute.toFixed(2)} минутам, ${minuteToSecond.toFixed(2)} секундам. <br><br>`);
    } else if (daysToYear < 1 && daysToMonth < 1 && daysToWeek >= 1) {
        document.write (`<br> Введенное количество дней меньше года и месяца. Оно соответствует ${daysToWeek.toFixed(2)} недели/неделе/неделям, ${daysToHour.toFixed(2)} часам, ${hourToMinute.toFixed(2)} минутам, ${minuteToSecond.toFixed(2)} секундам. <br><br>`);
    } else if (daysToYear < 1 && daysToMonth >= 1 && daysToWeek > 1) {
        document.write (`<br> Введенное количество дней меньше года. Оно соответствует ${daysToMonth.toFixed(2)} месяца/месяцу/месяцам, ${daysToWeek.toFixed(2)} недели/неделе/неделям, ${daysToHour.toFixed(2)} часам, ${hourToMinute.toFixed(2)} минутам, ${minuteToSecond.toFixed(2)} секундам. <br><br>`);
    } else if (daysToYear > 1) {
        document.write (`<br> Введенное количество дней соответствует ${daysToYear.toFixed(2)} года/году/годам, ${daysToMonth.toFixed(2)} месяца/месяцу/месяцам, ${daysToWeek.toFixed(2)} недели/неделе/неделям, ${daysToHour.toFixed(2)} часам, ${hourToMinute.toFixed(2)} минутам, ${minuteToSecond.toFixed(2)} секундам. <br><br>`);
    } else {
        document.write (`Введено неправильное число`);
    };


*/

//пункт 10
/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */

    day = prompt ('Введите число до 365 и узнаете какой это месяц');
    let months = 365/12/30.5*day;
    if ( months == 1 && months <= 31) {
        console.log ('Январь' );
    } else if (months > 31 && months <= 59) {
        console.log ('Февраль');
    } else if (months >59 && months <= 90) {
        console.log ('Март');
    } else if (months > 59 && months <= 120) {
        console.log ('Апрель');
    } else if (months > 120  && months <= 151) {
        console.log ('Май');
    } else if  (months > 151 && months <= 181) {
        console.log ('Июнь');
    } else if  (months > 181 && months <= 212) {
        console.log ('Июль');
    } else if  (months > 212 && months <= 243) {
        console.log ('Август');
    } else if  (months > 243 && months <= 273) {
        console.log ('Сентябрь');
    } else if  (months > 273 && months <= 304) {
        console.log ('Октябрь');
    } else if (months >304 && months <= 334) {
        console.log ('Ноябрь');
    } else { (months >334 && months <= 365) 
        console.log ('Декабрь');
    } 

   if (months <= 59 && months > 334) {
        console.log ('зима');
        alert ('зима');
    } else if  (months > 59 && months <= 151) {
        console.log ('весна');
        alert ('весна');
    } else if  (months > 151 && months <= 243) {
        console.log('лето');
        alert ('лето');
    } else { (months > 243 && months <= 334) 
            console.log ('осень');
            alert ('осень');
    }
   