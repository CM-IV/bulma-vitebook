import { ComponentChildren, h } from "preact";

export type FooterProps = {
  content: ComponentChildren; //Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
};

function Footer(props: FooterProps) {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>© {props.content}</p>
      </div>
    </footer>
  );
}

export default Footer;
