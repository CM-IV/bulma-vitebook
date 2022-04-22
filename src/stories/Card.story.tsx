import type { PageMeta } from '@vitebook/client';
import { Variant } from '@vitebook/preact';
import {
  ControlsAddon,
} from '@vitebook/preact/addons';
import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Card from '../components/Card/card';

export const __pageMeta: PageMeta = {
    title: "Card",
    description: "An Awesome Card",
};

function CardStory() {
    const [content, setContent] = useState('This is some content');
    const [title, setTitle] = useState('This is a title');
    const [cardImg, setCardImg] = useState('https://bulma.io/images/placeholders/1280x960.png');


    return (
        <Fragment>
            <Variant name="Default" description="The card.">
                <Card
                    title={title}
                    cardImg={cardImg}
                    content={content}
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
                Image
                <input
                    class="input"
                    type="text"
                    value={cardImg}
                    onChange={(e) => setCardImg(e.currentTarget?.value)}
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
    )
}

CardStory.displayName = "CardStory";

export default CardStory;