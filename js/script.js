import {aleatorio, nome.} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaIniciar = document.querySelector(".tela-incial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click, iniciarJogo');

function iniciaJogo() {
    atual = 0;
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResutado.classList.remove(".mostrar");
    mostrarPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
   perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativa() {}

function mostraResultado() {
  caixaPerguntas.textContent = 'Após tudo isso, ${nome} morreu feliz';
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        if(opcaoSelecionada.proxima !== undefined) {
            atual = opcaoSelecionada.proxime;
        }else {
            mostraResultado();
            return;
        }
        mostraPergunta();
    }
  function mostraResultado() {
  caixaPerguntas.textContent = 'Após tudo isso, ${nome} morreu feliz';
    textResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
    


    function jogarNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
    }

    function substituiNome() {
        for(const pergunta os perguntas) {
            perguntas.enunciado = pergunta.enunciado.replace(/você/g, nome);
        }
    }
      substiuiNome();
