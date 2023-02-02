
//classe abstrata
export class conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == conta){
            throw new Error("voce nao deveria instaciarum objeto do tipo conta diretamente");
         }
        this._saldo=saldoInicial;
        this._cliente=cliente;
        this._agencia=agencia;
       
    }
    get saldo(){
        return  this._saldo;
     }
 
     set cliente(novoValor){
     if(novoValor instanceof Cliente){
     this._cliente= novoValor;}
     }
     
     get cliente(){
         return this._cliente;
     }
 
     transferir(valor, conta){
         this.sacar(valor);
         conta.depositar(valor);
     }
 
     sacar(valor) {//metodo abstrato
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){//metodo protegido
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }
 
     depositar(valor){
         if(valor<0){
             return;
         }
         this._saldo+=valor;
     }
}