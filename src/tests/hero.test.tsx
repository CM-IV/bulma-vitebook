import { render } from "@testing-library/preact";
import { h } from "preact";
import { expect,test,describe,beforeAll,afterAll } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from 'vite';

import Hero from "../components/Hero/hero";
describe("hero component tests", () => {

    let server: PreviewServer

    beforeAll(async () => {
        server = await preview({ preview: { port: 3000 } });
      })

    afterAll(async() => {
        server.httpServer.close();
    })

    test("renders the hero", () => {
        const title = "title";
        const subtitle = "subtitle";

        const rendered = render(
            <Hero title={title} subtitle={subtitle}/>
        )

        const { container } = rendered;

        expect(container.textContent).toBeDefined();
    })
})