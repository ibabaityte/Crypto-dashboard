import { FormattedDataInterface } from "../interfaces";
import { Dataset } from "./Dataset";

export class FormattedData implements FormattedDataInterface {
    private labels: Array<string>;
    private datasets: Array<Dataset>;

    constructor(labels: Array<string>, datasets: Array<Dataset>) {
        this.labels = labels;
        this.datasets = datasets;
    }

    public static defaultFormattedData() {
        return new FormattedData([], [Dataset.defaultDataset()]);
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public setLabels(labels: Array<string>): void {
        this.labels = labels
    }

    public getDatasets() {
        return this.datasets;
    }

    public setDatasets(datasets: Array<Dataset>) {
        this.datasets = datasets;
    }
}