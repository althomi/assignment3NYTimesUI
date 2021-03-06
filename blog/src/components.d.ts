/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArticleNina {
        "arrow": "articlearrow.png";
        "brandname": string;
        "date": string;
        "headline": string;
        "image": "placeholderstencil.png";
        "readmore": string;
        "text": string;
        "theme": string;
    }
    interface ButtonAlischa {
    }
    interface ButtonkundenkontoAlischa {
    }
    interface CookiebannerNina {
        "button": string;
        "link": string;
        "linktext": string;
        "text": string;
    }
    interface FooterLarissa {
        "dritter": string;
        "dritterlink": string;
        "erster": string;
        "ersterlink": string;
        "zweiter": string;
        "zweiterlink": string;
    }
    interface HeaderKatharina {
        "burger": "Hamburger_icon.png";
        "image2": string;
        "logo": string;
        "search": HTMLBodyElement;
        "textfive": string;
        "textfour": string;
        "textone": string;
        "textthree": string;
        "texttwo": string;
    }
    interface LoginAlischa {
        "boxueberschrift": string;
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
    }
    interface SliderKatharina {
        "bildone": string;
        "bildthree": string;
        "bildtwo": string;
        "nextBtn": Element;
        "prevBtn": Element;
    }
}
declare global {
    interface HTMLArticleNinaElement extends Components.ArticleNina, HTMLStencilElement {
    }
    var HTMLArticleNinaElement: {
        prototype: HTMLArticleNinaElement;
        new (): HTMLArticleNinaElement;
    };
    interface HTMLButtonAlischaElement extends Components.ButtonAlischa, HTMLStencilElement {
    }
    var HTMLButtonAlischaElement: {
        prototype: HTMLButtonAlischaElement;
        new (): HTMLButtonAlischaElement;
    };
    interface HTMLButtonkundenkontoAlischaElement extends Components.ButtonkundenkontoAlischa, HTMLStencilElement {
    }
    var HTMLButtonkundenkontoAlischaElement: {
        prototype: HTMLButtonkundenkontoAlischaElement;
        new (): HTMLButtonkundenkontoAlischaElement;
    };
    interface HTMLCookiebannerNinaElement extends Components.CookiebannerNina, HTMLStencilElement {
    }
    var HTMLCookiebannerNinaElement: {
        prototype: HTMLCookiebannerNinaElement;
        new (): HTMLCookiebannerNinaElement;
    };
    interface HTMLFooterLarissaElement extends Components.FooterLarissa, HTMLStencilElement {
    }
    var HTMLFooterLarissaElement: {
        prototype: HTMLFooterLarissaElement;
        new (): HTMLFooterLarissaElement;
    };
    interface HTMLHeaderKatharinaElement extends Components.HeaderKatharina, HTMLStencilElement {
    }
    var HTMLHeaderKatharinaElement: {
        prototype: HTMLHeaderKatharinaElement;
        new (): HTMLHeaderKatharinaElement;
    };
    interface HTMLLoginAlischaElement extends Components.LoginAlischa, HTMLStencilElement {
    }
    var HTMLLoginAlischaElement: {
        prototype: HTMLLoginAlischaElement;
        new (): HTMLLoginAlischaElement;
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
    interface HTMLSliderKatharinaElement extends Components.SliderKatharina, HTMLStencilElement {
    }
    var HTMLSliderKatharinaElement: {
        prototype: HTMLSliderKatharinaElement;
        new (): HTMLSliderKatharinaElement;
    };
    interface HTMLElementTagNameMap {
        "article-nina": HTMLArticleNinaElement;
        "button-alischa": HTMLButtonAlischaElement;
        "buttonkundenkonto-alischa": HTMLButtonkundenkontoAlischaElement;
        "cookiebanner-nina": HTMLCookiebannerNinaElement;
        "footer-larissa": HTMLFooterLarissaElement;
        "header-katharina": HTMLHeaderKatharinaElement;
        "login-alischa": HTMLLoginAlischaElement;
        "my-component": HTMLMyComponentElement;
        "searchmask-larissa": HTMLSearchmaskLarissaElement;
        "slider-katharina": HTMLSliderKatharinaElement;
    }
}
declare namespace LocalJSX {
    interface ArticleNina {
        "arrow"?: "articlearrow.png";
        "brandname"?: string;
        "date"?: string;
        "headline"?: string;
        "image"?: "placeholderstencil.png";
        "readmore"?: string;
        "text"?: string;
        "theme"?: string;
    }
    interface ButtonAlischa {
        "onOnClick"?: (event: CustomEvent<any>) => void;
    }
    interface ButtonkundenkontoAlischa {
        "onOnClick"?: (event: CustomEvent<any>) => void;
    }
    interface CookiebannerNina {
        "button"?: string;
        "link"?: string;
        "linktext"?: string;
        "onButtonSchliessen"?: (event: CustomEvent<any>) => void;
        "text"?: string;
    }
    interface FooterLarissa {
        "dritter"?: string;
        "dritterlink"?: string;
        "erster": string;
        "ersterlink": string;
        "zweiter"?: string;
        "zweiterlink"?: string;
    }
    interface HeaderKatharina {
        "burger"?: "Hamburger_icon.png";
        "image2"?: string;
        "logo"?: string;
        "search"?: HTMLBodyElement;
        "textfive"?: string;
        "textfour"?: string;
        "textone"?: string;
        "textthree"?: string;
        "texttwo"?: string;
    }
    interface LoginAlischa {
        "boxueberschrift"?: string;
        "onOnClick"?: (event: CustomEvent<any>) => void;
        "onOnClickOpen"?: (event: CustomEvent<any>) => void;
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
        "onEventSearchbar"?: (event: CustomEvent<any>) => void;
        "onEventToggle"?: (event: CustomEvent<any>) => void;
    }
    interface SliderKatharina {
        "bildone"?: string;
        "bildthree"?: string;
        "bildtwo"?: string;
        "nextBtn"?: Element;
        "prevBtn"?: Element;
    }
    interface IntrinsicElements {
        "article-nina": ArticleNina;
        "button-alischa": ButtonAlischa;
        "buttonkundenkonto-alischa": ButtonkundenkontoAlischa;
        "cookiebanner-nina": CookiebannerNina;
        "footer-larissa": FooterLarissa;
        "header-katharina": HeaderKatharina;
        "login-alischa": LoginAlischa;
        "my-component": MyComponent;
        "searchmask-larissa": SearchmaskLarissa;
        "slider-katharina": SliderKatharina;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "article-nina": LocalJSX.ArticleNina & JSXBase.HTMLAttributes<HTMLArticleNinaElement>;
            "button-alischa": LocalJSX.ButtonAlischa & JSXBase.HTMLAttributes<HTMLButtonAlischaElement>;
            "buttonkundenkonto-alischa": LocalJSX.ButtonkundenkontoAlischa & JSXBase.HTMLAttributes<HTMLButtonkundenkontoAlischaElement>;
            "cookiebanner-nina": LocalJSX.CookiebannerNina & JSXBase.HTMLAttributes<HTMLCookiebannerNinaElement>;
            "footer-larissa": LocalJSX.FooterLarissa & JSXBase.HTMLAttributes<HTMLFooterLarissaElement>;
            "header-katharina": LocalJSX.HeaderKatharina & JSXBase.HTMLAttributes<HTMLHeaderKatharinaElement>;
            "login-alischa": LocalJSX.LoginAlischa & JSXBase.HTMLAttributes<HTMLLoginAlischaElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "searchmask-larissa": LocalJSX.SearchmaskLarissa & JSXBase.HTMLAttributes<HTMLSearchmaskLarissaElement>;
            "slider-katharina": LocalJSX.SliderKatharina & JSXBase.HTMLAttributes<HTMLSliderKatharinaElement>;
        }
    }
}
