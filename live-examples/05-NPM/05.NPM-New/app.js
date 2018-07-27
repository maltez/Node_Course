// const { cloneDeep } = require('lodash');
const event = require('./module');

event.on('Hi', (name) => {
    console.log(`Hello my dear friend ${name}`);
});
