// --- INSTRUCCIONES ---
// Para actualizar los datos de la calculadora, edite las listas que se encuentran a continuación.
// - netWeight: Peso Neto de la fruta (para el precio comercial $/kg).
// - weightPerBox: Peso Bruto de la caja (para el flete aéreo).

window.APP_DATA = {

  // 1. LISTA DE ESPECIES (PRODUCTOS BASE)
  species: [
    { "id": 1, "name": "Arándanos" },
    { "id": 2, "name": "Paltas" },
    { "id": 3, "name": "Uvas" },
    { "id": 4, "name": "Mangos" },
    { "id": 5, "name": "Espárragos" }
  ],

  // 2. LISTA DE FORMATOS DE EMPAQUE
  formats: [
    // Arándanos
    { "id": 1, "speciesId": 1, "name": "12x510", "netWeight": 6.12, "weightPerBox": 8.19, "boxesPerContainer": 2200, "boxesPerSkid": 350 },
    { "id": 2, "speciesId": 1, "name": "12x500", "netWeight": 6.0, "weightPerBox": 8.03, "boxesPerContainer": 2200, "boxesPerSkid": 350 },
    { "id": 3, "speciesId": 1, "name": "12x312", "netWeight": 3.74, "weightPerBox": 5.01, "boxesPerContainer": 4080, "boxesPerSkid": 600 },
    { "id": 4, "speciesId": 1, "name": "12x310", "netWeight": 3.72, "weightPerBox": 4.98, "boxesPerContainer": 4080, "boxesPerSkid": 600 },
    { "id": 5, "speciesId": 1, "name": "12x300", "netWeight": 3.6, "weightPerBox": 4.82, "boxesPerContainer": 4080, "boxesPerSkid": 600 },
    { "id": 6, "speciesId": 1, "name": "12x125", "netWeight": 1.5, "weightPerBox": 2.01, "boxesPerContainer": 7800, "boxesPerSkid": 1200 },
    { "id": 7, "speciesId": 1, "name": "Bulk",   "netWeight": 4.0, "weightPerBox": 4.82, "boxesPerContainer": 5440, "boxesPerSkid": 880 },
    { "id": 8, "speciesId": 1, "name": "8x510",  "netWeight": 4.08, "weightPerBox": 8.19, "boxesPerContainer": 4080, "boxesPerSkid": 600 },
    
    // Espárragos
    { "id": 9, "speciesId": 5, "name": "1x11 lb", "netWeight": 5.0, "weightPerBox": 6.68, "boxesPerContainer": null, "boxesPerSkid": 500 },
    { "id": 10, "speciesId": 5, "name": "1x5 Kg", "netWeight": 5.0, "weightPerBox": 6.7, "boxesPerContainer": null, "boxesPerSkid": 500 },
    { "id": 11, "speciesId": 5, "name": "1x4 Kg", "netWeight": 4.0, "weightPerBox": 5.36, "boxesPerContainer": null, "boxesPerSkid": 500 },
    { "id": 18, "speciesId": 5, "name": "11x450g", "netWeight": 4.95, "weightPerBox": 5.45, "boxesPerContainer": null, "boxesPerSkid": 500 },

    // Paltas
    { "id": 12, "speciesId": 2, "name": "1x4 Kg", "netWeight": 4.0, "weightPerBox": 5.36, "boxesPerContainer": 5280, "boxesPerSkid": null },
    { "id": 13, "speciesId": 2, "name": "1x10 Kg", "netWeight": 10.0, "weightPerBox": 13.39, "boxesPerContainer": 2400, "boxesPerSkid": null },
    { "id": 14, "speciesId": 2, "name": "1x5,6 Kg", "netWeight": 5.6, "weightPerBox": 7.5, "boxesPerContainer": 3200, "boxesPerSkid": null },

    // Mangos
    { "id": 15, "speciesId": 4, "name": "1x4 Kg", "netWeight": 4.0, "weightPerBox": 5.36, "boxesPerContainer": 5544, "boxesPerSkid": null },

    // Uvas
    { "id": 16, "speciesId": 3, "name": "10x500gr", "netWeight": 5.0, "weightPerBox": 6.7, "boxesPerContainer": 2400, "boxesPerSkid": null },
    { "id": 17, "speciesId": 3, "name": "1x8,2 Kg", "netWeight": 8.2, "weightPerBox": 10.98, "boxesPerContainer": 2280, "boxesPerSkid": null }
  ],

  // 3. LISTA DE FLETES MARÍTIMOS
  maritimeFreights: [
    { "id": 1, "speciesId": 2, "origin": "Altamira", "destination": "Rotterdam", "cost": 4800 },
    { "id": 2, "speciesId": 2, "origin": "Altamira", "destination": "Algeciras", "cost": 5992 },
    { "id": 3, "speciesId": 2, "origin": "Manzanillo", "destination": "Busan", "cost": 6153 },
    { "id": 4, "speciesId": 2, "origin": "Manzanillo", "destination": "Yokohama", "cost": 4105 },
    { "id": 5, "speciesId": 2, "origin": "Manzanillo", "destination": "Shangai", "cost": 5465 },
    { "id": 6, "speciesId": 2, "origin": "Manzanillo", "destination": "Hong Kong", "cost": 4700 },
    { "id": 7, "speciesId": 3, "origin": "Salvador", "destination": "Singapore", "cost": 7612.8 }
  ],

  // 4. LISTA DE TARIFAS AÉREAS
  airRates: [
    { "id": 1, "speciesId": 1, "origin": "Guadalajara", "destination": "Haneda", "ratePerKg": 1.9 },
    { "id": 2, "speciesId": 1, "origin": "Guadalajara", "destination": "Hong Kong", "ratePerKg": 1.747 },
    { "id": 3, "speciesId": 1, "origin": "Guadalajara", "destination": "Kuala Lumpur", "ratePerKg": 1.903 },
    { "id": 4, "speciesId": 1, "origin": "Guadalajara", "destination": "Madrid", "ratePerKg": 0.8736 }
  ]
};
