const planesBack = [
    {
        id: 1,
        titulo: "Basico",
        infoPlan: {
            "Consulta y controles en clínica general (horario diurno)": "100% de reintegro",
            "Colocación de Microchip": "25% de reintegro",
            "Corte de uñas y limpieza de oidos": "100% de reintegro",
            "Horas de parto": "-",
            "Consulta domicilio": "100% de reintegro",
            "Guardia Consultas y controles general": "50% reintegro",
            "Telemedicina": "100% de reintegro",
            "Vacunas": "100% de reintegro",
            "Internación": "20% de reintegro",
            "Cirugías generales": "-",
            "Cirugías especiales": "-",
            "Endoscopía": "-",
            "Radiografía y ecografía": "20% de reintegro",
            "Cardiología": "20% de reintegro",
            "Dermatología": "-",
            "Oftalmología": "-",
            "Endocrinología": "-",
            "Alimentos y accesorios": "10% de reintegro",
            "Farmacia": "20% de reintegro",
            "Baño y Corte": "-"
        },
        costo: "$28.000 por mes"
    },
    {
        id: 2,
        titulo: "Estandar (Recomendado)",
        infoPlan: {
            "Consulta y controles clinica general (horario diurno)": "100% de reintegro",
            "Colocación de Microchip": "50% de reintegro",
            "Corte de uñas y limpieza de oidos": "100% de reintegro",
            "Horas de parto": "20% de reintegro",
            "Consulta a domicilio": "100% de reintegro",
            "Guardia consultas y controles general": "60% de reintegro",
            "Telemedicina": "100% de reintegro",
            "Vacunas": "100% de reintegro",
            "Internación": "40% de reintegro",
            "Cirugías generales": "Una (1) por año",
            "Cirugías especiales": "20% de reintegro",
            "Endoscopía": "20% de reintegro",
            "Radiografía y ecografía": "40% de reintegro",
            "Cardiología": "40% de reintegro",
            "Dermatología": "40% de reintegro",
            "Oftalmología": "40% de reintegro",
            "Endocrinología": "40% de reintegro",
            "Alimentos y accesorios": "15% de reintegro",
            "Farmacia": "30% de reintegro",
            "Baño y Corte": "50% de reintegro"
        },
        costo: "$40.000 por mes"
    },
    {
        id: 3,
        titulo: "Premium",
        infoPlan: {
            "Consulta y controles clinica general (horario diurno)": "100% de reintegro",
            "Colocación de Microchip": "100% de reintegro",
            "Corte de uñas y limpieza de oidos": "100% de reintegro",
            "Horas de parto": "100% de reintegro",
            "Consulta domicilio": "100% de reintegro",
            "Guardia Consultas y controles general": "100% de reintegro",
            "Telemedicina": "100% de reintegro",
            "Vacunas": "100% de reintegro",
            "Internación": "100% de reintegro",
            "Cirugías generales": "Ilimitado",
            "Cirugías especiales": "50% de reintegro",
            "Endoscopía": "50% de reintegro",
            "Radiografía y ecografía": "100% de reintegro",
            "Cardiología": "100% de reintegro",
            "Dermatología": "100% de reintegro",
            "Oftalmología": "100% de reintegro",
            "Endocrinología": "100% de reintegro",
            "Alimentos y accesorios": "20% de reintegro",
            "Farmacia": "40% de reintegro",
            "Baño y Corte": "50% de reintegro"
        },
        costo: "$75.000 por mes"
    }
];

const infoPlanArray = planesBack.map(plan => plan.infoPlan);


module.exports = planesBack;