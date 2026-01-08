import { IHTTPClient } from "@/domain/interfaces/common/IHttpClient";

export class HttpClient implements IHTTPClient {
  async get<T>(url: string, params?: Record<string, string | number>): Promise<T> {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}
