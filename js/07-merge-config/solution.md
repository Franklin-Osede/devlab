# Solución: Merge Configs

## 🧠 Patrón Mental (MEMORIZAR ESTO)

Este patrón es **fundamental** en JavaScript moderno. Usa spread operator para inmutabilidad.

### Estructura Universal

```javascript
function mergeConfig(defaultConfig, userConfig) {
  if (!userConfig) return { ...defaultConfig };
  return {
    ...defaultConfig,
    ...userConfig,
  };
}
```

## 🔑 Puntos Clave

1. **Spread operator** para crear copias
2. **Orden importa**: primero defaults, luego user
3. **Shallow merge**: objetos anidados se sobrescriben completamente
4. **Inmutabilidad**: nunca mutar inputs

