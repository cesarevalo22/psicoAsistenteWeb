const messages = {
    message1: 'No es posible crear tu cuenta',
    message2: 'Ya existe un usuario en el sistema con el correo ingresado. Inicia sesión para ingresar a tu cuenta.',
    message3: 'Tu cuenta ya se encuentra creada',
    message4: 'El correo que ingresaste ha sido invitado de forma previa por una compañía para utilizar StamAD. Hemos enviado a tu correo un link para que actives tu cuenta.',
    message5: 'Tu cuenta ha sido creada de forma previa, solo debes activarla para empezar a utilizar nuestros servicios. Hemos enviado a tu correo un nuevo link para que actives tu cuenta.',
    message6: 'El correo ingresado se encuentra asociado a otra compañía en el sistema. Este debe ser desvinculado de la compañía actual si quiere crear una nueva cuenta en StamAD.',
}

export const CONFIRM_CODE_MESSAGES = {
    title1: 'No hemos podido generar un nuevo código',
    title2: 'No hemos podido activar un nuevo código',
    title3: 'No hemos podido activar tu cuenta',
    message1: 'Se ha generado un error al intentar enviarte un nuevo código de verificación. Por favor intenta más tarde.',
    message2: 'Tu usuario no existe o ya ha sido verificado. Si crees que esto es un error por favor contacta a soporte.',
    message3: 'Se ha generador un error al intentar activar tu cuenta, solicita un nuevo código e intenta de nuevo.',
}

export const TRANSLATION_ERROR_MESSAGES = {
    title: '¡Ups 🥴! Algo ha salido mal',
    message: 'Un error ha ocurrido y tu petición no se ha completado. Intentalo nuevamente.'
}

export default messages;