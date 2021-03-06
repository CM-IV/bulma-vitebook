import { render } from "@testing-library/preact";
import { h } from "preact";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";

import Card from "../components/Card/card";
describe("card component tests", () => {
  let server: PreviewServer;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
  });

  afterAll(async () => {
    server.httpServer.close();
  });

  test("renders the card", () => {
    const title = "title";
    const content = "content here";
    const cardImg = "https://bulma.io/images/placeholders/1280x960.png";

    const rendered = render(
      <Card title={title} cardImg={cardImg} content={content} />,
    );

    const { container } = rendered;

    expect(container.textContent).toBeDefined();
  });
});
