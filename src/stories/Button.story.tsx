import type { PageMeta } from "@vitebook/client";
import { Variant } from "@vitebook/preact";
import {
  ControlsAddon,
  eventCallback,
  EventsAddon,
} from "@vitebook/preact/addons";
import { Fragment } from "preact";
import { useState } from "preact/hooks";

import Button from "../components/Button/button";

export const __pageMeta: PageMeta = {
  title: "Button",
  description: "An Awesome Button",
};

function ButtonStory() {
  const [title, setTitle] = useState("Click Me");
  const [disabled, setDisabled] = useState(false);

  return (
    <Fragment>
      <Variant name="Enabled" description="The red danger button.">
        <Button disabled={disabled} onClick={eventCallback}>
          {title}
        </Button>
      </Variant>

      <Variant
        name="Disabled"
        description="The disabled button."
        onEnter={() => {
          setDisabled(true);
        }}
        onExit={() => {
          setDisabled(false);
        }}
      >
        <Button disabled={disabled}>{title}</Button>
      </Variant>

      <ControlsAddon>
        <label class="label">
          Title
          <input
            class="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget?.value)}
          />
        </label>
        <label class="checkbox" style={{ marginTop: "24px" }}>
          Disabled
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.currentTarget?.checked)}
          />
        </label>
      </ControlsAddon>

      <EventsAddon />
    </Fragment>
  );
}

ButtonStory.displayName = "ButtonStory";

export default ButtonStory;
