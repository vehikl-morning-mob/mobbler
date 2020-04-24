import Service from "@/services/websocket";

describe('websocket', () => {
  it('handles token received event', () => {
    const API = {
      addEventListener: () => {}
    };
    const tokenHandler = jest.fn();
    const service = new Service('timerId', tokenHandler, API);
    const data = {
      "type": "token",
      "token": "some token here",
      "state": {
        "timerStartedAt": null,
        "timerDuration": 0,
        "connections": 0,
        "mobbers": []
      }
    };

    service.onMessage({type: 'message', data: JSON.stringify(data)});

    expect(tokenHandler).toHaveBeenCalledWith(data);
  });
});
