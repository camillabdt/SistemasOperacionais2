// core/types.ts

/**
 * 1. Tipos de Dispositivos de E/S e Prioridades
 */
export type DeviceType = 'Teclado' | 'Impressora' | 'Disco';
export type Priority = 'Alta' | 'Média' | 'Baixa';

// Mapeamento de prioridades para os dispositivos
export const DEVICE_PRIORITIES: Record<DeviceType, Priority> = {
    'Teclado': 'Alta', // Alta prioridade
    'Impressora': 'Média', // Média prioridade
    'Disco': 'Baixa' // Baixa prioridade
};

/**
 * 2. Contexto do Processo (Estado)
 * O que é salvo e restaurado na interrupção.
 */
export interface ProcessContext {
    instructionPointer: number; // Simula o PC (Program Counter)
    registers: {
        r1: number;
        r2: number;
        // Simula o estado dos registradores
    };
    status: 'Em Execução' | 'Interrompido' | 'Tratando Interrupção';
}

/**
 * 3. Interrupção (Requisição de E/S)
 */
export interface Interrupt {
    id: number; // Identificador único
    timeGenerated: number;
    device: DeviceType;
    priority: Priority;
}

/**
 * 4. Log de Eventos (Saída detalhada)
 */
export interface EventLogEntry {
    time: number;
    eventType: 'Execução' | 'Interrupção' | 'Tratamento' | 'Retomada';
    device?: DeviceType;
    priority?: Priority;
    details: string; // Mensagem detalhada
    contextBefore?: ProcessContext; // Estado antes da interrupção
    contextAfter?: ProcessContext; // Estado após o tratamento
}

/**
 * 5. Estado Global da Simulação (SimulationState)
 */
export interface SimulationState {
    currentTime: number; // Unidade de tempo atual
    processContext: ProcessContext; // O estado do processo principal
    interruptQueue: Interrupt[]; // Fila de interrupções pendentes (FIFO de requisições, mas tratada por prioridade)
    interruptIdCounter: number; // Contador para gerar IDs
    log: EventLogEntry[]; // Histórico de eventos
    isRunning: boolean; // Flag para controlar se a simulação está ativa
}

/**
 * 6. Função de Utilidade para Inicialização
 */
export function initializeSimulation(): SimulationState {
    return {
        currentTime: 0,
        processContext: {
            instructionPointer: 0,
            registers: { r1: 10, r2: 20 },
            status: 'Em Execução',
        },
        interruptQueue: [],
        interruptIdCounter: 0,
        log: [{ time: 0, eventType: 'Execução', details: 'Processo principal em execução.' }],
        isRunning: false, // Começa pausado para configuração
    };
}