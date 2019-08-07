var http=require('http')
var connect = require('connect');
var prism = require('connect-prism');
var bp = require('body-parser')
var fs = require('fs')

prism.useVerboseLog();

prism.create({
  name: 'api',
  context: '/api',
  rewrite:{
	'^/api':'/proxiedApi'
	},
  mode: 'record',
  host: 'localhost',
  port: 3000
});

var app = connect()
.use(bp.json())
//  .use(prism.middleware)
//  .use(connect.static('public'))
  .use(function(req, res){
var d= JSON.stringify(req.body,null,2)
var fname='req-bodies/'+new Date().toISOString()+'.json'
fs.writeFile(fname, d, (err) => {
    if (err) throw err;
console.log('req.url='+req.url)
console.log('req.headers='+JSON.stringify(req.headers,null,2))
    console.log('Data written to file '+fname);
});
    res.end('hello world\n');
  })

http.createServer(app).listen(3000);

