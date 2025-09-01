
    export type RemoteKeys = 'remote3/Fetch';
    type PackageType<T> = T extends 'remote3/Fetch' ? typeof import('remote3/Fetch') :any;