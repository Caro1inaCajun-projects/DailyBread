


//create a ngrok tunnel and replace the url with what ever is produced when running npx ngrok http 5083
const BASE_URL = "https://lactic-carter-rosily.ngrok-free.dev";

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API Error ${response.status}: ${text}`);
    }
    return response.json() as Promise<T>;
}

export const Api = {
    signup: (email: string, password: string, userName: string) =>
        apiRequest<{ message: string }>("api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password, userName }),

        }),
};