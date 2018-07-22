if (!window.AB) window.AB = {};
if (!window.AB.components) window.AB.components = {};

class ComponentRegistry {
    constructor() {
        this.store = {};
    }

    register(componentName, Component) {
        if (componentName in Object.keys(this.store)) {
            throw new Error(`${componentName} is already registered`);
        }

        this.store[componentName] = Component;
        window.AB.components[componentName] = componentName;
    }

    get(componentName) {
        return this.store[componentName];
    }
}

export default new ComponentRegistry();
