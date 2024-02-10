import { Module } from "nestgram";
import { TelegramController } from "./controllers/telegram.controller";

@Module({
  controllers: [TelegramController],
  services: []
})
export class TelegramModule { }
