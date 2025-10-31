// Detecta si la URL tiene 'www.' o no y devuelve la base correcta
const getBaseURL = () => {
    const currentHost = window.location.hostname; // Obtiene el host actual
    if (currentHost.startsWith('www.')) {
        return 'https://tienda.catalogosco.top/';
    } else {
        return 'https://tienda.catalogosco.top/';
    }
};

const baseURL = getBaseURL(); // Obtiene la URL base correcta

export default baseURL;
