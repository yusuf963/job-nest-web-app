export function getToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token'); // this cause  run time error  on mobile siomulator
        if (!token) return false;
        return token;
    }
    return false
}


export const logOut = () => {
    localStorage.removeItem('token');
};
