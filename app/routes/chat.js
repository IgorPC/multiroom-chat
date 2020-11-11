module.exports = function(app){
    app.get('/chat', function(req, res){
        app.app.controllers.Chat.chat(app, req, res);
    });

    app.post('/chat', function(req, res){
        app.app.controllers.Chat.send(app, req, res);
    });
};