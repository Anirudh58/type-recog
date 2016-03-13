var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

router.route('/patterns')
    // insert a new pattern
    .post(function(req, res){
        var user = new User();

        user.name = req.body.name;
        user.pattern = req.body.pattern;

        user.save(function(err, user){
           if(err){
               return res.send(500, err);
           }

               return res.json(user);
        });
    })
    // gets all user patterns
    .get(function(req,res){
       User.find(function(err,patterns){
           if(err){
               return res.send(500, err);
           }
               return res.send(200,patterns);
       });
    });


module.exports = router;
