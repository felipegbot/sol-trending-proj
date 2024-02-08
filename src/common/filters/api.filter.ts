import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import ApiError from '../../api-error/entities/api-error.entity';

@Catch(ApiError)
export class ApiErrorFilter implements ExceptionFilter {
  catch(exception: ApiError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception.userMessage) {
      return response.status(exception.statusCode ?? 500).send({
        ok: false,
        errors: [{ message: exception.message, userMessage: exception.userMessage }],
      });
    } else if (exception.message) {
      return response.status(exception.statusCode ?? 500).send({
        ok: false,
        errors: [
          {
            message: exception.message,
            userMessage: 'Erro desconhecido, entre em contato com o suporte.',
          },
        ],
      });
    } else {
      return response.status(exception.statusCode ?? 500).send({
        ok: false,
        errors: [{ message: 'unknown-error', userMessage: 'Erro desconhecido' }],
      });
    }
  }
}
