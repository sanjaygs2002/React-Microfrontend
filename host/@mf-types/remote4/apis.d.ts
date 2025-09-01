
    export type RemoteKeys = 'remote4/List';
    type PackageType<T> = T extends 'remote4/List' ? typeof import('remote4/List') :any;