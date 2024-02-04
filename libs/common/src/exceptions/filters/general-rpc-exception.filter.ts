import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { GeneralRpcException } from '@app/common/exceptions/GeneralRpcException';
import { Observable, throwError } from 'rxjs';

@Catch(GeneralRpcException)
export class GeneralRpcExceptionFilter
  implements RpcExceptionFilter<GeneralRpcException>
{
  catch(exception: GeneralRpcException, host: ArgumentsHost): Observable<any> {
    const exceptionError = exception.getErrorData();

    return throwError(() => {
      return {
        status: exceptionError.status,
        code: exceptionError.code,
        message: exceptionError.message,
        timestamp: new Date().toISOString(),
      };
    });
  }
}
