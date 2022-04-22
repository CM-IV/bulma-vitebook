import type { PageMeta } from '@vitebook/client';
import { Variant } from '@vitebook/preact';
import {
  ControlsAddon,
} from '@vitebook/preact/addons';
import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Hero from '../components/Hero/hero';

export const __pageMeta: PageMeta = {
    title: "Hero",
    description: "An Awesome Hero",
};

function HeroStory() {
    const [title, setTitle] = useState('This is a test title');
    const [subtitle, setSubTitle] = useState('Test subtitle');


    return (
        <Fragment>
            <Variant name="Default" description="The red hero.">
                <Hero 
                    title={title}
                    subtitle={subtitle}
                />
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
                Subtitle
                <input
                    class="input"
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubTitle(e.currentTarget?.value)}
                />
                </label>
            </ControlsAddon>
        </Fragment>
    )
}

HeroStory.displayName = "HeroStory";

export default HeroStory;