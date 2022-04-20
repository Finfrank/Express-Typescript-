var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'b'
});
 
connection.connect();

//查
var sql = 'SELECT * FROM 学院';
connection.query(sql,function(err, result){
  if(err){
    console.log('[SELECT ERROR] -',err.message);
    return;
  }
  console.log('---------SELECT----------');
  console.log(result);
  console.log('-------------------------');
})
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

//插入
var addSql ='INSERT INTO `专业` (`专业名称`, `专业编号`) VALUES ("人工智能", NULL)';
var addSqlParams = ['智能'];
connection.query(addSql,addSqlParams,function (err, result) {
  if(err){
   console.log('[INSERT ERROR] - ',err.message);
   return;
  }        

 console.log('--------------------------INSERT----------------------------');
 //console.log('INSERT ID:',result.insertId);        
 console.log('INSERT ID:',result);        
 console.log('-----------------------------------------------------------------\n');  
});

connection.end();