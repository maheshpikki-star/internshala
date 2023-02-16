declare namespace CE {
  interface CE$ {
    parse(config: any): void;
    validate(id: string, index: number): void;
    getCount(id: string): number;
    updateCount(id: string): void;
    registerForEvent(event: any, callback: any): void;
    unregisterFromEvent(event: any, callback: any): void;
    fetch(type: any, vUrl: string, aUrl: string, callback: any): void;
    initialize(): void;
  }

  function getInstance(): CE$;
}

export default CE;

export as namespace CE;
