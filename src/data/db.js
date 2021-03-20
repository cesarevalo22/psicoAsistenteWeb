const field = 
{
    "body": {
    "ES": {
      
        "loginError1": {
            "Text1": "Contraseña Inválida",
            "Text2": "Tu contraseña no es válida, intenta nuevamente"
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
            "Text2": "your password is not valid try again"
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
            name: 'César Arévalo'
        },
        {   
            user: 'josedelgado@gmail.com',
            pasword: 'profesor',
            name: 'Jose Delgado' 
        }
    ],
}



export  {field,usersDB} ;