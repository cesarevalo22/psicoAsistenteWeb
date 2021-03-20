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