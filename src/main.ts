import { NestFactory } from '@nestjs/core';
import { CharactersModule } from './character/character.module';

async function bootstrap() {
  const app = await NestFactory.create(CharactersModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
