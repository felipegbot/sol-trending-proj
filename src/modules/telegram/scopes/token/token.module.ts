import { Module } from "nestgram";
import { TokenScope } from "./token.scope";

@Module({
  scopes: [TokenScope],
  services: []
})
export class TokenScopeModule { }
