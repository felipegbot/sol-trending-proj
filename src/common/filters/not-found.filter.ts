import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    return response.status(404).send({
      ok: false,
      errors: [
        {
          message: exception.message,
          userMessage: 'Rota não encontrada',
        },
      ],
    });
  }
}
