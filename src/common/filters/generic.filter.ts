import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Logger } from '../helpers/logger.helper';

@Catch()
export class GenericErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(GenericErrorFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error(exception, exception.stack, 'GenericErrorFilter unknown-error');
    console.log(exception, 'generic-error-filter');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    return response.status(500).send({
      ok: false,
      errors: [
        {
          message: exception.message ?? 'unknown-error',
          userMessage: 'Erro desconhecido, entre em contato com o suporte.',
        },
      ],
    });
  }
}
