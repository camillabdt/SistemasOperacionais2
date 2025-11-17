// components/Controls.tsx

import React from 'react';
import { EventLogEntry } from '../core/types';
import { exportLogToFile } from '../lib/exportLog';

interface ControlsProps {
    onNextStep: () => void;
    onReset: () => void;
    onToggleRun: () => void;
    isRunning: boolean;
    currentTime: number;
    log?: EventLogEntry[];
}

const Controls: React.FC<ControlsProps> = ({ onNextStep, onReset, onToggleRun, isRunning, currentTime, log = [] }) => {
    const handleExportLog = () => {
        exportLogToFile(log);
    };
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tempo Atual: {currentTime}</h2>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                    onClick={onToggleRun} 
                    className={`px-4 py-2 rounded text-white font-medium ${isRunning ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    {isRunning ? 'Pausar' : 'Rodar Contínuo'}
                </button>
                <button 
                    onClick={onNextStep} 
                    disabled={isRunning}
                    className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 font-medium"
                >
                    Próximo Passo
                </button>
                <button 
                    onClick={onReset} 
                    className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600 font-medium"
                >
                    Reset
                </button>
                <button 
                    onClick={handleExportLog}
                    disabled={log.length === 0}
                    className="px-4 py-2 rounded text-white bg-purple-500 hover:bg-purple-600 disabled:opacity-50 font-medium"
                >
                    📥 Exportar Log
                </button>
            </div>
        </div>
    );
};

export default Controls;