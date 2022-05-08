

export const nameValidations = {
    minLength: {
        value:3,
        message: 'Este campo debe tener longitud minima de 2 caracteres',
    },
    required: {
        value: true,
        message: 'Este campo es requerido',
    }
};



export const emailVal = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;



export const emailValidations = {
    required: {
        value: true,
        message: 'Este campo es requerido',
    },
    pattern: {
        value: emailVal,
        message: 'Este campo debe tener un correo valido'
    }
};


export const direccionValidations = {
    required: {
        value: true,
        message: 'Este campo es requerido',
    }
};

export const  phoneVal = /^[0-9]$/;

export const telefonoValidations = {
    required: {
        value: true,
        message: 'Este campo es requerido',
    },
};






