# 🖥️ Simulador de Gerenciamento de Entrada e Saída (E/S) com Interrupção# 🖥️ Simulador de Gerenciamento de Entrada e Saída (E/S) com Interrupção



<div align="center">## 📋 Descrição



![I/O Management](https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif)



Este repositório contém uma **simulação interativa** do gerenciamento de entrada e saída (E/S) em um sistema operacional. O simulador reproduz o comportamento de um processador lidando com interrupções de dispositivos periféricos (teclado, impressora e disco), demonstrando como o sistema operacional gerencia a execução de processos com armazenamento e recuperação de contexto.



**Sistema Operacional Gerenciando Múltiplos Dispositivos de E/S** 🔄**Desenvolvido para:** Disciplina de Sistemas Operacionais - UNIPAMPA  

**Professor:** Aline Mello  

</div>**Tipo:** Trabalho Prático 3 (TP3)



------



## 📋 Descrição## ✨ Características Principais



Este repositório contém uma **simulação interativa** do gerenciamento de entrada e saída (E/S) em um sistema operacional. O simulador reproduz o comportamento de um processador lidando com interrupções de dispositivos periféricos (teclado, impressora e disco), demonstrando como o sistema operacional gerencia a execução de processos com armazenamento e recuperação de contexto.✅ **Simulação Realista de E/S**

- Geração aleatória de interrupções de 3 dispositivos diferentes

**Desenvolvido para:** Disciplina de Sistemas Operacionais - UNIPAMPA  - Processamento baseado em prioridades

**Professor:** Aline Mello  

**Tipo:** Trabalho Prático 3 (TP3)✅ **Gerenciamento de Prioridades**

- Teclado → Prioridade **Alta** 🔴

---- Impressora → Prioridade **Média** 🟡

- Disco → Prioridade **Baixa** 🔵

## ✨ Características Principais

✅ **Armazenamento e Restauração de Contexto**

✅ **Simulação Realista de E/S**- Salva Program Counter (PC) e Registradores (R1, R2)

- Geração aleatória de interrupções de 3 dispositivos diferentes- Permite retomada exata do processo após interrupção

- Processamento baseado em prioridades

✅ **Interface Gráfica Interativa**

✅ **Gerenciamento de Prioridades**- Visualização em tempo real do estado do processo

- Teclado → Prioridade **Alta** 🔴- Fila de interrupções com reordenação automática

- Impressora → Prioridade **Média** 🟡- Log detalhado de todos os eventos

- Disco → Prioridade **Baixa** 🔵- Edição manual de registradores



✅ **Armazenamento e Restauração de Contexto**✅ **Exportação de Logs**

- Salva Program Counter (PC) e Registradores (R1, R2)- Geração de arquivo `.txt` com histórico completo

- Permite retomada exata do processo após interrupção- Informações estruturadas de cada evento



✅ **Interface Gráfica Interativa**---

- Visualização em tempo real do estado do processo

- Fila de interrupções com reordenação automática## 🚀 Como Usar

- Log detalhado de todos os eventos

- Edição manual de registradores### Pré-requisitos



✅ **Exportação de Logs**- **Node.js** (v16 ou superior)

- Geração de arquivo `.txt` com histórico completo- **npm** ou **yarn**

- Informações estruturadas de cada evento

### Instalação

---

```bash

## 🚀 Como Começar# Clonar o repositório

git clone https://github.com/camillabdt/SistemasOperacionais2.git

### Pré-requisitoscd SistemasOperacionais2/tp3



- **Node.js** (v16 ou superior)# Instalar dependências

- **npm** ou **yarn**npm install

```

### Instalação Rápida

### Executar a Aplicação

```bash

# 1. Clonar o repositório```bash

git clone https://github.com/camillabdt/SistemasOperacionais2.git# Modo desenvolvimento

cd SistemasOperacionais2/tp3npm run dev



# 2. Instalar dependências# Modo produção

npm installnpm run build

npm preview

# 3. Iniciar o servidor de desenvolvimento```

npm run dev

```A aplicação estará disponível em `http://localhost:5173` (ou a porta indicada no terminal)



A aplicação estará disponível em `http://localhost:5173`---



---## 📖 Como Usar o Simulador



## 📖 Como Usar o Simulador### 1. **Botões de Controle**



### Interface Principal| Botão | Função |

|-------|--------|

| Componente | Descrição || 🟢 **Rodar Contínuo** | Executa a simulação automaticamente a cada 800ms |

|-----------|-----------|| 🔵 **Próximo Passo** | Avança um passo de tempo manualmente |

| 🔵 **Botões de Controle** | Rodar Contínuo, Próximo Passo, Reset, Exportar Log || 🔴 **Reset** | Reinicia a simulação do zero |

