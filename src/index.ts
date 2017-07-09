import {HelloWorldApplication} from './application';
import {HelloWorldController} from './components/hello-world/controllers/hello-world';
import * as http from 'http';

const app = new HelloWorldApplication();
app.controller(HelloWorldController);

const port = 3000;
const server = http.createServer(app.handleHttp);
server.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    throw err;
  }
  app.log.info(`*** HTTP server started on port ${3000}`);
  console.log(`HTTP server listening on port ${3000}`);
  console.log('Run `curl localhost:3000/helloworld?name=YOUR_NAME` to try it out');
});
