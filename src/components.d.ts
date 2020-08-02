import { Components as SomeOtherName } from 'site-switcher';

declare global {
    namespace JSX {
        export interface IntrinsicElements {
            'my-component': SomeOtherName.MyComponent;
        }
    }
}