export declare interface Event {

    constructor(): void;

    id: string,
    name: string,
    description: string,
    starting_date: string,
    ending_date: string,
    type: string,
    room: Array<any>,
    eventTranslations: Array<any>,
    reviews: Array<any>,
    status: string
}