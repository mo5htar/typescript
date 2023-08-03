import mongoose from "mongoose";

export interface User {
  username: String;
  Password: String;
  PasswordConfirm: String;
  email: String;
  Pic: String;
  timeStamp: Date;
}

export interface UserDoument extends mongoose.Document, User {
  comparedPassword(candidatePassword: String): Promise<boolean>;
}
