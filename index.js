'use strict';

const http = require('http');
const config = require('./config.json');
const exitTimeout = config.exit_timeout * 1000;
const startTimeot = config.start_timeout * 1000;
console.log('waiting for start...');
setTimeout(() => {
    http.createServer(function (req, res) {
    }).listen(8080);
    console.log('process started with arguments:');
    console.log(process.argv);
    process.on("SIGINT", () => {
        console.log("new signal: SIGINT");
        console.log("waiting for exit...");
        setTimeout(() => {
            process.exit(0);
        }, exitTimeout);
    });
}, startTimeot);


