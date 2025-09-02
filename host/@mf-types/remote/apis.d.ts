
    export type RemoteKeys = 'remote/Button' | 'remote/Greeting';
    type PackageType<T> = T extends 'remote/Greeting' ? typeof import('remote/Greeting') :T extends 'remote/Button' ? typeof import('remote/Button') :any;