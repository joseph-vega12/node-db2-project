
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        // id: primary key, unique, not null (integers that auto-increment)
        table.increments(); 
        // : VIN :
        table.text('VIN', 128).unique().notNullable();
        // : MAKE :
        table.text('Make', 128).notNullable();
        // : MODEL :
        table.text('Model', 128).notNullable();
        // : MILEAGE :
        table.text('Mileage', 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

