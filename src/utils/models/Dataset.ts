import { DatasetInterface } from "../interfaces";

export class Dataset implements DatasetInterface {
    private label: string;
    private data: Array<number>;
    private backgroundColor: string;
    private borderColor: string;
    private fill: boolean;

    constructor(label: string,
                data: Array<number>,
                backgroundColor: string,
                borderColor: string,
                fill: boolean) {
        this.label = label;
        this.data = data;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.fill = fill;
    }

    public static defaultDataset(): Dataset {
        return new Dataset("Price", [], "rgb(2, 222, 151)", "rgba(2, 222, 151, 0.2)", false);
    }
    

    public getLabel(): string {
        return this.label;
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    public getData(): number[] {
        return this.data;
    }

    public setData(data: number[]): void {
        this.data = data;
    }

    public getBackgroundColor(): string {
        return this.backgroundColor;
    }

    public setBackgroundColor(backgroundColor: string): void {
        this.backgroundColor = backgroundColor;
    }

    public getBorderColor(): string {
        return this.borderColor;
    }

    public setBorderColor(borderColor: string): void {
        this.borderColor = borderColor;
    }

    public getFill(): boolean {
        return this.fill;
    }

    public setFill(fill: boolean): void {
        this.fill = fill;
    }
}