exports.handler = (event, context, callback) => {
    // TODO implement
   var result;
 
    var a = Number(event.a);
    var b = Number(event.b);
     result = a + b;
    callback(null, result);
};
