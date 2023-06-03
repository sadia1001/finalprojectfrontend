export const url = "https://vast-tuna-wetsuit.cyclic.app/api";

export const setHeaders = () => {
const headers = {
headers: {
"x-auth-token": localStorage.getItem("token"),
},
};

return headers;
};