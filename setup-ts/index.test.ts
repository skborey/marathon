import { greetingWorldMessage } from ".";

describe("Greeting message", () => {
  it("Should return greeting phrase", () => {
    const result: string = greetingWorldMessage()

    expect(result).toBe("Hello world!")
  });

  it("Should return greeting phrase with provided name", () => {
    const result: string = greetingWorldMessage("human")

    expect(result).toBe("Hello world!I'm human")
  });
});