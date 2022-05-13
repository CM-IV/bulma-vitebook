import type { PageMeta } from "@vitebook/client";
import { Variant } from "@vitebook/preact";
import { ControlsAddon } from "@vitebook/preact/addons";
import { Fragment } from "preact";
import { useState } from "preact/hooks";

import Message from "../components/Message/message";

export const __pageMeta: PageMeta = {
  title: "Message",
  description: "An Awesome Message",
};

function MesageStory() {
  const [content, setContent] = useState("This is some content");
  const [title, setTitle] = useState("This is a title");

  return (
    <Fragment>
      <Variant name="Default" description="The card.">
        <Message title={title} content={content} />
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
        <label class="label">
          Description
          <textarea
            class="textarea"
            type="input"
            value={content}
            onChange={(e) => setContent(e.currentTarget?.value)}
          />
        </label>
      </ControlsAddon>
    </Fragment>
  );
}

MesageStory.displayName = "MesageStory";

export default MesageStory;
