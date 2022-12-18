type InfoDescription = string;
type InfoValue = string | number | boolean;

export interface Info {
    description: InfoDescription;
    value: InfoValue;
}