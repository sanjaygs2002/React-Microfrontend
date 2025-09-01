
    export type RemoteKeys = 'remote1/Count';
    type PackageType<T> = T extends 'remote1/Count' ? typeof import('remote1/Count') :any;