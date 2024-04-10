class Validation {
  msg: string
  flag: boolean
  msgs: string[]

  constructor(msg: string, flag: boolean) {
    this.flag = flag;
    this.msgs.push(msg)
  }
}
