import type { PageMeta } from "@vitebook/client";
import { Variant } from "@vitebook/preact";
import { ControlsAddon } from "@vitebook/preact/addons";
import { Fragment } from "preact";
import { useState } from "preact/hooks";

import Footer from "../components/Footer/footer";

export const __pageMeta: PageMeta = {
  title: "Footer",
  description: "An Awesome Footer",
};

function FooterStory() {
  const [content, setContent] = useState("This is some content");

  return (
    <Fragment>
      <Variant name="Default" description="The footer.">
        <Footer content={content} />
      </Variant>

      <ControlsAddon>
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

FooterStory.displayName = "FooterStory";

export default FooterStory;
