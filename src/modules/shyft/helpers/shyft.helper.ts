import { InitializedShyftSdk } from "@/common/apis/shyft.api";
import { Network } from "@shyft-to/js";

class ShyftHelper {
  async getToken(address: string) {
    try {
      const data = await InitializedShyftSdk.token.getInfo({
        network: Network.Mainnet,
        tokenAddress: address
      })
      const owners =
        await InitializedShyftSdk.token.getOwners({ tokenAddress: address })

      return { ...data, owners }
    } catch (err) {
      console.log(err);
      return "Sorry, your token address gave us an error while trying to get the token info, please try again"
    }
  }
}

export default new ShyftHelper()
