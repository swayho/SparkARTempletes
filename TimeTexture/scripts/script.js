
export const Diagnostics = require('Diagnostics');
const Time = require('Time');
const timeInMilliseconds = 1000;
const Patches = require('Patches');

let isStarted = false;
let intervalTimer = null;

function countSecond(){
    let d = new Date();
    Diagnostics.watch("second is ", d.getSeconds());
    Patches.inputs.setScalar('seconds', d.getSeconds());
    Patches.inputs.setScalar('minutes', d.getMinutes());
    Patches.inputs.setScalar('hours', d.getHours());
}

async function findObj(){
    return {
    }
}

findObj().then(obj => {
    if(intervalTimer == null && !isStarted){
        isStarted = true
        intervalTimer = Time.setInterval(countSecond, timeInMilliseconds);
    }
})
