const field = 
{
    "body": {
    "ES": {
      
        "loginError1": {
            "Text1": "Contraseña Inválida",
            "Text2": "Tu contraseña no es válida, intenta nuevamente",
            "Text3": "aceptar"
        },
        "inDevelopment": {
            "Text1": "Componete en Desarrollo",
            "Text2": "Pronto lo tendremos disponible para ti",
            "Text3": "aceptar"
        },

        "login": {
            "Title": "Bienvenid@",
            "SubTitle": "Ingresa tus credenciales para continuar",
            "FieldEmail": "Correo electrónico",
            "FieldPassword": "Contraseña",
            "LabelRestorePassword": "Recuperar Contraseña",
            "ButtonLogin": "Inicia sesión",
            "ValidationEmail": "Formato no válido"
        },

        "changeColor": {
            "Title": "Cambiar tablero de color",
            "SubTitle": "puede cambiar de color las columnas y personalizar a su gusto los tableros",
            "switch": "Volver al color original",
            "ButtonCancel": "cancelar",
            "buttonAccept": "Cambiar Color"
        },
        "colors": {
            "color1": "Verde",
            "color2": "azul Oscuro",
            "color3": "Azul",
            "color4": "Rojo",
        },
        "dashboard": {
            "button1": "Algo más",
            "addBoard": " + Agregar tablero",
            "pages": " páginas",

        },
        "header": {
            "Title": "¿Tienes preguntas?",

        },
        "column": {
            "Title": "Hola Amigo",
            "element": "elemento",
            
        },
 
    },
    "EN": {
       
        "loginError1": {
            "Text1": "invalid Password",
            "Text2": "your password is not valid try again",
            "Text3": "accept"

        },
        "inDevelopment": {
            "Text1": "Component in development",
            "Text2": "Soon we will have it available for you",
            "Text3": "accept"
        },
        "login": {
            "Title": "Welcome",
            "SubTitle": "Enter your credentials to continue",
            "FieldEmail": "Email address",
            "FieldPassword": "Password",
            "LabelRestorePassword": "Recovery password",
            "ButtonLogin": "Log in",
            "ValidationEmail": "Invalid format"
        },
        "changeColor": {
            "Title": "Change board color",
            "SubTitle": "you can change the color of the columns and customize the boards to your liking",
            "switch": "Return to original color",
            "ButtonCancel": "cancel",
            "buttonAccept": "Change Color"
        },
        "colors": {
            "color1": "Green",
            "color2": "Dark Blue",
            "color3": "Blue",
            "color4": "Red",
        },
        "dashboard": {
            "button1": "More",
            "addBoard": " Add Board",
            "pages": " Pages",

        },
        "header": {
            "Title": "Do you have question",

        },
        "column": {
            "Title": "Hello Friend",
            "element": "element",

        },
        
    }
},
"details": 2
};

const usersDB = {
   users: [
        {
            user: 'carevalo@gmail.com',
            password:'estudiante',
            name: 'César Arévalo',
            role: 'Estudiante',
            avatar: 'CA'
        },
        {   
            user: 'josedelgado@gmail.com',
            password: 'profesor',
            name: 'Jose Delgado',
            role: 'Profe',
            avatar: 'JD' 
        }
    ],
}



export  {field,usersDB} ;