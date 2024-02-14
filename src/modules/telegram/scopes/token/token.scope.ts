import { Answer, GetAnswer, Keyboard, KeyboardTypes, MessageSend, OnClick, OnCommand, OnEnter, OnText, Scope, Text } from 'nestgram';
import { TokenHelper } from '../../helpers/token.helper';

@Scope()
export class TokenScope {
  constructor(private readonly tokenHelper: TokenHelper) { }
  // @OnEnter()
  // async onEnter(@GetAnswer() answer: Answer) {
  //   return `Welcome to the FehraTrendingBot`
  // }

  @OnCommand('leave')
  async leaveScope(@GetAnswer() answer: Answer) {
    await answer.unscope();
    await answer.send('You have left the FeahraTrendingBot, to return send `/start`', new Keyboard(), { parse_mode: 'MarkdownV2' });
    return;
  }

  @OnText()
  async onNameSend(@Text() tokenAddress: string, @GetAnswer() answer: Answer) {
    const splittedMessage = tokenAddress.split(' ');
    if (splittedMessage.length > 2 || splittedMessage.length < 2) {
      await answer.send('Invalid format, please use `token <token-address>`', new Keyboard(), { parse_mode: 'MarkdownV2' });
      return
    }
    const parsedTokenAddress = splittedMessage[1];
    await answer.send('Token address is ' + "`" + parsedTokenAddress + "`, wait till the security check runs", new Keyboard(), { parse_mode: 'MarkdownV2' })
    const res = await this.tokenHelper.getTokenInfo(parsedTokenAddress);
    return res
  }

}
