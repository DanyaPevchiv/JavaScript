//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var a = 1;
console.log(2);
console.log(3);
while (a <= 99) {
    var i = 2;
    if (a % 2 == 0){
        a += 1;
    }
    while (a % i != 0 && i <a){
        i += 1
        if (i + 1 == a){
            console.log(a);
        }
    }
    
    a += 1;
}

/*2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.*/

function countBasketPrice(goods){
    var s = 0
    for (var good of goods){
        console.log(good.title + " стоит " + good.price);
        s += good.price;
    }
    console.log("Сумма всех товаров = "+ s)
    alert("Корзина подсчитана :)")
}
var goods = [
{
    title: "Помидоры",
    price: 105
},
{
    title: "Квас",
    price: 120
},
{
    title: "Шоколадка",
    price: 50
},
{
    title: "Мясо",
    price: 250
}
];
alert(countBasketPrice(goods))

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for (var i = 0; i <= 9;console.log(i), i ++ ){
}

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5


