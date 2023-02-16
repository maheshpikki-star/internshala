//Type definitions

declare namespace Apxor {
  /**
   * Initialization Options
   */
  interface InitOptions {
    debug?: boolean;
    honorDNT?: boolean;
    idle_time_out?: number;
    client_id?: string;
    session_id?: string;
    plugins?: any;
    version?: string;
    events_upload_time?: number;
    retry_time?: number;
    deps?: any;
  }

  /**
   * Object{String, String}
   */
  interface FieldsObject {
    [i: string]: any;
  }

  function init(
    siteId: string,
    options?: InitOptions,
    success?: any,
    error?: any
  ): void;

  function setUserId(userId: any): void;

  function logPageView(path: string): void;

  function logEvent(
    name: string,
    properties: FieldsObject,
    category: string
  ): void;

  function logClientEvent(name: string, properties: FieldsObject): void;

  function setUserProperties(properties: FieldsObject): void;

  function setSessionProperties(properties: FieldsObject): void;

  function setAppVersion(version: string): void;

  function getSessionId(): string;

  function getClientId(): string;

  function startNewSession(): void;

  function endSession(): void;

  function getSiteId(): string;

  function setRedirectionHandler(callback: any): void;
}

export default Apxor;

export as namespace Apxor;
