import bcrypt, { hash } from 'bcryptjs';

export const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 5);
    } catch (error) {
        console.error("error hashing password", error);
        return;
    }
}

export const comparePassword = async (password, hashPas) => {
    try {
        return await bcrypt.compare(password, hashPas);
    } catch (error) {
        console.log("Error comparing passwords", error);
        return;
    }
}