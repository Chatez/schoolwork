var db = require('../dbconnection'); //reference of dbconnection.js  
var Task = {  
getAllTasks: function(callback) {  
return db.query("Select * from task", callback);  
},  
getTaskById: function(id, callback) {  
return db.query("select * from task where Id=?", [id], callback);  
},  
addTask: function(Task, callback) {  
return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);  
},  
deleteTask: function(id, callback) {  
return db.query("delete from task where Id=?", [id], callback);  
},  
updateTask: function(id, Task, callback) {  
return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);  
}  
};  
module.exports = Task;

router.get('/:id?', function(req, res, next) { 
if (req.params.id) { 
Task.getTaskById(req.params.id, function(err, rows) { 
if (err) { 
res.json(err); 
} else { 
res.json(rows); 
} 
}); 
} else { 
Task.getAllTasks(function(err, rows) { 
if (err) {
res.json(err);
} else { 
res.json(rows); 
} 
}); 
} 
});

router.post('/', function(req, res, next) { 
Task.addTask(req.body, function(err, count) { 
if (err) { 
res.json(err); 
} else { 
res.json(req.body); //or return count for 1 & 0 
} 
}); 
});

var express = require('express');  
var router = express.Router();  
var Task = require('../models/Task');  
router.get('/:id?', function(req, res, next) {  
if (req.params.id) {  
Task.getTaskById(req.params.id, function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
} else {  
Task.getAllTasks(function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
}  
});  

router.post('/', function(req, res, next) {  
Task.addTask(req.body, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(req.body); //or return count for 1 & 0  
}  
});  
});  

router.delete('/:id', function(req, res, next) {  
Task.deleteTask(req.params.id, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(count);  
}  
});  
});  

router.put('/:id', function(req, res, next) {  
Task.updateTask(req.params.id, req.body, function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
});  
module.exports = router;

