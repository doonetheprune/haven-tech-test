import * as sampleData from "../sampleData.json";

export class AuditInspector {
  levels: ["Critical", "..."];

  loadData(): Promise<any> {
    return Promise.resolve(sampleData);
  }

  runCommand() {
    return { a: 1 };
  }
}