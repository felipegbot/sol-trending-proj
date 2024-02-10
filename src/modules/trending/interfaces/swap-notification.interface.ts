export interface SwapNotification {
  type: 'SWAP';
  info: {
    swapper: string;
    tokens_swapped: {
      in: {
        token_address: string;
        name: string;
        symbol: string;
        image_uri: string;
        amount: number;
      };
      out: {
        token_address: string;
        name: string;
        symbol: string;
        image_uri: string;
        amount: number;
      };
    };
    swaps:
    {
      liquidity_pool_address: string;
      name: string;
      source: string;
    }[];
  };
}
