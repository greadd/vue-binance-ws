export const sdk = {
  get: async (symbol) => {
    const res = await fetch(`https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=500`); // снепшот стакана по символу ${symbol}
    return await res.json();
  },
  subscribe: function(symbol) {
    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@1000ms`);
    return ws; // возвращаем сокет
  },
};
