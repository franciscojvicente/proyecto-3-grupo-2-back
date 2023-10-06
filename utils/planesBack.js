const planesBack = [
    {
        id: 1,
        titulo: "Basico",
        infoPlan: {
            "consulta y controles clinica general (horario diurno)": "100%",
            "colocacion de microchip": "25%",
            "corte de uñas y limpieza de oidos": "100%",
            "horas de parto": "-",
            "consulta domicilio": "100%",
            "Guardia consultas y controles general": "50%",
            "telemedicina": "100%",
            "vacunas": "100%",
            "internacion": "20%",
            "cirugias generales": "-",
            "cirugias especiales": "-",
            "endoscopia": "-",
            "radiografias y ecografias": "20%",
            "cardiologia": "20%",
            "dermatolopgia": "-",
            "oftalmologia": "-",
            "endocrinologia": "-",
            "alimentos y accesorios": "10%",
            "farmacia": "20%",
            "baño y corte": "-"
        }
    },
    {
        id: 2,
        titulo: "Estandar (Recomendado)",
        infoPlan: {
            "consulta y controles clinica general (horario diurno)": "100%",
            "colocacion de microchip": "50%",
            "corte de uñas y limpieza de oidos": "100%",
            "horas de parto": "20%",
            "consulta domicilio": "100%",
            "Guardia consultas y controles general": "60%",
            "telemedicina": "100%",
            "vacunas": "100%",
            "internacion": "40%",
            "cirugias generales": "1 por año",
            "cirugias especiales": "20%",
            "endoscopia": "20%",
            "radiografias y ecografias": "40%",
            "cardiologia": "40%",
            "dermatolopgia": "40%",
            "oftalmologia": "40%",
            "endocrinologia": "40%",
            "alimentos y accesorios": "15%",
            "farmacia": "30%",
            "baño y corte": "50%"
        }
    },
    {
        id: 3,
        titulo: "Premium",
        infoPlan: {
            "consulta y controles clinica general (horario diurno)": "100%",
            "colocacion de microchip": "100%",
            "corte de uñas y limpieza de oidos": "100%",
            "horas de parto": "100%",
            "consulta domicilio": "100%",
            "Guardia consultas y controles general": "100%",
            "telemedicina": "100%",
            "vacunas": "100%",
            "internacion": "100%",
            "cirugias generales": "ilimitado",
            "cirugias especiales": "50%",
            "endoscopia": "50%",
            "radiografias y ecografias": "100%",
            "cardiologia": "100%",
            "dermatolopgia": "100%",
            "oftalmologia": "100%",
            "endocrinologia": "100%",
            "alimentos y accesorios": "20%",
            "farmacia": "40%",
            "baño y corte": "50%"
        }
    }
];

const infoPlanArray = planesBack.map(plan => plan.infoPlan);


module.exports = planesBack;