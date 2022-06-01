import type { PageMeta } from "@vitebook/client";
import { Variant } from "@vitebook/preact";
import { ControlsAddon } from "@vitebook/preact/addons";
import { Fragment } from "preact";
import { useState } from "preact/hooks";

import Level from "../components/Level/level";

export const __pageMeta: PageMeta = {
  title: "Level",
  description: "An Awesome Level",
};

function LevelStory() {
  const [headingOne, setHeadingOne] = useState("Header");
  const [headingTwo, setHeadingTwo] = useState("Header");
  const [titleOne, setTitleOne] = useState("800K");
  const [titleTwo, setTitleTwo] = useState("50");

  return (
    <Fragment>
      <Variant name="Default" description="The red hero.">
        <Level
          headingOne={headingOne}
          headingTwo={headingTwo}
          titleOne={titleOne}
          titleTwo={titleTwo}
        />
      </Variant>

      <ControlsAddon>
        <label class="label">
          HeadingOne
          <input
            class="input"
            type="text"
            value={headingOne}
            onChange={(e) => setHeadingOne(e.currentTarget?.value)}
          />
        </label>
        <label class="label">
          HeadingTwo
          <input
            class="input"
            type="text"
            value={headingTwo}
            onChange={(e) => setHeadingTwo(e.currentTarget?.value)}
          />
        </label>
        <label class="label">
          SubTitleOne
          <input
            class="input"
            type="text"
            value={titleOne}
            onChange={(e) => setTitleOne(e.currentTarget?.value)}
          />
        </label>
        <label class="label">
          SubTitleTwo
          <input
            class="input"
            type="number"
            value={titleTwo}
            onChange={(e) => setTitleTwo(e.currentTarget?.value)}
          />
        </label>
      </ControlsAddon>
    </Fragment>
  );
}

LevelStory.displayName = "LevelStory";

export default LevelStory;
