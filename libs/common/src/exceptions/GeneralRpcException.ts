import { RpcException } from '@nestjs/microservices';
import { ErrorCode } from '../../utilities/error-codes';

/**
 * Defines the application General Exception, Which extends the Nest Base HttpException
 * and will be handled by the GeneralHttpExceptionFilter
 */
export class GeneralRpcException extends RpcException {
  private readonly errorCode: ErrorCode;
  private readonly status: number;

  constructor(errorCode: ErrorCode, status = 400) {
    super({
      status: status,
      error: errorCode.code,
      message: errorCode.message,
    });

    this.errorCode = errorCode;
    this.status = status;
  }

  getErrorData(): { status: number; code: string; message: string } {
    return {
      status: this.status,
      code: this.errorCode.code,
      message: this.errorCode.message,
    };
  }
}
