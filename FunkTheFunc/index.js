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
            context.log('wow');
        },
        function (cb) {
            context.log('zee');
        }
    ],
    function () {
        context.log('over and out');
    });

    context.log('context done was called...');
    context.done();
};