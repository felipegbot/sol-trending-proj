import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestGram } from 'nestgram';
import { configDotenv } from 'dotenv';
import { TelegramModule } from './modules/telegram/telegram.module';
configDotenv()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bot = new NestGram(process.env.TELEGRAM_BOT_KEY, TelegramModule, {}, { drop_pending_updates: true });
  await bot.start();
  await app.listen(3000);
}
bootstrap();
