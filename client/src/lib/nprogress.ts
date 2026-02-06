import NProgress from "nprogress";

class ProgressBar {
  private static instance: ProgressBar;

  private constructor() {}

  static getInstance(): ProgressBar {
    if (!ProgressBar.instance) {
      ProgressBar.instance = new ProgressBar();
    }
    return ProgressBar.instance;
  }

  start() {
    NProgress.start();
  }

  done() {
    NProgress.done();
  }

  set(value: number) {
    NProgress.set(value);
  }

  inc(value?: number) {
    NProgress.inc(value);
  }

  async wrap<T>(promise: Promise<T>): Promise<T> {
    this.start();
    try {
      const result = await promise;
      this.done();
      return result;
    } catch (error) {
      this.done();
      throw error;
    }
  }
}

export const progressBar = ProgressBar.getInstance();
