import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestTimeInterceptor } from './interceptors/request-time.interceptor';
// #middleware_morgan: 1- on déclare le middleware. Il y'a plusieurs facons de mettre en place un middleware
// Voir les autres tag pour plus de détails
import * as morgan from "morgan"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // #middleware_cors: 1- mise en place. Il est nativement présent dans le framework
  app.enableCors();
  // #middleware_morgan: 2- on appele le middleware, il sera disponibe sur toutes les requetes
  app.use(morgan('dev'));

  // Tag: [validation pipe] [transformer class]
  // Les parametres en entrée vont etre converti en fonction du type du parametre que le controlleur accepte 
  // (grâce au transform:true)

  // Les parametre de type Json vont exactement correspondre aux DTO qu'on a mis en entrée du controller.
  // Si le client envoie un objet avec une propriété en plus, celle-ci sera ignorée  
  // (grâce à whiteList:true)

  // 
  app.useGlobalPipes(new ValidationPipe({transform:true,whitelist:true}));
  app.useGlobalInterceptors(new RequestTimeInterceptor());
  await app.listen(3000);
}
bootstrap();
