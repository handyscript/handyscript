//// ------------------------------- HANDY JSON © HandyScript 6m/16d/23y -------------------------------

import HashMap from "./hashmap";

declare global{

    interface JSON{
        /**
         * Check if a JSON string is valid
         */
        isValid(json: string): boolean;

        /**
         * the flatten function takes a JSON object and returns a new object with all the keys flattened.
         */
        flatten(json: object): object;

        /**
         * the unflatten function takes a JSON object with flattened keys and returns a new object with unflattened keys.
         */
        unflatten(json: object): object;

        /**
         * the merge function takes two JSON objects and returns a new object with the keys merged.
         * If the same key exists in both objects, the value of the second object will be used.
         */
        merge(json1: object, json2: object): object;

        /**
         * the filter function takes a JSON object and a condition function and returns a new object with the keys that satisfy the condition.
         */
        filter(json: object | any[], condition: (value: any) => boolean): object | any[];

        /**
         * Sort a JSON array by a key in ascending or descending order
         */
        sort(json: object[], key: string, order?: SortOrder): void;

        /**
         * Return an array of values of a key in a JSON object
         */
        pluck(json: object | any[], key: string): any[];

        /**
         * Transform a JSON object using a mapping object
         */
        transform(json: object, mapping: object): object;

        /**
         * Validate a JSON object against a JSON schema
         */
        validateSchema(json: object, schema: object): boolean;

        /**
         * Search a JSON object using a query string
         * @example
         * const json = {
         * "name": "John",
         * "age": 30,
         * "cars": [
         *  { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
         *  { "name": "BMW", "models": ["320", "X3", "X5"] },
         * ]
         * }
         * 
         * JSON.query(json, "cars[0].name") // { "name": "Ford" }
         */
        query(json: object, query: string): any;

        /**
         * Convert a JSON object to a HashMap
         */
        toHashmap(json: object): HashMap;
    }
};

Object.assign(JSON, {
    isValid: (json: string): boolean => {
        try{
            JSON.parse(json);
            return true;
        }catch(e){
            return false;
        }
    },

    flatten: (json: object): object => {
        const result: Record<string, any> = {}; // Type assertion to define result as Record<string, any>

        const recurse = (cur: any, prop: string): void => {
            // useing switch instead of if-else for better performance
            switch(true){
                case Object(cur) !== cur: result[prop] = cur; break;

                case Array.isArray(cur):
                    if(cur.length === 0) result[prop] = [];
                    for(let i = 0; i < cur.length; i++){
                        recurse(cur[i], prop ? `${prop}.${i}` : `${i}`);
                    }
                    break;

                default:
                    let isEmpty = true;
                    for(const p in cur){
                        isEmpty = false;
                        recurse(cur[p], prop ? `${prop}.${p}` : p);
                    }
                    if(isEmpty) result[prop] = {};
            }
        };

        recurse(json, "");
        return result;
    },

    unflatten: (json: object): object => {
        if(Object(json) !== json || Array.isArray(json)) return json;

        const result: Record<string, any> = {};

        for(const key in json){
            const keys = key.split(".");
            let cur = result;
            for(let i = 0; i < keys.length - 1; i++){
                const key = keys[i];
                cur[key] ??= Object(json) === json && !Array.isArray(json) ? {} : [];
                cur = cur[key];
            }
            cur[keys[keys.length - 1]] = json[key as keyof typeof json];
        }

        return result[""];
    },

    merge: (json1: object, json2: object): object => {
        const result = JSON.parse(JSON.stringify(json1));
        for(const key in json2){
            if(key in result && typeof result[key] === "object" && typeof json2[key as keyof typeof json2] === "object"){
                result[key] = JSON.merge(result[key], json2[key as keyof typeof json2]);
            }else{
                result[key] = json2[key as keyof typeof json2];
            }
        }
        return result;
    },

    filter: (json: object | any[], condition: (value: any) => boolean): object | any[] => {
        if(Array.isArray(json)){
            const result: any[] = [];
            for(const value of json){
                if(condition(value)) result.push(value);
            }
            return result;
        }else{
            const result: Record<string, any> = {};
            for(const key in json){
                if(condition(json[key as keyof typeof json])) result[key as keyof typeof result] = json[key as keyof typeof json];
            }
            return result;
        }
    },

    sort: (json: object[], key: string, order: SortOrder = "asc"): void => {
        json.sort((a, b) => {
            if(a[key as keyof typeof a] > b[key as keyof typeof b]) return order === "asc" ? 1 : -1;
            if(a[key as keyof typeof a] < b[key as keyof typeof b]) return order === "asc" ? -1 : 1;
            return 0;
        });
    },

    pluck: (json: object | any[], key: string): any[] => {
        const result: any[] = [];
        if(Array.isArray(json)){
            for(const value of json){
                result.push(value[key as keyof typeof value]);
            }
        }else{
            for(const value in json){
                result.push(json[value as keyof typeof json][key as keyof typeof json]);
            }
        }
        return result;
    },

    transform: (json: object, mapping: object): object => {
        const result: Record<string, any> = {};
        for(const key in mapping){
            result[key as keyof typeof result] = json[mapping[key as keyof typeof mapping] as keyof typeof json];
        }
        return result;
    },

    validateSchema: (json: object, schema: object): boolean => {
        for(const key in schema){
            if(!(key in json)) return false;
            if(typeof schema[key as keyof typeof schema] === "object" && typeof json[key as keyof typeof json] === "object"){
                if(!JSON.validateSchema(json[key as keyof typeof json], schema[key as keyof typeof schema])) return false;
            }
        }
        return true;
    },

    query: (json: object, query: string): any => {
        const keys = query.split(".");
        let result: any = json;
        for(const key of keys){
            if(key in result){
                result = result[key as keyof typeof result];
            }else{
                return null;
            }
        }
        return result;
    },

    toHashmap: (json: object): HashMap => {
        return new HashMap(json);
    },

});

export default JSON;