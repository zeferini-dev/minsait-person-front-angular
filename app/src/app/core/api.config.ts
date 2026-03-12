import { InjectionToken } from '@angular/core';

// URL do backend .NET (CRUD SQLite - porta 3000)
function getApiBaseUrl(): string {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return `http://${hostname}:3000`;
}

// API Base URL
export const API_GATEWAY_URL = new InjectionToken<string>('API_GATEWAY_URL', {
  providedIn: 'root',
  factory: () => getApiBaseUrl(),
});

// API de escrita (comandos)
export const API_COMMAND_URL = new InjectionToken<string>('API_COMMAND_URL', {
  providedIn: 'root',
  factory: () => `${getApiBaseUrl()}/persons`,
});

// API de leitura (queries) - base URL; o service adiciona /persons
export const API_QUERY_URL = new InjectionToken<string>('API_QUERY_URL', {
  providedIn: 'root',
  factory: () => getApiBaseUrl(),
});

export const API_BASE_URL = API_GATEWAY_URL;
