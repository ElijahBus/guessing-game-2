import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { GeneralHttpException } from '@app/common/exceptions/GeneralHttpException';

@Catch(GeneralHttpException)
export class GeneralHttpExceptionFilter implements ExceptionFilter {
  catch(exception: GeneralHttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const errorCode = exception.getErrorCode();

    response.status(status).json({
      status: status,
      code: errorCode.code,
      message: errorCode.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
