export const greetingWorldMessage = (name?: string): string => {
  return `Hello world!${name?"I'm "+name:""}`
}

export const printMessage = (msg: string): void => {
  console.log(msg)
}

// printMessage(greetingWorldMessage())
// printMessage(greetingWorldMessage("human"))