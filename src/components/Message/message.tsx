import { ComponentChildren, h } from "preact";

export type MessageProps = {
  content: ComponentChildren; //Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
  title: string;
};

function Message(props: MessageProps) {
  return (
    <article class="message">
      <div class="message-header">
        <h1 class="subtitle has-text-white">{props.title}</h1>
      </div>
      <div class="message-body">{props.content}</div>
    </article>
  );
}

export default Message;
