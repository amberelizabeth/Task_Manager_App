const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/Task');
const cors =  require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes or endpoints
app.get('/', function(req, res){
    Task.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

app.post('/', function(req, res){
    let task = req.body;
    Task.create(task).then(function(result){
        res.redirect('/');
    }).catch(function(err){
        res.send(err);
    })
});

app.delete('/:id', function(req, res){
    let id = req.params.id;
    Task.findByPk(id).then((result) => {
        result.destroy().then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
});


app.listen(3000, function(){
    console.log('Server running on port 3000...');
});