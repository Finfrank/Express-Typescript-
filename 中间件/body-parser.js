const querystring = require('querystring');

module.exports = {
  urlencoded() {
    return (req, res, next) => {
      let arr = [];
      req.on('data', buffer => {
        arr.push(buffer);
      });
      req.on('end', () => {
        let post = querystring.parse(Buffer.concat(arr).toString());
        // 讲解析好的数据放到req对象的body属性上
        req.body = post;
        // 调用next方法结束当前中间件的调用，执行后续的操作
        next();
      });
    };
  }
};
