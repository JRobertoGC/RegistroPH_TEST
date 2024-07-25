export interface Participant {
  id: string; 
  primer_apellido: string;
  segundo_apellido: string;
  nombre_participante: string;
  edad: number;
  correo_participante: string;
  telefono_participante: string;
  escuela: string;
  grupo: string;
  nivel: string;
  idioma: string;
  tratamiento_medico: string;
  salida_participante: string;
  carta_responsiva: boolean;
  nombre_tutor: string;
  correo_tutor: string;
  telefono_tutor: string;
}

export type RowProps = {
  participant: Participant;
};