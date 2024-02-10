import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestGram } from 'nestgram';
import { TelegramModule } from '@/modules/telegram/telegram.module';
import { configDotenv } from 'dotenv';
configDotenv()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bot = new NestGram(process.env.TELEGRAM_BOT_KEY, TelegramModule);
  await bot.start();
  await app.listen(3000);
}
bootstrap();
