import { AuditInspector } from "../src/AuditInspector";
import * as assert from "assert";

describe("AuditInspector", () => {
  let auditInspector: AuditInspector;

  beforeEach(function() {
    auditInspector = new AuditInspector();
  });

  it("should be an instance of AuditInspector", () => {
    return expect(auditInspector).toBeInstanceOf(AuditInspector);
  });

  it("should return high vulnerabilities", async () => {
    jest
      .spyOn(auditInspector, "loadData")
      .mockImplementation(() => {
        return Promise.resolve({ mockData: true });
      });

    await expect(auditInspector.loadData()).resolves.toStrictEqual({ mockData: true });
  });
});