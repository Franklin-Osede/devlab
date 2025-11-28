/**
 * DI Container - TypeScript
 */
type Factory<T> = (container: Container) => T;
type ServiceName = string | symbol;

interface Container {
  register<T>(name: ServiceName, factory: Factory<T>): void;
  resolve<T>(name: ServiceName): T;
  clear(): void;
}

function createContainer(): Container {
  const services = new Map<ServiceName, Factory<any>>();
  const instances = new Map<ServiceName, any>();
  
  return {
    register<T>(name: ServiceName, factory: Factory<T>): void {
      services.set(name, factory);
    },
    
    resolve<T>(name: ServiceName): T {
      if (instances.has(name)) {
        return instances.get(name);
      }
      
      const factory = services.get(name);
      if (!factory) {
        throw new Error(`Service ${String(name)} not registered`);
      }
      
      const instance = factory(this);
      instances.set(name, instance);
      return instance;
    },
    
    clear(): void {
      services.clear();
      instances.clear();
    }
  };
}

export { createContainer, Container, Factory };

