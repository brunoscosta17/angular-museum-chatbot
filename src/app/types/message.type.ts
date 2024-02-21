export type Message = {
    type: 'request' | 'response';
    content: string;
}