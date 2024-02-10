import { Answer, GetAnswer, Keyboard, KeyboardTypes, MessageSend, OnClick, OnText, Scope, Text } from 'nestgram';

@Scope()
export class TokenScope {
  @OnText()
  onNameSend(@Text() name: string) {
    return new MessageSend(
      `Hello, ${name}!`,
      new Keyboard(KeyboardTypes.underTheMessage)
        .btn('Leave scope', 'leave'),
    );
  }

  @OnClick('leave')
  async leaveScope(@GetAnswer() answer: Answer) {
    await answer.unscope();
    return 'Unscope';
  }
}
