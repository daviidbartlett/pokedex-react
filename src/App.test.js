import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as util from "./utils/";

describe("smoke test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("capitaliseString()", () => {
  it("returns string when passed string", () => {
    expect(typeof util.capitaliseString("hello")).toBe("string");
  });
  it("returns error message if string is not passed", () => {
    expect(util.capitaliseString(2)).toBe("incorrect data type");
    expect(util.capitaliseString()).toBe("incorrect data type");
    expect(util.capitaliseString(null)).toBe("incorrect data type");
    expect(util.capitaliseString(true)).toBe("incorrect data type");
  });
  it("capitalises the first letter of a passed string", () => {
    expect(util.capitaliseString("pikachu")).toBe("Pikachu");
  });
});
