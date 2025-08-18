const http = require('http');
const { port } = require('./config');
const { createApp, connectDB, initSockets, startCron } = require('./src/app');

(async () => {
  await connectDB();
  const app = createApp();
  const server = http.createServer(app);
  initSockets(server);
  server.listen(port, () => console.log(`API listening on http://localhost:${port}`));
  startCron();
})();
