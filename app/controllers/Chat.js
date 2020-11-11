const { emit } = require("../../config/server");

module.exports.chat = function(app, req, res){
    res.render("chat");
};

module.exports.send = function(app, req, res){

    req.assert('nickname', 'O apelido deve ser preenchido').notEmpty();
    req.assert('nickname', 'O apelido deve deve ter entre 4 a 8 caracteres').len(4,8);

    let errors = req.validationErrors();
    
    if(errors){
        console.log(errors);
        res.render("index", {validation: errors});
        return;
    }

    let data = req.body;

    app.get('io').emit('msgClient', {nickname: data.nickname, msg: ' se conectou ao chat'});

    res.render("chat", {formData: data});
};