| 📊 **Estado do Processo** | PC, Registradores (R1, R2), Status || 📥 **Exportar Log** | Baixa um arquivo `.txt` com todos os eventos |

| 📬 **Fila de Interrupções** | Interrupções pendentes ordenadas por prioridade |

| 📋 **Log de Eventos** | Histórico completo de todas as operações |### 2. **Painel de Estado do Processo**



### Botões de ControleMostra informações em tempo real:

- **Status**: Em Execução / Interrompido / Tratando Interrupção

| Botão | Função |- **PC (Program Counter)**: Quantidade de instruções executadas

|-------|--------|- **Registradores**: R1 e R2 com opção de edição

| 🟢 **Rodar Contínuo** | Executa a simulação automaticamente (800ms/passo) |

| 🔵 **Próximo Passo** | Avança um passo de tempo manualmente |💡 Clique em **"Editar"** para modificar os valores dos registradores

| 🔴 **Reset** | Reinicia a simulação do zero |

| 📥 **Exportar Log** | Baixa um arquivo `.txt` com todos os eventos |### 3. **Fila de Interrupções**



### FuncionalidadesExibe todas as interrupções pendentes:

- 🟢 **Destacada em verde**: Próxima a ser tratada

#### 1. Editar Registradores- Ordenadas automaticamente por prioridade

Clique em **"Editar"** no painel "Estado do Processo" para modificar R1 e R2 em tempo de execução.- Mostra o tempo em que foram geradas



#### 2. Acompanhar Interrupções### 4. **Log de Eventos**

A **Fila de Interrupções** mostra:

- 🟢 Próxima a ser tratada (destacada em verde)Histórico completo com:

- Ordenação automática por prioridade- Hora de cada evento

- Tempo de geração de cada uma- Tipo de evento (Execução, Interrupção, Tratamento, Retomada)

- Dispositivo afetado e prioridade

#### 3. Analisar Eventos- Estado do processo antes e depois

O **Log de Eventos** registra:

- Hora de cada evento---

- Tipo (Execução, Interrupção, Tratamento, Retomada)

- Contexto antes e depois (PC, R1, R2)## 🔄 Fluxo de Funcionamento



---### Ciclo de Vida de uma Interrupção



## 🔄 Fluxo de Funcionamento```

┌─────────────────────────────────┐

### Ciclo de Vida de uma Interrupção (3 passos)│ PASSO 1: INTERRUPÇÃO CHEGA      │

│ - Dispositivo gera interrupção  │

```│ - Contexto é SALVO              │

PASSO 1: CHEGA A INTERRUPÇÃO│ - Status: "Interrompido"        │

├─ Dispositivo gera interrupção└─────────────────────────────────┘

├─ Contexto é SALVO (PC, R1, R2)           ↓

└─ Status: "Interrompido"┌─────────────────────────────────┐

         ↓│ PASSO 2: TRATAMENTO INICIA      │

PASSO 2: PREPARA TRATAMENTO│ - Fila é reordenada por         │

├─ Fila reordenada por prioridade│   prioridade                    │

└─ Status: "Tratando Interrupção"│ - Status: "Tratando Interrupção"│

         ↓└─────────────────────────────────┘

PASSO 3: PROCESSO RETOMA           ↓

├─ Interrupção removida da fila┌─────────────────────────────────┐

├─ Contexto RESTAURADO│ PASSO 3: PROCESSO RETOMA        │

└─ Status: "Em Execução"│ - Interrupção é removida        │

```│ - Contexto é RESTAURADO         │

│ - Status: "Em Execução"         │

### Timeline de Exemplo└─────────────────────────────────┘

```

```

TEMPO │ STATUS                 │ FILA          │ PC │ R1 │ AÇÃO### Exemplo de Timeline

──────┼────────────────────────┼───────────────┼────┼────┼─────────────

  0   │ Em Execução            │ []            │ 0  │ 10 │ Inicia```

  5   │ Em Execução            │ []            │ 5  │ 15 │ RodandoTEMPO    EVENTO                          FILA              PC    R1

  6   │ Interrompido           │ [Teclado]     │ 5  │ 15 │ SALVA──────────────────────────────────────────────────────────────────

  7   │ Tratando Interrupção   │ [Teclado]     │ 5  │ 15 │ TRATA  0     Processo inicia                 []               0     10

  8   │ Em Execução            │ []            │ 5  │ 15 │ RESTAURA  5     Execução normal                 []               5     15

  9   │ Em Execução            │ []            │ 6  │ 16 │ Retoma  6     Teclado interrompe (SALVA)      [Teclado]        5     15

```  7     Prepara tratamento              [Teclado]        5     15

  8     Teclado tratado (RESTAURA)      []               5     15

---  9     Processo retoma                 []               6     16

