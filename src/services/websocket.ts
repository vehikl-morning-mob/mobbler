export default class Service {
  websocket: WebSocket;
  tokenHandler: any;

  constructor(id: string, tokenHandler: any, API?: any) {
    this.tokenHandler = tokenHandler;
    this.websocket = API || new WebSocket(`wss://mobtime.mrbarry.com/${id}`);
    this.setup();
  }

  onMessage(event: any) {
    const message = JSON.parse(event.data);
    switch (message.type) {
      case 'tick':
        // TODO
      break;

      case 'token':
        this.tokenHandler(message);
      break;

      default:
      // TODO
    }
  }

  setup() {
    this.websocket.addEventListener('open', () => {
      this.websocket.addEventListener('message', (event) => this.onMessage(event));
      this.websocket.addEventListener('close', () => {
        // Handle socket disconnect.
        // Maybe attempt to reconnnect?
      });
    });

  }
}
