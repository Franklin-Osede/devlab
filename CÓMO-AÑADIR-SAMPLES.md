# 📝 Cómo Añadir Más Samples a un Ejercicio

Cuando domines un ejercicio, añade más samples para practicar con diferentes contextos. Esto te ayudará a dominar el patrón, no solo memorizar código.

## 🎯 Proceso

### 1. Crea el archivo JSON en `samples/`

```bash
# Ejemplo: añadir sample-5-employees.json al ejercicio 01
touch js/01-filter-transform/samples/sample-5-employees.json
```

### 2. Añade datos realistas

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@company.com",
    "active": true,
    "createdAt": "2024-03-01",
    "department": "engineering"
  }
]
```

### 3. Actualiza los tests en `index.test.js`

```javascript
describe('Sample 5: Empleados', () => {
  const employees = loadSample('sample-5-employees.json');
  
  test('debe filtrar empleados activos', () => {
    const result = getActiveUsers(employees);
    // Tus assertions aquí
  });
});
```

## 💡 Ideas para Samples

### Para ejercicios de arrays/objetos:
- Diferentes tipos de entidades (usuarios, productos, órdenes, transacciones)
- Diferentes estructuras de datos
- Casos edge (valores null, undefined, arrays vacíos)

### Para ejercicios de funciones:
- Diferentes tipos de inputs
- Diferentes configuraciones
- Casos límite

### Para ejercicios async:
- Diferentes tiempos de respuesta
- Diferentes tipos de errores
- Diferentes escenarios de concurrencia

## ✅ Checklist

- [ ] El sample tiene sentido para el ejercicio
- [ ] Incluye casos edge (null, undefined, vacíos)
- [ ] Los tests cubren el nuevo sample
- [ ] El sample es diferente a los anteriores (diferente contexto)

## 🎯 Objetivo

Cuando puedas resolver el ejercicio con **cualquier sample nuevo** sin mirar la solución, has dominado el patrón.

