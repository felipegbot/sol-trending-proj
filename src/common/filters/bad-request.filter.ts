import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log(exception, 'bad-request-exception-filter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const exceptionResponse = exception.getResponse();
    if (typeof exceptionResponse['ok'] !== 'boolean') {
      return response.status(400).send({
        ok: false,
        errors: [
          {
            message: exceptionResponse['message'] ?? 'unknown-error',
            userMessage: 'Houve um problema com a sua requisição, entre em contato com o suporte',
          },
        ],
      });
    } else {
      return response.status(400).send(exceptionResponse);
    }
  }
}
