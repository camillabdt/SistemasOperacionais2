# 🖥️ Simulador de Gerenciamento de Entrada e Saída (E/S) com Interrupção# 🖥️ Simulador de Gerenciamento de Entrada e Saída (E/S) com Interrupção



<div align="center">## 📋 Descrição



![I/O Management](https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif)Este repositório contém uma **simulação interativa** do gerenciamento de entrada e saída (E/S) em um sistema operacional. O simulador reproduz o comportamento de um processador lidando com interrupções de dispositivos periféricos (teclado, impressora e disco), demonstrando como o sistema operacional gerencia a execução de processos com armazenamento e recuperação de contexto.



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



## 🎓 Conceitos Implementados## 📚 Conceitos Implementados



### 1. **Interrupções de Hardware** 🔔### 1. **Interrupções de Hardware**

Simula como o processador é interrompido por dispositivos periféricos durante a execução.Simula como o processador é interrompido por dispositivos periféricos durante a execução de um processo.



### 2. **Fila de Prioridades** 📊### 2. **Fila de Prioridades**

Implementa uma fila que reordena automaticamente por importância, não por ordem de chegada.Implementa uma fila que reordena as interrupções conforme sua importância, não apenas por ordem de chegada.



### 3. **Context Switch** 🔄### 3. **Armazenamento de Contexto**

Demonstra como o SO salva e restaura o estado completo de um processo (PC e registradores).Demonstra como o SO salva o estado completo de um processo (PC e registradores) para posterior restauração.



### 4. **Escalonamento** ⏱️### 4. **Restauração de Contexto**

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

## 📝 Exemplo de Log Exportado

## 📊 Exemplo de Log Exportado

```

```SIMULADOR DE GERENCIAMENTO DE E/S COM INTERRUPÇÃO

SIMULADOR DE GERENCIAMENTO DE E/S COM INTERRUPÇÃOGerado em: 17/11/2025, 14:30:45

Gerado em: 17/11/2025, 14:30:45================================================================================

================================================================================

[Tempo 0] - Execução

[Tempo 0] - ExecuçãoProcesso principal em execução.

Processo principal em execução.

────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────

[Tempo 6] - Interrupção

[Tempo 6] - InterrupçãoArmazenando contexto do processo principal.

Armazenando contexto do processo principal.Dispositivo: Teclado

Dispositivo: TecladoPrioridade: Alta

Prioridade: AltaContexto ANTES da interrupção:

Contexto ANTES da interrupção:  - PC (Program Counter): 5

  - PC (Program Counter): 5  - R1: 15

  - R1: 15  - R2: 20

  - R2: 20  - Status: Em Execução

  - Status: Em ExecuçãoContexto DEPOIS da interrupção:

Contexto DEPOIS da interrupção:  - PC (Program Counter): 5

  - PC (Program Counter): 5  - R1: 15

  - R1: 15  - R2: 20

  - R2: 20  - Status: Interrompido

  - Status: Interrompido

────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────

[Tempo 7] - Interrupção

[Tempo 8] - TratamentoIniciando tratamento da interrupção de Teclado.

Tratando a interrupção de Teclado (Prio: Alta).Dispositivo: Teclado

Dispositivo: TecladoPrioridade: Alta

Prioridade: Alta

────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────

```[Tempo 8] - Tratamento

Tratando a interrupção de Teclado (Prio: Alta).

---Dispositivo: Teclado

Prioridade: Alta

## 🎯 Como Aprender com Este Projeto

────────────────────────────────────────────────────────────────────────────

Este simulador é uma excelente ferramenta para entender:```



1. **O que é uma Interrupção?**---

   - Como o hardware interrompe o processador

   - Como o SO responde a eventos## 🔧 Funcionalidades Avançadas



2. **O que é Context Switch?**### Edição de Registradores

   - Como salvar o estado de um processoVocê pode modificar os valores de R1 e R2 em tempo de execução para testar diferentes cenários.

   - Como restaurar exatamente de onde parou

### Simulação Manual vs Automática

3. **O que é Escalonamento?**- **Manual**: Clique em "Próximo Passo" para avançar a cada instrução

   - Como gerenciar múltiplos eventos- **Automática**: Clique em "Rodar Contínuo" para execução contínua (800ms por passo)

   - Como prioridades funcionam

### Exportação de Dados

4. **Como Funciona um SO Real?**Baixe o histórico completo em `.txt` para análise posterior ou para entregar como relatório.

   - Gerenciamento de E/S em Linux/Windows

   - Interrupções de hardware no dia a dia---



---## 📊 Visualização de Dados



## 🐛 TroubleshootingA interface exibe:

- **Estado do Processo**: PC, Registradores, Status

### ❓ Não vejo interrupções aparecer?- **Fila Dinâmica**: Reordenação automática por prioridade

- Clique em "Rodar Contínuo" ou "Próximo Passo" várias vezes- **Log em Tempo Real**: Todos os eventos aparecem conforme ocorrem

- As interrupções têm 50% de chance por passo- **Contexto Salvo**: Informações do estado antes e depois de cada interrupção

- Seja paciente! 😊

---

### ❓ Os botões não funcionam?

- Verifique se `npm run dev` está rodando## 🐛 Troubleshooting

- Recarregue a página (F5 ou Ctrl+R)

- Verifique o console do navegador (F12)### Não vejo interrupções aparecer?

- Clique em "Rodar Contínuo" ou "Próximo Passo" várias vezes

### ❓ Erro ao exportar log?- As interrupções têm 50% de chance de aparecer a cada passo

- Certifique-se de ter pelo menos um evento- Paciência! Pode demorar um pouco

- O botão fica desativado se o log está vazio

### Os botões não funcionam?

### ❓ Porta já está em uso?- Verifique se o servidor está rodando (`npm run dev`)

- Use: `npm run dev -- --port 5174`- Recarregue a página (F5 ou Ctrl+R)



---### Erro ao exportar log?

- Certifique-se de que tem pelo menos um evento no log

## 📞 Contato e Suporte- O botão "Exportar Log" fica desativado se a lista está vazia



**Disciplina:** Sistemas Operacionais  ---

**Professor:** Aline Mello  

**Email:** alinemello@unipampa.edu.br  ## 📞 Suporte

**Instituição:** UNIPAMPA (Universidade Federal do Pampa)

Para dúvidas sobre o trabalho, entre em contato com:

---- **Professor**: Aline Mello

- **Email**: alinemello@unipampa.edu.br

## 📄 Licença

---

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Sistemas Operacionais da UNIPAMPA.

## 📄 Licença

---

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Sistemas Operacionais da UNIPAMPA.

## 🚀 Próximos Passos (Melhorias Futuras)

---

- [ ] Adicionar mais dispositivos de E/S

- [ ] Implementar diferentes algoritmos de escalonamento## 🎓 Objetivo Educacional

- [ ] Gráficos de desempenho em tempo real

- [ ] Modo escuro/claroEste simulador foi criado para ajudar na compreensão de conceitos fundamentais de Sistemas Operacionais:

- [ ] Testes unitários completos- Como o processador é interrompido

- [ ] Deploy para demonstração online- Como o contexto é preservado

- Como as prioridades funcionam

---- Como um SO gerencia múltiplos eventos simultâneos



## ✍️ Desenvolvido porAproveite para aprender! 🚀



Desenvolvido como **Trabalho Prático 3 (TP3)** da disciplina de Sistemas Operacionais.---



---**Última atualização:** 17 de novembro de 2025


**Aproveite para aprender! 🎓**

**Última atualização:** 17 de novembro de 2025
