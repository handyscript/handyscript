// import "handyscript";
import "../lib/date";

import Utils from "handyutility";

type AddressSchema = {
  city: string;
  street: string;
};

type UserSchema = {
  name: string;
  age?: number;
  email: string;
  address?: AddressSchema;
};

const data: UserSchema = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  address: {
    city: "New York",
    street: "123 Main St"
  }
};

const schema: Schema<UserSchema> = {
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

const isValid = JSON.validateSchema(data, schema);
console.log("Is valid:", isValid);
console.log(new Date().daysInMonth());
console.log(new Date().timestamp());

console.log(Utils.operators.is(1, 1));

