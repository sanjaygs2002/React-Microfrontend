
    export type RemoteKeys = 'remote2/Decrement';
    type PackageType<T> = T extends 'remote2/Decrement' ? typeof import('remote2/Decrement') :any;