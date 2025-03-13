export const validateEmail = (email) => {
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return regex.test(email);
};

export const validateName = (name) => {
    const regex = /^[A-Za-z]{3,15}$/;
    return regex.test(name);
}

export const firstLettre = (name) => {
    return name[0].toUpperCase();
}