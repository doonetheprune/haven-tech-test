import * as sampleData from "../sampleData.json";
import _ from 'lodash';

export class AuditInspector {
    levels: Array<string>;

    constructor() {
        this.levels = ['critical', 'high', 'moderate', 'low', 'info'];
    }

    loadData(): Promise<any> {
        return Promise.resolve(_.cloneDeep(sampleData));
    }

    async runCommand() {
        const data = await this.loadData();

        const dataBySeverity = _.groupBy(data.vulnerabilities, 'severity');

        const highestSeverity = this.levels.reduce((highestLevel: any, level: string) => {
            if (highestLevel === null && _.isEmpty(dataBySeverity[level]) === false) {
                highestLevel = dataBySeverity[level];
            }
            return highestLevel;
        }, null);

        data.vulnerabilities = highestSeverity.reduce((vulnerabilities: [string, object], module: any) => {
            vulnerabilities[module.name] = module;
            return vulnerabilities;
        }, {});

        return data;
    }
}