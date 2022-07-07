import {AuditInspector} from "../src/AuditInspector";
import * as assert from "assert";
import {hightMock} from "./AuditInspector.mock";

describe("AuditInspector", () => {
    let auditInspector: AuditInspector;

    beforeEach(function () {
        auditInspector = new AuditInspector();
    });

    it("should be an instance of AuditInspector", () => {
        return expect(auditInspector).toBeInstanceOf(AuditInspector);
    });

    it("should return high vulnerabilities", async () => {
        jest
            .spyOn(auditInspector, "loadData")
            .mockImplementation(() => {
                return Promise.resolve(hightMock.input);
            });

        await expect(auditInspector.runCommand()).resolves.toStrictEqual(hightMock.output);
    });
});