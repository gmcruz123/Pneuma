
export const data = [
    {
        title: 'Informacion del ventilador',
        options: [{
            type: 'Tipo de ventilador',
            selectors: ['Invasivo', 'No invasivo']
        }, {
            type: 'Tipo de valvula',
            selectors: ['None']
        }],
        inputs:[],
        image: require('../../assets/logo.jpeg'),
    },
    {
        title: 'Informacion del paciente',
        options: [],
        inputs: ['Cédula', 'Nombre','Peso', 'Nacionalidad','Direccion'],
        image: require('../../assets/logo.jpeg'),
        
    },
];
