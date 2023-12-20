import bcrypt from "bcryptjs"

export default async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(11);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.error("Error trying to hash password: ", error)
    }
}