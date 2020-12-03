# StamAD FrontEnd

![](https://static.stamad.com/frontend/images/StamAd-Logo-RGB-V1.png)


##Getting Started
###Installing
###Running the tests
###Deployment
###Build With
###Versioning
###Authors
###License


Iniciar el proyecto
se debe ejecutar en la terminal npm start. una vez ejecutado se abrira de forma predeterminada la URL http://localhost:3000 en esta se contempla la pantalla de ingreso a modo de ejemplo.


.env

El Archivo .env debe incluir las siguientes variables locales para poder ejecutar el aplicativo. Si en sus desarrollos incluye variables adicionales, debe documentarlas en este archivo. 

REACT_APP_GATEWAY_END_POINT = EndPoint del MS de stam.ms.stamAD - (http://localhost:8080)  
REACT_APP_REGION_AWS= la región de aws 
REACT_APP_USER_POOL_COGNITO = id del pool de usuarios de cógnito
REACT_APP_USER_POOL_CLIENT_COGNITO = id del cliente al cual se le asignó el pool de usuarios.
REACT_APP_COGNITO_DOMAIN= link cognito domain. 

REACT_APP_TERMINOS = link que apunta al documento de términos y condiciones
REACT_APP_POLITICA_PRIVACIDAD = link que apunta al documento de la política de privacidad
REACT_APP_FACEBOOK = link  facebook
REACT_APP_INSTAGRAM = link Instagram
REACT_APP_WHATSAPP = link whats app
REACT_APP_HOMEPAGE = link homePage de stam

REACT_APP_AWS_ACCESS_KEY_ID = credencial de acceso a cógnito
REACT_APP_AWS_SECRET_ACCESS_KEY = credencial secreta de acceso a cógnito