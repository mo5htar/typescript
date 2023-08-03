import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { UserDoument } from "../types";
import User from "./userModel";

export async function createUser(user) {
  return await User.create();
}

export async function findUser(
  query: FilterQuery<UserDoument>,
  opions: QueryOptions = { age: 30 }
) {
  return await User.findOne(query, null, opions);
}

export async function updataUser(
  query: UpdateQuery<UserDoument>,
  user: UserDoument
) {
  return await User.findByIdAndUpdate(user.id, query, {
    runValidators: true,
  });
}

export async function deleteUsers() {
  return await User.deleteMany();
}
