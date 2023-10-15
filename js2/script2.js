'use scrict';

//пункт 1
/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

    let name = prompt ('Ваше имя?');
    alert('Ваше ' + ' имя ' +  name);
    console.log('Ваше ' + ' имя ' + name);

    let age = +prompt ('Ваш возраст?');
    alert('Вам ' +  age + ' лет!');
    console.log('Вам ' +  age + ' лет!');

    const city = prompt ('Ваш город  проживания?');
    alert('Ваш город ' + city);
    console.log ('Ваш город '  + city);

    let phone =+prompt ('Ваш ' + ' номер ' + ' телефона?');
    alert('Ваш ' + ' номер ' + ' телефона ' + phone);
    console.log('Ваш ' + ' номер ' + ' телефона' + phone);

    let email = prompt ('Ваш ' + ' e-mail?');
    alert('Ваш ' + ' email ' + email);
    console.log('Ваш ' + ' email ' + email);

    let company = prompt ('Как' + ' называется ' + ' компания, ' + ' в' + ' которой ' + ' вы ' + ' работаете?');
    alert('Вы ' + ' работаете ' + '  в ' + company);
    console.log('Вы' + ' работаете '  + ' в ' + company);

    document.write('Мое имя Свит. Мне 30 лет. Проживаю в Минске.Я работаю на дому. Мои контактные данные: номер телефона +375 29 3011111, e-mail: fbgfbfg-777@mail.ru.' + "</br>");


//пункт 2
/*Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». */
/*
x=2023;
    let birthYear = x - age;
    document.write ('Ваше  имя ' + name + ' вам ' + age + ' лет! ' + 'Вы родились в ' + birthYear + ' году');
    console.log('Ваше  имя ' + name + ' вам ' + age + ' лет!' + ' Вы родились в ' + birthYear + ' году');
*/


//пункт 3
/*Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». */

  /*  
    let str = prompt ('Введите шестизначное число');
    if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
        console.log('да,молодец');
    } else  {
        console.log ('нет');
    }
   
*/


//пункт 4
/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. */
/*
    let a= prompt ('введите число');
    if (a < 0) {
            console.log ('Меньше нуля');
    } else if(a > 0) { 
        console.log ('больше нуля');
    } else   (a = 0)
    console.log ('равно ноль');

    a <0 ? console.log ('Неверно') : console.log ('Верно');
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

    if(SUM > 1) {
        console.log (SUM**2);
        //code- код
    }
    if(SUM2 > 1) {
        console.log (SUM2**2);
        //code- код
    }
    if(SUM3 > 1) {
        console.log (SUM3**2);
        //code- код
    }
    if(SUM4 > 1) {
        console.log (SUM4**2);
        //code- код
    }
*/
 //пункт 6
 /*Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. */
/*
    if (a < 11 && a > 2) {
        console.log ('ВЕРНО');
    } else {(a >= 11 && a <= 2)
        console.log ('НЕ ВЕРНО');
    }
    if (b < 6 && b >=14) {
        console.log ('НЕ ВЕРНО');
    } else { (b = 6 && b < 14)
        console.log ('ВЕРНО');
    }

*/
 //пункт 7
 /*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */
 /*
    {
    let N=7;
    if (0 <= N && N <=15) {
        console.log ('1 четверть');
    }else  if (16 <= N && N <=30) {
        console.log ('2 четверть');
    }else  if (31 <= N && N <= 45) {
        console.log ('3 четверть');
    } else { (46 <= N && N <= 59)
        console.log ('4 четверть');
    }
    }
*/

//пункт 8
/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). */
/*
    let day= prompt('Введите число от 0 до 31, включительно, и узнаете декаду месяца');
    if (0 <= day && day <= 10) {
        console.log ('1 декада');
    } else if (11 <= day && day <= 20) {
        console.log ('2 декада');
    } else { (21 <= day && day <= 31)
        console.log ('3 декада');
    }

*/
//пункт 9
/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. */


    let totalDays = +prompt(' Введите количество дней');
    let  yearsDays = totalDays / 366;
    let monthsDays =totalDays / 12;
    let weekDays = totalDays / 7;
    let hourDays = totalDays * 24;
    let minutesDays = hourDays * 60;
    let secondsDays = minutesDays * 60;

    document.write('В введенном числе - ' +  yearsDays.toFixed(2)+ ' дней в году; ' + monthsDays.toFixed(2) + ' месяцев; ' + hourDays  + ' часов; '
    + minutesDays  + ' минут; ' + secondsDays  + ' секунд.' );

    if ( totalDays < 7) {
            console.log ('меньше недели' );
        } else if (totalDays < 31) {
            console.log ('меньше месяца' );
        } else if( totalDays < 366) {
            console.log ('меньше года' );
    }



//пункт 10
/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */
/*
    day = prompt ('Введите число и узнаете какой это месяц');
    let months = 366/12;
    if (0 <= day && day<= 31) {
        console.log ('Январь' );
    } else if ((months) < day && day<= (months*2)) {
        console.log ('Февраль');
    } else if ((months*2) < day && day<= (months*3)) {
        console.log ('Март');
    } else if ((months*3) < day && day<= (months*4)) {
        console.log ('Апрель');
    } else if ((months*4) < day && day <= (months*5)) {
        console.log ('Май');
    } else if  ((months*5) < day && day <= (months*6)) {
        console.log ('Июнь');
    } else if  ((months*6) < day && day <= (months*7)) {
        console.log ('Июль');
    } else if  ((months*7) < day && day <= (months*8)) {
        console.log ('Август');
    } else if  ((months*8) < day && day <= (months*9)) {
        console.log ('Сентябрь');
    } else if  ((months*9) < day && day <= (months*10)) {
        console.log ('Октябрь');
    } else if  ((months*10) < day && day <= (months*11)) {
        console.log ('Ноябрь');
    } else if ((months*11) < day && day <= (months*12)) {
        console.log ('Декабрь');
    } 

   
    let month = prompt('Введите месяц (с большой буквы) и узнаете сезон');
    switch (month) {
        case 'Июль':
        case 'Июнь':
        case 'Август':
            console.log('лето');
            alert ('лето');
        break;
        case 'Март':
        case 'Апрель':
        case 'Май':
            console.log ('весна');
            alert ('весна');
        break;
        case 'Сентябрь':
        case 'Октябрь':
        case 'Ноябрь':
        console.log ('осень');
        alert ('осень');
        break;
        case 'Декабрь':
        case 'Январь':
        case 'Февраль':
            console.log ('зима');
            alert ('зима');
        break;
        
        }
    */