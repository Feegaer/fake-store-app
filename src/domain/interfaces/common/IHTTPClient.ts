export interface IHTTPClient {
  get<T>(url: string, params?: Record<string, string | number>): Promise<T>;
}