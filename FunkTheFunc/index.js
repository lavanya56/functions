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
            return cb();
        },
        function (cb) {
            context.log('zee');
            return cb();
        }
    ],
    function (err, results) {
        context.log('ended 2');
        context.done();
    });
  
};