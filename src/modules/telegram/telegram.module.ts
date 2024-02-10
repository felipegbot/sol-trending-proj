import { Module } from "nestgram";
import { TelegramController } from "./controllers/telegram.controller";
import { TokenScopeModule } from "./scopes/token/token.module";

@Module({
  imports: [TokenScopeModule],
  controllers: [TelegramController],
  services: []
})
export class TelegramModule { }
