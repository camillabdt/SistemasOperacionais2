# 🖥️ Simulador de Gerenciamento de Entrada e Saída (E/S) com Interrupção

## 📋 Descrição

Este projeto é uma **simulação interativa** do gerenciamento de entrada e saída (E/S) em um sistema operacional. O simulador reproduz o comportamento de um processador lidando com interrupções de dispositivos periféricos (teclado, impressora e disco), demonstrando como o sistema operacional gerencia a execução de processos com armazenamento e recuperação de contexto.

**Desenvolvido para:** Disciplina de Sistemas Operacionais - UNIPAMPA  
**Professor:** Aline Mello  
**Tipo:** Trabalho Prático 3 (TP3)

---

## ✨ Características Principais

✅ **Simulação Realista de E/S**
- Geração aleatória de interrupções de 3 dispositivos diferentes
- Processamento baseado em prioridades

✅ **Gerenciamento de Prioridades**
- Teclado → Prioridade **Alta** 🔴
- Impressora → Prioridade **Média** 🟡
- Disco → Prioridade **Baixa** 🔵

✅ **Armazenamento e Restauração de Contexto**
- Salva Program Counter (PC) e Registradores (R1, R2)
- Permite retomada exata do processo após interrupção

✅ **Interface Gráfica Interativa**
- Visualização em tempo real do estado do processo
- Fila de interrupções com reordenação automática
- Log detalhado de todos os eventos
- Edição manual de registradores

✅ **Exportação de Logs**
- Geração de arquivo `.txt` com histórico completo
- Informações estruturadas de cada evento

---

## 🚀 Como Usar

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

### Instalação

```bash
# Entrar na pasta do projeto
cd tp3

# Instalar dependências
npm install
```

### Executar a Aplicação

```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm run build
npm preview
```

A aplicação estará disponível em `http://localhost:5173` (ou a porta indicada no terminal)

---

## 📖 Como Usar o Simulador

### 1. **Botões de Controle**

| Botão | Função |
|-------|--------|
| 🟢 **Rodar Contínuo** | Executa a simulação automaticamente a cada 800ms |
| 🔵 **Próximo Passo** | Avança um passo de tempo manualmente |
| 🔴 **Reset** | Reinicia a simulação do zero |
| 📥 **Exportar Log** | Baixa um arquivo `.txt` com todos os eventos |

### 2. **Painel de Estado do Processo**

Mostra informações em tempo real:
- **Status**: Em Execução / Interrompido / Tratando Interrupção
- **PC (Program Counter)**: Quantidade de instruções executadas
- **Registradores**: R1 e R2 com opção de edição

💡 Clique em **"Editar"** para modificar os valores dos registradores

### 3. **Fila de Interrupções**

Exibe todas as interrupções pendentes:
- 🟢 **Destacada em verde**: Próxima a ser tratada
- Ordenadas automaticamente por prioridade
- Mostra o tempo em que foram geradas

### 4. **Log de Eventos**

Histórico completo com:
- Hora de cada evento
- Tipo de evento (Execução, Interrupção, Tratamento, Retomada)
- Dispositivo afetado e prioridade
- Estado do processo antes e depois

---

## 🔄 Fluxo de Funcionamento

### Ciclo de Vida de uma Interrupção

```
┌─────────────────────────────────┐
│ PASSO 1: INTERRUPÇÃO CHEGA      │
│ - Dispositivo gera interrupção  │
│ - Contexto é SALVO              │
│ - Status: "Interrompido"        │
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│ PASSO 2: TRATAMENTO INICIA      │
│ - Fila é reordenada por         │
│   prioridade                    │
│ - Status: "Tratando Interrupção"│
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│ PASSO 3: PROCESSO RETOMA        │
│ - Interrupção é removida        │
│ - Contexto é RESTAURADO         │
│ - Status: "Em Execução"         │
└─────────────────────────────────┘
```

### Exemplo de Timeline

```
TEMPO    EVENTO                          FILA              PC    R1
──────────────────────────────────────────────────────────────────
  0     Processo inicia                 []               0     10
  5     Execução normal                 []               5     15
  6     Teclado interrompe (SALVA)      [Teclado]        5     15
  7     Prepara tratamento              [Teclado]        5     15
  8     Teclado tratado (RESTAURA)      []               5     15
  9     Processo retoma                 []               6     16
```

---

## 📁 Estrutura do Projeto

