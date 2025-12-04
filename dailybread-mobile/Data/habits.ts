export interface Habit {
    id: number;
    name: string;
}

const habits: Habit[] = [
    { id: 1, name: 'Pray'},
    { id: 2, name: 'Read The Bible' },
    { id: 3, name: 'Walk'},
    { id: 4, name: 'Sleep 8 Hours'},
];

export default habits;