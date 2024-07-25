import { Participant } from '../Row/types';

export type TableProps = {
    data: Participant[];
    onEdit: (participant: Participant) => void;
};
