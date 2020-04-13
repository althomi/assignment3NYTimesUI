/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FooterLarissa {
        "dritter": string;
        "dritterlink": string;
        "erster": string;
        "ersterlink": string;
        "zweiter": string;
        "zweiterlink": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SearchmaskLarissa {
        "acctivated": boolean;
    }
}
declare global {
    interface HTMLFooterLarissaElement extends Components.FooterLarissa, HTMLStencilElement {
    }
    var HTMLFooterLarissaElement: {
        prototype: HTMLFooterLarissaElement;
        new (): HTMLFooterLarissaElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSearchmaskLarissaElement extends Components.SearchmaskLarissa, HTMLStencilElement {
    }
    var HTMLSearchmaskLarissaElement: {
        prototype: HTMLSearchmaskLarissaElement;
        new (): HTMLSearchmaskLarissaElement;
    };
    interface HTMLElementTagNameMap {
        "footer-larissa": HTMLFooterLarissaElement;
        "my-component": HTMLMyComponentElement;
        "searchmask-larissa": HTMLSearchmaskLarissaElement;
    }
}
declare namespace LocalJSX {
    interface FooterLarissa {
        "dritter"?: string;
        "dritterlink"?: string;
        "erster": string;
        "ersterlink": string;
        "zweiter"?: string;
        "zweiterlink"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SearchmaskLarissa {
        "acctivated"?: boolean;
    }
    interface IntrinsicElements {
        "footer-larissa": FooterLarissa;
        "my-component": MyComponent;
        "searchmask-larissa": SearchmaskLarissa;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "footer-larissa": LocalJSX.FooterLarissa & JSXBase.HTMLAttributes<HTMLFooterLarissaElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "searchmask-larissa": LocalJSX.SearchmaskLarissa & JSXBase.HTMLAttributes<HTMLSearchmaskLarissaElement>;
        }
    }
}
