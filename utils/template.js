const planesBack = require("./planesBack");

const template = (newDetail) => {
  const selectedPlan = planesBack.find(plan => plan.titulo === newDetail.plan);

  if (!selectedPlan) {
    return "Plan no encontrado"; 
  }
  let planInfoText = "Información del plan:\n";
  for (const key in selectedPlan.infoPlan) {
    planInfoText += `${key}: ${selectedPlan.infoPlan[key]}\n`;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body {
                background-color: aquamarine;
            }
        </style>
    </head>
    <body>
        <h1>¡Hola, ${newDetail.name}!</h1>
        <h3>Recibimos tu solicitud sobre el plan ${newDetail.plan}, te contamos que actualmente dicho plan cuenta con los siguientes servicios:</h3>
        
        <pre><strong>${planInfoText}</strong></pre>
        
        <h3>Pronto nos pondremos en contacto con el número que nos aportaste (${newDetail.cellphone}), en caso de ser incorrecto, te pedimos que llenes nuevamente el formulario.</h3>
        <h5>Atentamente: Veterinaria Patitas. ¡Saludos! </h5>
        
    </body>
    </html>
  `;
};

module.exports = template;
