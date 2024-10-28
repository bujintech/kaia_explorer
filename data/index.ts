import { queryGcConfig } from "@/lib/dbApi";

class GCData {
  public config: Record<string, string> = {};
  private intervalId: NodeJS.Timeout | null = null;

  constructor() {
    this.config = {};
    this.start();
  }

  public start(): void {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(async () => {
      const data = await queryGcConfig();
      this.config = {
        ...(data || {}),
      };
    }, 3000);
  }

  public stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

const gc = new GCData();

export { gc };
