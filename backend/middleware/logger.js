module.exports = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}`;
  require('fs').appendFile('server.log', log + '\n', () => {});
  next();
};