```
tp3/
├── src/
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx               # Entrada da aplicação
│   ├── index.css              # Estilos globais
│   │
│   ├── components/
│   │   ├── Controls.tsx        # Botões de controle
│   │   ├── ProcessState.tsx    # Estado do processo
│   │   ├── InterruptQueue.tsx  # Fila de interrupções
│   │   └── EventLog.tsx        # Log de eventos
│   │
│   ├── core/
│   │   ├── types.ts           # Tipos e interfaces
│   │   ├── scheduler.ts       # Lógica de escalonamento
│   │   └── interrupts.ts      # Lógica de interrupções
│   │
│   └── lib/
│       ├── exportLog.ts       # Exportação de logs
│       ├── colors.ts          # Paleta de cores
│       └── format.ts          # Funções de formatação
│
├── public/                     # Assets estáticos
├── package.json               # Dependências
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
└── README.md                 # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **ESLint** - Linter

---

## 📚 Conceitos Implementados

### 1. **Interrupções de Hardware**
Simula como o processador é interrompido por dispositivos periféricos durante a execução de um processo.

### 2. **Fila de Prioridades**
Implementa uma fila que reordena as interrupções conforme sua importância, não apenas por ordem de chegada.

### 3. **Armazenamento de Contexto**
Demonstra como o SO salva o estado completo de um processo (PC e registradores) para posterior restauração.

### 4. **Restauração de Contexto**
Mostra como o processo pode retomar exatamente de onde parou, com todos os valores preservados.

### 5. **Log de Auditoria**
Mantém registro detalhado de todos os eventos para análise e debugging.

---

## 🎓 Requisitos Atendidos

- ✅ Simulação de dispositivos de E/S com geração aleatória de interrupções
- ✅ Três dispositivos com prioridades diferentes (Alta, Média, Baixa)
- ✅ Identificação, registro e tratamento de interrupções por prioridade
- ✅ Armazenamento e recuperação de contexto do processo
- ✅ Log detalhado com estado antes e depois de cada interrupção
- ✅ Exportação de log em arquivo de texto
- ✅ Interface gráfica clara e intuitiva
- ✅ Código bem estruturado com boas práticas

---

## 📝 Exemplo de Log Exportado

```
SIMULADOR DE GERENCIAMENTO DE E/S COM INTERRUPÇÃO
Gerado em: 17/11/2025, 14:30:45
================================================================================

[Tempo 0] - Execução
Processo principal em execução.

────────────────────────────────────────────────────────────────────────────

[Tempo 6] - Interrupção
Armazenando contexto do processo principal.
Dispositivo: Teclado
Prioridade: Alta
Contexto ANTES da interrupção:
  - PC (Program Counter): 5
  - R1: 15
  - R2: 20
  - Status: Em Execução
Contexto DEPOIS da interrupção:
  - PC (Program Counter): 5
  - R1: 15
  - R2: 20
  - Status: Interrompido

────────────────────────────────────────────────────────────────────────────

[Tempo 7] - Interrupção
Iniciando tratamento da interrupção de Teclado.
Dispositivo: Teclado
Prioridade: Alta

────────────────────────────────────────────────────────────────────────────

[Tempo 8] - Tratamento
Tratando a interrupção de Teclado (Prio: Alta).
Dispositivo: Teclado
Prioridade: Alta

────────────────────────────────────────────────────────────────────────────
```

---

## 🔧 Funcionalidades Avançadas

### Edição de Registradores
Você pode modificar os valores de R1 e R2 em tempo de execução para testar diferentes cenários.

### Simulação Manual vs Automática
- **Manual**: Clique em "Próximo Passo" para avançar a cada instrução
- **Automática**: Clique em "Rodar Contínuo" para execução contínua (800ms por passo)

### Exportação de Dados
Baixe o histórico completo em `.txt` para análise posterior ou para entregar como relatório.

---

## 📊 Visualização de Dados

A interface exibe:
- **Estado do Processo**: PC, Registradores, Status
- **Fila Dinâmica**: Reordenação automática por prioridade
- **Log em Tempo Real**: Todos os eventos aparecem conforme ocorrem
- **Contexto Salvo**: Informações do estado antes e depois de cada interrupção

---

## 🐛 Troubleshooting

### Não vejo interrupções aparecer?
- Clique em "Rodar Contínuo" ou "Próximo Passo" várias vezes
- As interrupções têm 50% de chance de aparecer a cada passo
- Paciência! Pode demorar um pouco

### Os botões não funcionam?
- Verifique se o servidor está rodando (`npm run dev`)
- Recarregue a página (F5 ou Ctrl+R)

### Erro ao exportar log?
- Certifique-se de que tem pelo menos um evento no log
- O botão "Exportar Log" fica desativado se a lista está vazia

---

## 📞 Suporte

Para dúvidas sobre o trabalho, entre em contato com:
- **Professor**: Aline Mello
- **Email**: alinemello@unipampa.edu.br

---

## 📄 Licença

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Sistemas Operacionais da UNIPAMPA.

---

## ✍️ Autor(a)

Desenvolvido como Trabalho Prático 3 (TP3) da disciplina de Sistemas Operacionais.

---

## 🎯 Objetivo Educacional

Este simulador foi criado para ajudar na compreensão de conceitos fundamentais de Sistemas Operacionais:
- Como o processador é interrompido
- Como o contexto é preservado
- Como as prioridades funcionam
- Como um SO gerencia múltiplos eventos simultâneos

Aproveite para aprender! 🚀

---

**Última atualização:** 17 de novembro de 2025
