import type { FetchOptions } from "https://esm.sh/ohmyfetch";

export interface ResponseMap {
  blob: Blob;
  text: string;
  arrayBuffer: ArrayBuffer;
}

export type ResponseType = keyof ResponseMap | "json";
export type MappedType<R extends ResponseType, JsonType = unknown> = R extends
  keyof ResponseMap ? ResponseMap[R] : JsonType;

export type ClientMethodHandler = <T = unknown, R extends ResponseType = "json">(
  data?: RequestInit["body"] | Record<string, unknown>,
  opts?: Omit<FetchOptions<R>, "baseURL" | "method">,
) => Promise<MappedType<R, T>>;

export type ClientBuilder = {
  [key: string]: ClientBuilder;
  (...segmentsOrIds: (string | number)[]): ClientBuilder;
} & {
  get: ClientMethodHandler;
  post: ClientMethodHandler;
  put: ClientMethodHandler;
  delete: ClientMethodHandler;
  patch: ClientMethodHandler;
};
