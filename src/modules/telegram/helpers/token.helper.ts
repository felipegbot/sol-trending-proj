import shyftHelper from "@/modules/shyft/helpers/shyft.helper";
import { Service } from "nestgram";

@Service()
export class TokenHelper {
  async getTokenInfo(address: string) {
    const data = await shyftHelper.getToken(address);
    console.log(data)
    return data
  }
}
