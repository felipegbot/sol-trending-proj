import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { buildValidationErrorContexts } from '../helpers/build-validation-error-contexts.helper';

@Catch(Array<ValidationError>)
export class ValidationErrorFilter implements ExceptionFilter {
  catch(exception: Array<ValidationError>, host: ArgumentsHost) {
    console.log(exception, 'validation-error-filter');
    const contexts = buildValidationErrorContexts(exception);
    const errors = contexts.reduce((acc, cur) => acc.concat(...cur), []);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).send({ ok: false, errors });
  }
}
