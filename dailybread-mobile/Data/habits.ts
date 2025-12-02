export interface Habit {
    id: number;
    name: string;
    category: 'Spirituality' | 'Mentality' | 'Physical';
    completed: boolean;
}

const habits: Habit[] = [
    { id: 1, name: 'Pray 3x/day', category: 'Spirituality', completed: false },
    { id: 2, name: 'Read Bible for 10 minutes', category: 'Spirituality', completed: true },
    { id: 3, name: 'Meditate 5 minutes', category: 'Mentality', completed: false },
    { id: 4, name: 'Exercise 30 mins', category: 'Physical', completed: false },
];

export default habits;