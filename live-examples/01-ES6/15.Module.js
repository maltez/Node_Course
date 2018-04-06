const Module = (function(){
    const publicField = 2.7;
    const privateField = 'Top secret';

    const privateFunction = () => {
        console.log('This is private function');
    }

    const publicFunction = () => {
        console.log('This is the public');
        console.log('I invoke private function');
        privateFunction();
        console.log('I use private field');
        console.log(privateField);
    }


    return {
        publicField,
        publicFunction
    }
})();

const { publicField, publicFunction} = Module;
publicFunction();