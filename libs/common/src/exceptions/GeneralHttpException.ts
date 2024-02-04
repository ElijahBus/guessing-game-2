import { HttpException, HttpExceptionOptions } from '@nestjs/common';
import { ErrorCode } from '../../utilities/error-codes';

/**
 * Defines the application General Exception, Which extends the Nest Base HttpException
 * and will be handled by the GeneralHttpExceptionFilter
 */
export class GeneralHttpException extends HttpException {
  private readonly errorCode: ErrorCode;

  constructor(
    errorCode: ErrorCode,
    status?: number,
    options?: HttpExceptionOptions,
  ) {
    super(
      {
        status: status || 400,
        code: errorCode.code,
        message: errorCode.message,
      },
      status,
      options,
    );

    this.errorCode = errorCode;
  }

  getErrorCode(): ErrorCode {
    return this.errorCode;
  }
}
