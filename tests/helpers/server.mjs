
/**
 * Wait for connction.
 * @param {WebSocketServer} wss
 */
export async function connection(wss)
{
  return new Promise((resolve, reject) => wss.on("connection", ws => resolve(ws)));
}

export async function wait(msecs = 1000) {
  return new Promise((resolve, reject) => setTimeout(resolve, msecs));
}