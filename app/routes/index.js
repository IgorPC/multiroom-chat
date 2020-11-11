module.exports = function(app){
    app.get('/', function(req, res){
        app.app.controllers.Index.index(app, req, res);
    });
};