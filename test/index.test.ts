// import "handyscript";
import "../lib/date";

import Utils from "handyutility";

type UserSchema = {
  name: string;
  age?: number;
  email: string;
};

const data: UserSchema = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

const schema: Schema<UserSchema> = {
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true },
};

const isValid = JSON.validateSchema(data, schema);
console.log("Is valid:", isValid);
console.log(new Date().daysInMonth());
console.log(new Date().timestamp());

console.log(Utils.operators.is(1, 1));

