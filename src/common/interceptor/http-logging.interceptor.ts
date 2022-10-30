import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HttpLoggingInterceptor implements NestMiddleware {
  private readonly logger = new Logger(HttpLoggingInterceptor.name);

  use(request: Request, response: Response, next: NextFunction): void {
    const startAt = process.hrtime();
    response.on('finish', () => {
      const { method, url } = request;
      const { statusCode } = response;
      const diff = process.hrtime(startAt);
      const responseTime = diff[0] * 1e3 + diff[1] * 1e-6;
      this.logger.log(`${statusCode} | [${method}] ${url} - ${responseTime}ms`);
    });
    next();
  }
}
