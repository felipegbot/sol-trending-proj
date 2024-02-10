import { Module } from "@nestjs/common";
import { ListenTokenController } from "./controllers/listen-token.controller";
import { WebhookController } from "./controllers/webhook.controller";

@Module({
  controllers: [ListenTokenController, WebhookController]
})
export class TrendingModule { }
