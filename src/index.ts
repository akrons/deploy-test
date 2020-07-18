export interface A {
    B: B;
}

export class B {
    main(): string {
        return 'Hello WORLD!'
    }
}

function init(b: B) {
    b.main();
}
