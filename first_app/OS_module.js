// const os = require('os');
import os from 'os'


var totalMemory = os.totalmem();
var freeMomory = os.freemem();


var homeDir = os.homedir();
var hostName = os.hostname();
var loadAvg = os.loadavg();
var machine = os.machine();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMomory}`);

console.log(`homeDir: ${homeDir}`);
console.log(`hostName: ${hostName}`);
console.log(`loadAvg: ${loadAvg}`); 
console.log(`machine: ${machine}`);