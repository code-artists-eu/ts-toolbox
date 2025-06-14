export declare const getCalendar: (year: number, month: number) => {
    date: Date;
    diffMonth?: boolean;
    day: number;
    YMD: {
        y: number;
        m: number;
        d: number;
    };
}[][];
