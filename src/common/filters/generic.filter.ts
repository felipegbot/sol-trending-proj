import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class GenericErrorFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
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
