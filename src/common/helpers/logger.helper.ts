import { ConsoleLogger, ConsoleLoggerOptions } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

dotenv.config({ path: '.env' });

export class Logger extends ConsoleLogger {
  constructor();
  constructor(context: string);
  constructor(context?: string, options?: ConsoleLoggerOptions) {
    super(context, {
      ...options,
      logLevels: process.env.NODE_ENV !== 'test' ? ['log', 'error', 'warn', 'debug', 'verbose'] : [],
    });
  }

  error(error: any, stack?: string, context?: string) {
    const errorId = uuid();
    super.error(`${errorId}`, `Raw error data: ${error}`, context);
    console.log(errorId, error);
    super.error(`${errorId}`, `Error stack: `, context);
    console.log(errorId, stack);
  }
}
