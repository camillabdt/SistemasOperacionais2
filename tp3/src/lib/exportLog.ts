import { EventLogEntry } from '../core/types';

/**
 * Formata o log de eventos em um formato legível para arquivo de texto
 */
export function formatLogForExport(log: EventLogEntry[]): string {
    let output = `SIMULADOR DE GERENCIAMENTO DE E/S COM INTERRUPÇÃO\n`;
    output += `Gerado em: ${new Date().toLocaleString('pt-BR')}\n`;
    output += `${'='.repeat(80)}\n\n`;

    log.forEach((entry) => {
        output += `[Tempo ${entry.time}] - ${entry.eventType}\n`;
        output += `${entry.details}\n`;

        if (entry.device) {
            output += `Dispositivo: ${entry.device}\n`;
        }
        if (entry.priority) {
            output += `Prioridade: ${entry.priority}\n`;
        }

        if (entry.contextBefore) {
            output += `Contexto ANTES da interrupção:\n`;
            output += `  - PC (Program Counter): ${entry.contextBefore.instructionPointer}\n`;
            output += `  - R1: ${entry.contextBefore.registers.r1}\n`;
            output += `  - R2: ${entry.contextBefore.registers.r2}\n`;
            output += `  - Status: ${entry.contextBefore.status}\n`;
        }

        if (entry.contextAfter) {
            output += `Contexto DEPOIS da interrupção:\n`;
            output += `  - PC (Program Counter): ${entry.contextAfter.instructionPointer}\n`;
            output += `  - R1: ${entry.contextAfter.registers.r1}\n`;
            output += `  - R2: ${entry.contextAfter.registers.r2}\n`;
            output += `  - Status: ${entry.contextAfter.status}\n`;
        }

        output += `\n${'-'.repeat(80)}\n\n`;
    });

    return output;
}

/**
 * Exporta o log para um arquivo de texto (.txt)
 */
export function exportLogToFile(log: EventLogEntry[]): void {
    const formattedLog = formatLogForExport(log);
    const element = document.createElement('a');
    
    const file = new Blob([formattedLog], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `simulacao_log_${new Date().getTime()}.txt`;
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
