"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import "handyscript";
var data = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
        city: 'New York',
        street: '123 Main St'
    }
};
const schema = {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true },
    address: {
        type: Object,
        properties: {
            city: { type: String },
            street: { type: String }
        }
    }
};
var isValid = JSON.validateSchema(data, schema);
console.log('Is valid:', isValid);
