import { render } from "@testing-library/preact";
import { h } from "preact";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";

import Message from "../components/Message/message";
describe("message component tests", () => {
  let server: PreviewServer;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
  });

  afterAll(async () => {
    server.httpServer.close();
  });

  test("renders the message", () => {
    const title = "title";
    const content = "content here";

    const rendered = render(<Message title={title} content={content} />);

    const { container } = rendered;

    expect(container.textContent).toBeDefined();
  });
});
