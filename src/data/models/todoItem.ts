export class TodoItem {
  constructor(public text: string, public isFinished: boolean) {}

  get name() {
    return this.text.toLowerCase().split(' ').join('_');
  }
}
