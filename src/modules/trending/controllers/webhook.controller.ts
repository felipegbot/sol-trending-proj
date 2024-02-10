import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { SwapNotification } from "../interfaces/swap-notification.interface";

@Controller('webhook')
export class WebhookController {
  @Post('/')
  async receiveWebhookShyft(@Body() rawBody: any, @Req() req: any) {
    return req.user
    const formattedBody = rawBody.actions[0] as SwapNotification
    // return
    const isBuy = formattedBody.info.tokens_swapped.in.symbol === 'SOL'
    if (!isBuy) return { ok: true }
    const formattedSwapNotification = {
      swapper: formattedBody.info.swapper,
      amountSol: formattedBody.info.tokens_swapped.in.amount,
      amountToken: formattedBody.info.tokens_swapped.out.amount + ' ' + formattedBody.info.tokens_swapped.out.symbol,
    }
    console.log(`\nNew Buyer!\n${formattedSwapNotification.swapper}\nbought ${formattedSwapNotification.amountToken}\nwith ${formattedSwapNotification.amountSol} SOL!\n`)
    return { ok: true }
  }
}
