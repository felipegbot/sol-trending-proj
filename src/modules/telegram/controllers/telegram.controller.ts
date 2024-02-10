import { Answer, Controller, GetAnswerContext, Keyboard, KeyboardTypes, MessageSend, OnClick, OnCommand, OnText } from 'nestgram';

@Controller()
export class TelegramController {
  @GetAnswerContext() answer: Answer;

  @OnCommand('start')
  async start2() {
    await this.answer.send(
      new MessageSend('How are you?'),
      new Keyboard(KeyboardTypes.underTheMessage)
        .btn('Fine!', 'fine'),
    )
  }
}
