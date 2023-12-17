export interface OrganizationTree {
    id: Number;
    name: string;
    style?: Object;
    children?: OrganizationTree[];
}

export interface OrganizationData {
    id: number;
    name: string;
    parentid: number;
    [key: string]: any;
}