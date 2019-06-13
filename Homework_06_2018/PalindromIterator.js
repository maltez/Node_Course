'use strict';

class IterableObject {
    constructor(ArrayInput){
        this.ArrayInput = ArrayInput;
        this.IsPalindroms = false;
    }
    //  Функция проверки на палиндромность
    IsPalindrom(strInput) {

    let strLen = strInput.length,
        strReverse = strInput.split('').reverse().join('');
    if (strReverse == strInput) {
        return true;
    } else {
        return false;
    }

}

    [Symbol.iterator]() {
        let i = 0;
        return {
            next:() =>{

            let IsPalindr = false;

            if(i < this.ArrayInput.length)
        {
            IsPalindr =  this.IsPalindrom(this.ArrayInput[i]);

            if(!IsPalindr)
            {
                this.ArrayInput[i] = null;
            }
        }
            return i < this.ArrayInput.length ? { value: this.ArrayInput[i++], done: false} :
                { value : undefined, done: true}
        }
    }
    }
}
//  опытный массив
let ArrayNew = ['шабаш','лодка', 'казак', 'футбол', 'доход'];
// массив в котором будем хранить палиндромы
let ArrayPalindr = [];

for (let z of new IterableObject(ArrayNew)){
    if(z !== null)
    {
        ArrayPalindr.push(z);
    }
}
//  выводим палиндромы на печать
for(let i=0;i<ArrayPalindr.length;i++)
{
   console.log(ArrayPalindr[i]);
}
