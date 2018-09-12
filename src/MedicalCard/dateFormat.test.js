import dateFormat from "./dateFormat";

describe("Date format", () => {
  it("formats the date correctly", () => {
    const firstDate = dateFormat("1970-01-02");
    const secondDate = dateFormat("1970-12-15");

    expect(firstDate).toEqual("2. Januar 1970");
    expect(secondDate).toEqual("15. Dezember 1970");
  });
});
