import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Tag: [validation pipe] [transformer class]
  // Les parametres en entrée vont etre converti en fonction du type du parametre que le controlleur accepte 
  // (grâce au transform:true)

  // Les parametre de type Json vont exactement correspondre aux DTO qu'on a mis en entrée du controller.
  // Si le client envoie un objet avec une propriété en plus, celle-ci sera ignorée  
  // (grâce à whiteList:true)

  // 
  app.useGlobalPipes(new ValidationPipe({transform:true,whitelist:true}))
  await app.listen(3000);
}
bootstrap();
