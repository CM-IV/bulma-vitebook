import { ComponentChildren, h } from "preact";

export type CardProps = {
    content: ComponentChildren; //Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
    title: string;
    cardImg: string; //https://bulma.io/images/placeholders/1280x960.png
}

function Card(props: CardProps) {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={props.cardImg} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-header">
                <div class="card-header-title">{props.title}</div>
            </div>
            <div class="card-content is-flex-wrap-wrap">

                <div class="content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Card;