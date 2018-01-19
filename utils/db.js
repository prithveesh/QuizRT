const mongoose = require('mongoose');

export default function (url, done){
    mongoose.connect(url, function(err, db){
        if(err) return done(err);
        done();
    });
}