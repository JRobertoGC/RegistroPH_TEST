// src/api.ts
import axios from 'axios';

const API_URL = 'https://fcc2-2806-2a0-b2a-89cd-adcd-1aa1-2625-a48d.ngrok-free.app';

// Buscar participantes
export const searchParticipants = async (query: string) => {
    try {
        const response = await axios.get(`${API_URL}/user/${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Editar participante
export const editParticipant = async (id: string, participant: any) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(participant),
        });

        if (!response.ok) {
            throw new Error('Failed to update record');
        }

        const data = await response.json();
        return { data, status: response.status };
    } catch (error) {
        console.error("Error updating participant:", error);
        throw error;
    }
};

// Crear participante
export const createParticipant = async (data: any) => {
    try {
        const response = await axios.post(`${API_URL}/user/create`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Verificar conexión
export const checkServerConnection = async () => {
    try {
        const response = await axios.get(`${API_URL}/health-check`); // Asumiendo que tienes un endpoint de health-check
        return response.status === 200;
    } catch (error) {
        return false;
    }
};
