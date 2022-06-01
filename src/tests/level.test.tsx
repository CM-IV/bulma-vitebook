import { render } from "@testing-library/preact";
import { h, Fragment } from "preact";
import { expect, test, describe, beforeAll, afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";

import Level from "../components/Level/level";
describe("level component tests", () => {
  let server: PreviewServer;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
  });

  afterAll(async () => {
    server.httpServer.close();
  });

  test("renders the level", () => {
    const headingOne = "headingOne";
    const headingTwo = "headingTwo";
    const titleOne = "500K";
    const titleTwo = 87;

    const rendered = render(
      <Level
        headingOne={headingOne}
        headingTwo={headingTwo}
        titleOne={titleOne}
        titleTwo={titleTwo}
      />,
    );

    const { container } = rendered;

    expect(container.textContent).toBeDefined();
  });
});
