export default(req, res, next)=>{
    console.log('middleware2');
    next();
}