import { ComponentChildren, h } from "preact";

export type HeroProps = {
    title: ComponentChildren;
    subtitle: ComponentChildren;
}

function Hero(props: HeroProps) {
    return (
        <section class="hero is-danger">
            <div class="hero-body">
                <header>
                    <h1 class="title">{props.title}</h1>
                    <h2 class="subtitle">{props.subtitle}</h2>
                </header>
            </div>
        </section>
    )
}

export default Hero;