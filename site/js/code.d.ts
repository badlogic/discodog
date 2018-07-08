declare module discodog {
    class Api {
        static post(endPoint: string, data: FormData, success: (data: any) => void, error: (e: any) => void): XMLHttpRequest;
    }
}
declare module discodog {
    class DiscodogApp {
        constructor();
    }
}
