import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: any): void {
    try {
      const serializedValue =
        typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Failed to set item in localStorage:', error);
    }
  }

  getItem(key: string): any {
    const serializedValue = localStorage.getItem(key);

    try {
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.warn(
        'Failed to parse item from localStorage. Returning raw value.',
        error,
      );
      return serializedValue;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove item from localStorage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  }
}
