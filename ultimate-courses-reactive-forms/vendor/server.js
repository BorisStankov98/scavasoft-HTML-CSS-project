const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();


server.use(middleware);
server.use(jsonServer.bodyParser)


const productData = require('./')

server.get('/api/products', (req,res,next)=>{
    res.status(200).send(productData.getProducts)    
});



server.listen(3000, ()=>{
    console.log('works')

})