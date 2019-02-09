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
});
