import { ValidationError } from '@nestjs/common';
import { getValidationErrorsContexts } from '../pipes/get-validation-errors-contexts.helper';

export function buildValidationErrorContexts(rawErrors: ValidationError[]) {
  const contexts = rawErrors.map((error) => {
    if (error.constraints?.whitelistValidation !== undefined) {
      return [
        {
          message: 'forbidden-field',
          userMessage: `Sua requisição tem um ou mais campos não permitidos (${error.property})`,
        },
      ];
    }

    if (error.constraints?.isEnum) {
      return [
        {
          message: `invalid-${error.property}`,
          userMessage: `Valor do campo ${error.property} inválido`,
        },
      ];
    }

    if (error.children?.length > 0) return getValidationErrorsContexts(error.children);
    return error.contexts
      ? Object.values(error.contexts)
      : [{ message: 'unknown-validation-error', userMessage: 'Não foi possível validar a requisição' }];
  });
  return contexts;
}
