// components/ProcessState.tsx

import React, { useState, useEffect } from 'react';
import { ProcessContext } from '../core/types';

interface ProcessStateProps {
    context: ProcessContext;
    onUpdateRegisters?: (r1: number, r2: number) => void;
}

const ProcessState: React.FC<ProcessStateProps> = ({ context, onUpdateRegisters }) => {
    const [editMode, setEditMode] = useState(false);
    const [r1Value, setR1Value] = useState(context.registers.r1);
    const [r2Value, setR2Value] = useState(context.registers.r2);

    // Sincroniza os valores quando o contexto muda (de fora)
    useEffect(() => {
        if (!editMode) {
            setR1Value(context.registers.r1);
            setR2Value(context.registers.r2);
        }
    }, [context.registers.r1, context.registers.r2, editMode]);
    // Função para aplicar estilo com base no status
    const getStatusStyle = (status: string) => {
        if (status.includes('Execução')) return 'text-green-600 bg-green-100';
        if (status.includes('Interrompido')) return 'text-red-600 bg-red-100';
        if (status.includes('Tratando')) return 'text-yellow-600 bg-yellow-100';
        return 'text-gray-600 bg-gray-100';
    };

    const handleSaveRegisters = () => {
        if (onUpdateRegisters) {
            onUpdateRegisters(r1Value, r2Value);
            setEditMode(false);
        }
    };

    const handleCancel = () => {
        setR1Value(context.registers.r1);
        setR2Value(context.registers.r2);
        setEditMode(false);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Estado do Processo Principal</h2>
            
            <p className="mb-4">
                <strong>Status:</strong> 
                <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${getStatusStyle(context.status)}`}>
                    {context.status}
                </span>
            </p>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                    <strong>PC (Program Counter):</strong> {context.instructionPointer}
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                        <strong>Registradores</strong>
                        {!editMode && (
                            <button
                                onClick={() => setEditMode(true)}
                                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                            >
                                Editar
                            </button>
                        )}
                    </div>
                    {editMode ? (
                        <div className="space-y-2">
                            <div>
                                <label className="text-sm font-medium">R1:</label>
                                <input
                                    type="number"
                                    value={r1Value}
                                    onChange={(e) => setR1Value(Number(e.target.value))}
                                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">R2:</label>
                                <input
                                    type="number"
                                    value={r2Value}
                                    onChange={(e) => setR2Value(Number(e.target.value))}
                                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={handleSaveRegisters}
                                    className="flex-1 bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
                                >
                                    Salvar
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="flex-1 bg-gray-400 text-white px-2 py-1 rounded text-sm hover:bg-gray-500"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ul className="list-disc list-inside ml-2 mt-1 text-sm">
                            <li>R1: {context.registers.r1}</li>
                            <li>R2: {context.registers.r2}</li>
                        </ul>
                    )}
                </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">Simulação do contexto (PC e Registradores) que é armazenado ao ocorrer uma interrupção.</p>
        </div>
    );
};

export default ProcessState;