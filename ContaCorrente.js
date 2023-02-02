
import { conta } from "./conta.js";

export class ContaCorrente extends conta{
    static numeroDeContas=0;

   
  constructor(agencia, cliente){
    super(0,cliente,agencia);
    ContaCorrente.numeroDeContas+= 1;
  }

  //sobreescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
}

}