
import { conta } from "./conta.js";
import { ContaCorrente } from "./ContaCorrente.js";

export class ContaPoupaca extends conta{
    static numeroDeContas=0;

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial,cliente,agencia);
        ContaPoupaca.numeroDeContas+=1;
    }
   
sacar(valor){//sobreescrevendo
const taxa=1.02;
return this._sacar(valor, taxa);
}

}