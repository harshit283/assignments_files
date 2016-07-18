var express= require('express');
var app= express();
var body_parser=require('body-parser');
var fs = require('fs');

app.set('port' ,process.env.PORT || 3000);

app.use(body_parser.urlencoded({extended : true}));
app.use(body_parser.json());
app.use('/', express.static('public'));

var todos=[];
app.post('/addtodo',function(req,res)
{
    var obj={};
    obj.data= req.body.data;
    obj.done=  req.body.done;
    todos.push(obj);
    res.send(todos);
    res.end();

})


//POST METHOD
/*
app.get('/',function(req,res)
{
    res.sendFile('/home/harshit/webstorm_files/form.html');
});


app.post('/process_get' , function (req,res) {

    var obj={};
    obj.firstname = req.body.first_name;
    obj.lastname = req.body.last_name;
    var str = JSON.stringify(obj);
    res.send(str);
    res.end();
})

*/


//GET METHOD
/*
app.get('/process_get',function (req,res) {

    var obj ={};
     obj.firstname = req.query.first_name;
    obj.lastname= req.query.last_name;
    var str = JSON.stringify(obj);
    res.send(str);
    res.end();

});
*/


/*
app.get('/hello',function(req,res)
{
    if(req.query.name == undefined || req.query.name == null)
        res.send("sorry we dont know you");
    else  res.send( req.query.name);
})
*/


app.listen(3000 ,function () {
    console.log("server started and listening at port 3000");
});



/*
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);
app.use('/', express.static('./public'));

let todoList = [];



app.get('/hello', function(req, res) {
    if (typeof req.query.name != 'undefined'
        && req.query.name != '') {
        res.send( req.query.name)
    } else {
        res.send("Who the hell are you ?")
    }
});


app.post('/addtodo', function (req, res) {
    console.log(req.body);
    var newTodo = {
        task: req.body.task,
        done: false
    };
    todoList.push(newTodo);
    res.send(todoList);
});



app.listen(app.get('port'), function () {
    console.log('Server started on port : ' + app.get('port'))
});
    */