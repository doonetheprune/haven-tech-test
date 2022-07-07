import { AuditInspector } from "./AuditInspector";



async function  a (){
    const auditInspector = new AuditInspector();
    console.log(await auditInspector.runCommand());
};

a();