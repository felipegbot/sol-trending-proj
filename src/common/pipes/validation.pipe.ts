import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { buildValidationErrorContexts } from '../helpers/build-validation-error-contexts.helper';

export class AppValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
      transform: true,
      exceptionFactory: (rawErrors) => {
        console.dir(rawErrors, { depth: null });
        const contexts = buildValidationErrorContexts(rawErrors);
        const errors = contexts.reduce((acc, cur) => acc.concat(...cur), []);
        return new BadRequestException({ ok: false, errors });
      },
    });
  }
}
