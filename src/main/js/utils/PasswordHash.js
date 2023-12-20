import bcrypt from "bcryptjs";

export default async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, 11);
  } catch (error) {
    console.error("Error trying to hash password: ", error);
  }
}
