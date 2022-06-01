import { ComponentChildren, h } from "preact";

export type LevelProps = {
  headingOne: ComponentChildren;
  headingTwo: ComponentChildren;
  titleOne: ComponentChildren;
  titleTwo: ComponentChildren;
};

function Level(props: LevelProps) {
  return (
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{props.headingOne}</p>
          <p class="title">{props.titleOne}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{props.headingTwo}</p>
          <p class="title">{props.titleTwo}</p>
        </div>
      </div>
    </nav>
  );
}

export default Level;
