import { Module } from "nestgram";
import { TokenScope } from "./token.scope";
import { TokenHelper } from "../../helpers/token.helper";

@Module({
  scopes: [TokenScope],
  services: [TokenHelper]
})
export class TokenScopeModule { }
