import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateListenTokenDto {
  @IsNotEmpty({
    context: {
      message: 'address-missing',
      userMessage: 'Address is missing in request body'
    }
  })
  @IsString({
    context: {
      message: 'address-invalid',
      userMessage: 'Address is invalid'
    }
  })
  address: string;

  @IsIn(['mainnet-beta', 'testnet'])
  @IsNotEmpty({
    context: {
      message: 'network-missing',
      userMessage: 'Network is missing in request body'
    }
  })
  network: 'mainnet-beta' | 'testnet';
}
