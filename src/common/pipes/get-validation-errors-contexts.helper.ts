import { ValidationError } from '@nestjs/common';

export const getValidationErrorsContexts = (errors: ValidationError[]) => {
  console.log('errors in get-validation-errors-contexts.helper.ts');
  console.dir(errors, { depth: null });
  return errors.map((error) => {
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
    if (error.constraints?.unknownValue) {
      return [
        {
          message: `invalid-field-${Object.keys(error.target)[0]}`,
          userMessage: `Campo ${Object.keys(error.target)[0]} não permitido`,
        },
      ];
    }
    if (error.children.length > 0) return getValidationErrorsContexts(error.children);
    return Object.values(error.contexts);
  });
};
