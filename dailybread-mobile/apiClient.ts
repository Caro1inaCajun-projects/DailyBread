import AsyncStorage from '@react-native-async-storage/async-storage';
import { PresetHabit } from "./Types/PresetHabit";


//create a ngrok tunnel and replace the url with what ever is produced when running npx ngrok http 5083
const BASE_URL = process.env.EXPO_PUBLIC_API_URL!;

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {

    const token = await AsyncStorage.getItem('token');

    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(token ? { "Authorization": `Bearer ${token}` } : {}),
            ...(options.headers || {}),
        },
        ...options,
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API Error ${response.status}: ${text}`);
    }

    if (response.status === 204) {
        // @ts-ignore
        return null;
    }
    return response.json() as Promise<T>;
}

export const Api = {
    signup: (email: string, password: string, userName: string) =>
        apiRequest<{ token: string }>("api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, PasswordHash: password, userName }),

        }),

    login: (email: string, password: string) =>
        apiRequest<{ token: string }>("api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, PasswordHash: password }),
        }),

    getAllPresetHabits: () =>
        apiRequest<PresetHabit[]>("api/PresetHabit", {
            method: "GET",
        }),

    getUserHabits: () =>
        apiRequest<number[]>("api/UserHabits", {
            method: "GET",
        }),

    toggleUserHabit: (habitId: number) =>
        apiRequest<void>(`api/UserHabits/toggle/${habitId}`, {
            method: "POST",
        }),

    getCompletedHabits: () =>
        apiRequest<number[]>("api/CompletedHabits", {
            method: "GET",
        }),

    toggleCompletedHabit: (habitId: number) =>
        apiRequest<void>(`api/CompletedHabits/toggle/${habitId}`, {
            method: "POST",
        }),

    getHome: () =>
        apiRequest<any[]>("api/Home", {
            method: "GET",
        }),
};