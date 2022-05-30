import { render } from "@testing-library/preact";
import { h } from "preact";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";

import Footer from "../components/Footer/footer";
describe("footer component tests", () => {
  let server: PreviewServer;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
  });

  afterAll(async () => {
    server.httpServer.close();
  });

  test("renders the footer", () => {
    const content = "content here";

    const rendered = render(<Footer content={content} />);

    const { container } = rendered;

    expect(container.textContent).toBeDefined();
  });
});
