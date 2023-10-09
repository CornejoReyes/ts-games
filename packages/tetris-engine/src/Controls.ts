export class Controls {
  public onKey(key: string, callback: () => void) {
    window.addEventListener('keydown', callback);
  }
}
