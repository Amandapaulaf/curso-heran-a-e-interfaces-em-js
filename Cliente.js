export class Cliente{

    constructor(nome,cpf, senha){
        this._cpf=cpf;
        this.nome=nome;
        this._senha=senha;
    }
    get cpf(){
        return this._cpf;
    }

    autenticar(senha){
        return senha==this._senha;

    }

}