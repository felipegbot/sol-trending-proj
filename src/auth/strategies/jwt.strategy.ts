import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { TelegramBot } from '../interfaces/telegram.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: TelegramBot) {
    return payload
  }
}
