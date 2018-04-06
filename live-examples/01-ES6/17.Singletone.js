const Singleton = (function(){
    let instance;

    class Unicum {
        constructor(name, secondName){
            this.name = name;
            this.secondName = secondName;
        }
    }

    return (name, secondName) => {
        if (!instance) {
            instance = new Unicum(name, secondName);
        }

        return instance;
    };
})();

let unicum = Singleton('Basil', 'Warrior');
unicum = Singleton('Nick', 'Lototskiy');

console.log(unicum.name);



