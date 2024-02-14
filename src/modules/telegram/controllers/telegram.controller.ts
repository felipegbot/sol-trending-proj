import { Answer, Controller, GetAnswer, GetAnswerContext, Keyboard, KeyboardTypes, MessageSend, OnClick, OnCommand, OnText } from 'nestgram';
@Controller()
export class TelegramController {

  @OnCommand('start')
  async start(@GetAnswer() answer: Answer) {
    await answer.send(`Welcome to the FehraTrendingBot\n
*This is a project still in development, by far we only support the SOLANA chain*\n\nto proceed, send me the token address you want to insert in FehraTrending following the format: `+ "`token <token-address>`" + ` and we will check the security`,
      new Keyboard(), { parse_mode: 'MarkdownV2' });
    answer.scope('token');

  }
}
