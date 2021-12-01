interface BridgeConfig {
  trackingId: string;
  clientId: string;
}

export default class Bridge {
  constructor(private url: string, private config: BridgeConfig) {}

  public journeys() {
    return ['sign-in'];
  }
}
