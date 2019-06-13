//  Create private member in class using Symbol primitive.


//  новый класс
class Exampleclass{

    constructor()
    {
        //  создаём в конструкторе переменную symbol - недоступную снаружи
        let symbol = Symbol('secret');
        console.log(symbol);
    }
}

//  создаём новый экземпляр класса
let exam = new Exampleclass();


//  проверяем на доступность
if(exam.symbol !== undefined)
{
    console.log('не получилось!');
}
else
{
    console.log('типа правильно!');
}
