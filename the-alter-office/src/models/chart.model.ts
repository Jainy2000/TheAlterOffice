// Type definitions for the JSON data structure
type Indicator = {
    id: string;
    value: string;
};

type Country = {
    id: string;
    value: string;
};

export type DataItem = {
    indicator: Indicator;
    country: Country;
    countryiso3code: string;
    date: string;
    value: number;
    unit: string;
    obs_status: string;
    decimal: number;
};