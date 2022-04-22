import { render } from "@testing-library/preact";
import { h } from "preact";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";

import Button from "../components/Button/button";
describe("button component tests", () => {
  let server: PreviewServer;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
  });

  afterAll(async () => {
    server.httpServer.close();
  });

  test("renders the button", () => {
    const title = "test";

    const rendered = render(<Button>{title}</Button>);

    const { container } = rendered;

    expect(container.textContent).toBeDefined();
  });
});
