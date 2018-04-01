const Cars = (function () {
    const privateFields = new WeakMap();

    class Cars {
        constructor(name) {
            privateFields.set(this, {
                _name: name,
                _engineType: 'petrol',
                _engineName: 'ecoboost 1l'
            });
        }

        getName() {
            return privateFields.get(this)._name;
        }

        getEngineName() {
            return privateFields.get(this)._engineName;
        }

        getEngineType() {
            return privateFields.get(this)._engineType;
        }
    }

    return Cars;
}());

module.exports = Cars;

const ford = new Cars('fiesta');
console.log(ford.getName());
console.log(ford.getEngineName());
console.log(ford.getEngineType());
