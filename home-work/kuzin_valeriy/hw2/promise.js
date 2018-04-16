
function getTask(task) {
  console.log('Start project');

  let promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
      Math.random() > 0.5 ? resolve({}) : reject('Task didn\'t get!');
    }, 1000);
  });
  return promise
}

function researchTask() {

  console.log('Start researching!');


  return new Promise(function(resolve, reject) {
    setTimeout( () => resolve(), 500)
  })
}

function creationProject() {
    console.log('Start creating');

  return new Promise(function(resolve, reject) {
    setTimeout( () => resolve(), 200)
  })
}

function deploy() {
    console.log('Deploy Prod');

  return new Promise(function(resolve, reject) {
    setTimeout( () => resolve(), 300)
  })
}


getTask({}).then((task) => {
                    console.log('Task got!');
                    return true })
           .then(researchTask)
           .then(creationProject)
           .then(deploy)
           .catch(error => console.error(error));