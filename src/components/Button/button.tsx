import { ComponentChildren , h } from "preact";


export type ButtonProps = {
    disabled?: boolean;
    onClick?: (e: Event) => void;
    children?: ComponentChildren;
}

function Button(props: ButtonProps) {
                        return (
        <button 
            class="button is-danger"
            {...props}
        >
            {props.children}
        </button>
    )
}

Button.displayName = "Button"

export default Button;