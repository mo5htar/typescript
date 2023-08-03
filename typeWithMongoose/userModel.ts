import mongoose, { Model, model } from "mongoose";
// import bycrpt from "bycrpt";

// collection all types in interface
interface UserDocument {
  username: String;
  Password: String;
  PasswordConfirm: String;
  email: String;
  Pic: String;
  timeStamp: Date;
}

//collection all methos in interface
interface UserMethod {
  comparePassword(candidatePassword: String): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PasswordConfirm: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (this: UserDocument) {
  console.log(this.username, this.email);
});

userSchema.index({ email: 1 });

userSchema.pre("save", function (next: (err?: Error) => void) {
  if (!this.isModified("Password")) return next();

  //
});

userSchema.methods.comparedPassword = async function (
  candidatePassword: String
) {
  //return bycrpt.compate(candidatePassword,this.Password);
};

// model have m
type userModel = Model<UserDocument, {}, UserMethod>;

const User = model<UserDocument, userModel>("User", userSchema);
export default User;
