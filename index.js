import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupaca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";
import {Gerente} from "./funcionarios/Gerente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import { SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

const cliente1= new Cliente(`ricardo`, 4829472974, 12345);
const contaCorrenteRicardo= new ContaCorrente(1001, cliente1);
const poupanca=new ContaPoupaca(0, cliente1, 1001);
const diretor= new Diretor("rodrigo",10000,28291928);
const gerente= new Gerente("marta", 5000, 299283929);

diretor.cadastrarSenha(123456);
gerente.cadastrarSenha(123);

const gerenteEstaLogado= SistemaDeAutenticacao.login(diretor, 123456);
const diretorEstaLogado= SistemaDeAutenticacao.login(gerente, 123);
const cEstaLogado=SistemaDeAutenticacao.login(cliente1, 12345);

console.log(cEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);




