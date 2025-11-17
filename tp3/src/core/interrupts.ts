// core/interrupts.ts

import {
    SimulationState,
    Interrupt,
    DeviceType,
    Priority,
    DEVICE_PRIORITIES,
    EventLogEntry,
} from './types';

// Função auxiliar para obter a ordem numérica de prioridade
function getPriorityValue(priority: Priority): number {
    switch (priority) {
        case 'Alta': return 3; // Teclado
        case 'Média': return 2; // Impressora
        case 'Baixa': return 1; // Disco
        default: return 0;
    }
}

/**
 * 1. Simula a Geração Aleatória de uma Interrupção [cite: 13]
 * @param state O estado atual da simulação.
 * @returns Uma nova Interrupção ou null.
 */
export function maybeGenerateInterrupt(state: SimulationState): Interrupt | null {
    // Chance de 50% de gerar uma interrupção em cada passo de tempo
    if (Math.random() < 0.5) { 
        return null;
    }

    const devices: DeviceType[] = ['Teclado', 'Impressora', 'Disco'];
    // Escolhe um dispositivo aleatoriamente
    const randomDevice = devices[Math.floor(Math.random() * devices.length)];
    const priority = DEVICE_PRIORITIES[randomDevice];

    return {
        id: state.interruptIdCounter + 1,
        timeGenerated: state.currentTime,
        device: randomDevice,
        priority: priority,
    };
}

/**
 * 2. Ordena a Fila de Interrupções por Prioridade [cite: 15, 49]
 * Utilizada para garantir que, se múltiplas interrupções chegarem, a de maior 
 * prioridade seja tratada primeiro.
 */
export function sortInterruptQueue(queue: Interrupt[]): Interrupt[] {
    // Ordena de forma decrescente (do maior valor para o menor)
    return queue.sort((a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority));
}

/**
 * 3. Simula o Tratamento de uma Interrupção
 */
export function treatInterrupt(interrupt: Interrupt, currentTime: number): EventLogEntry {
    // O tratamento da interrupção é simulado como um evento no log
    return {
        time: currentTime,
        eventType: 'Tratamento',
        device: interrupt.device,
        priority: interrupt.priority,
        details: `Tratando a interrupção de ${interrupt.device} (Prio: ${interrupt.priority}).`,
    };
}