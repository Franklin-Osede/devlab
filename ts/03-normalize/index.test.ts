import { normalizeById, Identifiable } from './index';
import * as fs from 'fs';
import * as path from 'path';

interface User extends Identifiable {
  name: string;
  email: string;
}

const loadSample = <T>(filename: string): T[] => {
  const filePath = path.join(__dirname, 'samples', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

describe('normalizeById - Ejercicio 03: Normalizar Datos (TypeScript)', () => {
  const users = loadSample<User>('sample-1-users.json');
  
  test('debe normalizar usuarios por id', () => {
    const result = normalizeById(users);
    expect(result[1]).toEqual(users[0]);
    expect(result[2]).toEqual(users[1]);
  });

  test('debe retornar objeto vacío si input inválido', () => {
    expect(normalizeById(null as any)).toEqual({});
    expect(normalizeById(undefined as any)).toEqual({});
  });
});

