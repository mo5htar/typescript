import z from "zod";

const userSchema = z
  .object({
    username: z.string({
      required_error: "username is required",
      invalid_type_error: "username must be string",
    }),
    password: z
      .string({
        required_error: "password required",
      })
      .min(6, "Password must be at least 6 char"),

    passwordConfirm: z.string(),

    email: z.string({
      required_error: "email required",
    }),
    age: z.number(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string(),
    }),
  })
  .refine(
    (data) => {
      data.password == data.passwordConfirm;
    },
    { message: "passwords not match" }
  );

type UserZod = z.infer<typeof userSchema>;
function createUser(user: UserZod) {
  const ans = userSchema.parse(user);
}
