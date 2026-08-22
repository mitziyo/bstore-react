export {};

declare global {
  interface Window {
    WOW: new (options?: Record<string, unknown>) => { init(): void };
  }
}
