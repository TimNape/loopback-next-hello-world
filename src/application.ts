import {Application} from '@loopback/core';
import {Logger, LoggingOptions} from '@loopback/logging';
import {HelloWorldComponent} from './components/hello-world';

export class HelloWorldApplication extends Application {
  private logger: Logger;
  constructor() {
    super({
      components: [HelloWorldComponent],
    });
    const options: LoggingOptions = { http: true };
    this.logger = new Logger(this, options);
  }
  get log() {
    return this.logger.log;
  }  
}
