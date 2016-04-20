var async = require('async');

module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('Node.js is running late!');
    }
    context.log('Node.js timer trigger function ran!', timeStamp);   
    
    async.parallel([
        function (cb) {
            console.log('wow');
        },
        function (cb) {
            console.log('zee');
        }
    ],
    function () {
        console.info('over and out');
        context.done();
    });
};