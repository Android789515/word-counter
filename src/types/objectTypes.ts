export type Entries<Type> = {
    [key in keyof Type]: [ key, Type[key] ];
}[keyof Type][];