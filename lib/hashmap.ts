//// ------------------------------- HANDY HASHMAP © Handy-JS 5m/27d/23y -------------------------------

/**
 * HashMap implementation in JavaScript
 */
export default class HashMap {
    
    map = new Map();

    constructor(obj?: any) {
        this.map = new Map();
        if (obj) {
            Object.keys(obj).forEach((key) => {
                this.map.set(key, obj[key]);
            });
        }
    }
  
    /**
     * Add a key-value pair to the HashMap
     * @param key The key of the key-value pair
     * @param value The value of the key-value pair
     */
    put(key: string, value: any) {
      this.map.set(key, value);
    }
  
    /**
     * Get the value associated with a key
     * @param key The key whose value is to be returned
     */
    get(key: string) {
      return this.map.get(key);
    }

    /**
     * Get the value associated with a key or insert a new key-value pair if the key does not exist
     * @param key The key whose value is to be updated
     * @param value The value to be inserted if the key does not exist
     */
    upsert(key: string, value: any) {
        if (this.contains(key)) {
            this.map.set(key, value);
        }else{
            this.put(key, value);
        }
    }

    /**
     * Update the value associated with a key
     * @param key The key whose value is to be updated
     * @param value The value to be updated
     */
    update(key: string, value: any) {
        if (this.contains(key)) {
            this.map.set(key, value);
        }else{
            throw new Error(`Key ${key} does not exist`);
        }
    }
  
    /**
     * Remove a key-value pair from the HashMap
     * @param key The key whose value is to be removed
     */
    remove(key: string) {
      this.map.delete(key);
    }
  
    /**
     * Check if the HashMap contains a given key
     * @param key The key to be checked
     */
    contains(key: string) {
      return this.map.has(key);
    }
  
    /**
     * Get all the keys present in the HashMap
     */
    keys() {
      return Array.from(this.map.keys());
    }
  
    /**
     * Get all the values present in the HashMap
     */
    values() {
      return Array.from(this.map.values());
    }
  
    /**
     * Get the size of the HashMap
     */
    size() {
      return this.map.size;
    }

    /**
     * Clear the HashMap
     */
    clear() {
        this.map.clear();
    }

    /**
     * Check if the HashMap is empty
     */
    isEmpty() {
        return this.map.size === 0;
    }

    /**
     * Iterate over the HashMap
     */
    forEach(callback: (value: any, key: string) => void) {
        for (const [key, value] of this.map) {
            callback(value, key);
        }
    }

    /**
     * Filter the HashMap
     */
    filter(callback: (value: any, key: string) => boolean) {
        const filtered = new HashMap();
        this.forEach((value, key) => {
            if (callback(value, key)) {
                filtered.put(key, value);
            }
        });
        return filtered;
    }

    /**
     * Get the entries of the HashMap
     */
    entries() {
        return Array.from(this.map.entries());
    }

    /**
     * Convert the HashMap to an object
     */
    toObject() {
        const obj: any = {};
        this.forEach((value, key) => {
            obj[key] = value;
        });
        return obj;
    }

    /**
     * Convert the HashMap to an array
     */
    toArray(){
        const arr: any[] = [];
        this.forEach((value, key) => {
            arr.push([key, value]);
        });
        return arr;
    }

    /**
     * Convert the HashMap to a flat array
     */
    toFlatArray(){
        const arr: any[] = [];
        this.forEach((value, key) => {
            arr.push(key);
            arr.push(value);
        });
        return arr;
    }

    /**
     * get the first key of the associated value
     * @param value The value whose key is to be returned
     */
    getKeyByValue(value: any): string | null {
        for (const [key, val] of this.map) {
            if (val === value) {
                return key;
            }
        }
        return null;
    }

    /**
     * get all the keys of the associated value
     * @param value The value whose keys are to be returned
     */
    getKeysByValue(value: any): string[] {
        const keys: string[] = [];
        for (const [key, val] of this.map) {
            if (val === value) {
                keys.push(key);
            }
        }
        return keys;
    }

    /**
     * update the key of a value
     * @param value The value whose key is to be updated
     * @param newKey The new key to be updated
     */
    updateKeyByValue(value: any, newKey: string) {
        const key = this.getKeyByValue(value);
        if (key) {
            this.remove(key);
            this.put(newKey, value);
        }
    }

};