```

## 📁 Estrutura do Projeto

---

```

SistemasOperacionais2/## 📁 Estrutura do Projeto

│

└── tp3/                          # Trabalho Prático 3```

    ├── src/SistemasOperacionais2/

    │   ├── App.tsx              # Componente principal└── tp3/

    │   ├── main.tsx             # Entrada da aplicação    ├── src/

    │   ├── index.css            # Estilos globais    │   ├── App.tsx                 # Componente principal

    │   │    │   ├── main.tsx               # Entrada da aplicação

    │   ├── components/          # Componentes React    │   ├── index.css              # Estilos globais

    │   │   ├── Controls.tsx      # Botões de controle    │   │

    │   │   ├── ProcessState.tsx  # Estado do processo    │   ├── components/

    │   │   ├── InterruptQueue.tsx# Fila de interrupções    │   │   ├── Controls.tsx        # Botões de controle

    │   │   └── EventLog.tsx      # Log de eventos    │   │   ├── ProcessState.tsx    # Estado do processo

    │   │    │   │   ├── InterruptQueue.tsx  # Fila de interrupções

    │   ├── core/                # Lógica da simulação    │   │   └── EventLog.tsx        # Log de eventos

    │   │   ├── types.ts         # Tipos e interfaces    │   │

    │   │   ├── scheduler.ts     # Escalonador    │   ├── core/

    │   │   └── interrupts.ts    # Gerenciador de interrupções    │   │   ├── types.ts           # Tipos e interfaces

    │   │    │   │   ├── scheduler.ts       # Lógica de escalonamento

    │   └── lib/                 # Utilitários    │   │   └── interrupts.ts      # Lógica de interrupções

    │       ├── exportLog.ts     # Exportação de logs    │   │

    │       ├── colors.ts        # Paleta de cores    │   └── lib/

    │       └── format.ts        # Formatação    │       ├── exportLog.ts       # Exportação de logs

    │    │       ├── colors.ts          # Paleta de cores

    ├── public/                  # Assets estáticos    │       └── format.ts          # Funções de formatação

    ├── package.json             # Dependências    │

    ├── vite.config.ts          # Configuração Vite    ├── public/                     # Assets estáticos

    ├── tsconfig.json           # Configuração TypeScript    ├── package.json               # Dependências

    └── README.md               # Documentação do TP3    ├── vite.config.ts            # Configuração Vite

```    ├── tsconfig.json             # Configuração TypeScript

    └── README.md                 # Documentação do projeto

---```



## 🛠️ Tecnologias Utilizadas---



| Tecnologia | Versão | Uso |## 🛠️ Tecnologias Utilizadas

|-----------|--------|-----|

| **React** | 18.x | Framework UI |- **React 18** - Framework UI

| **TypeScript** | 5.x | Tipagem estática |- **TypeScript** - Tipagem estática

| **Vite** | 5.x | Build tool |- **Vite** - Build tool

| **Tailwind CSS** | 3.x | Estilização |- **Tailwind CSS** - Estilização

| **ESLint** | 9.x | Linter |- **ESLint** - Linter



------



#
Mostra como o sistema operacional gerencia múltiplas requisições simultâneas de diferentes prioridades.Mostra como o processo pode retomar exatamente de onde parou, com todos os valores preservados.



### 5. **Auditoria de Eventos** 📝### 5. **Log de Auditoria**

Mantém log detalhado para análise e debugging.Mantém registro detalhado de todos os eventos para análise e debugging.



------



## ✅ Requisitos Atendidos## ✅ Requisitos Atendidos



- ✅ Simulação de dispositivos de E/S com interrupções aleatórias- ✅ Simulação de dispositivos de E/S com geração aleatória de interrupções

- ✅ Três dispositivos com prioridades diferentes (Alta, Média, Baixa)- ✅ Três dispositivos com prioridades diferentes (Alta, Média, Baixa)

- ✅ Identificação, registro e tratamento conforme prioridade- ✅ Identificação, registro e tratamento de interrupções por prioridade

- ✅ Armazenamento e recuperação de contexto do processo- ✅ Armazenamento e recuperação de contexto do processo

- ✅ Log detalhado com estado antes e depois de cada interrupção- ✅ Log detalhado com estado antes e depois de cada interrupção

- ✅ Exportação de log em arquivo de texto- ✅ Exportação de log em arquivo de texto

- ✅ Interface gráfica clara e intuitiva- ✅ Interface gráfica clara e intuitiva

- ✅ Código bem estruturado com boas práticas- ✅ Código bem estruturado com boas práticas

- ✅ Múltiplas interrupções simultâneas testadas naturalmente

---

---


Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Sistemas Operacionais da UNIPAMPA.


**Aproveite para aprender! 🎓**


