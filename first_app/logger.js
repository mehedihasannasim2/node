var url = 'http://mylogger.io/log';

function log(message){
    // send an HTTP request
    console.log(message);
}
// module.exports.log = log; // object
// module.exports.endPoint = url;


module.exports = log;

