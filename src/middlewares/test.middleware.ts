import { Injectable, NestMiddleware } from '@nestjs/common';

//#middleware: Créer un middleware
@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("middleware de test")
    next();
  }
}
