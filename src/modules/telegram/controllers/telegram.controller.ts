import { Answer, Controller, GetAnswer, GetAnswerContext, Keyboard, KeyboardTypes, MessageSend, OnClick, OnCommand, OnText } from 'nestgram';

@Controller()
export class TelegramController {
  @GetAnswerContext() answer: Answer;
  @OnCommand('start')
  async start(@GetAnswer() answer: Answer) {
    try {
      return new MessageSend(
        'Hello! Do you want to enter your name?',
        new Keyboard(KeyboardTypes.underTheMessage)
          .btn('Enter my name', 'token'),
      );
    } catch (e) {
      console.error(e);
    }
  }

  @OnClick('scope')
  async enterScope(@GetAnswer() answer: Answer) {
    await answer.scope('token');
    return 'Enter your name';
  }
}
