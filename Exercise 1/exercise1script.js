db.createCollection('Client', {validator: {$jsonSchema: {bsonType: 'object',title: 'Client',required: ['recommended by'],properties:{name:{bsonType: 'string'},telephone:{bsonType: 'int'},email:{bsonType: 'string'},registration_date:{bsonType: 'date'},Last shoppings:{bsonType: 'object',title: 'object',properties:{date:{bsonType: 'string'},glasses:{bsonType: 'object',title: 'object',properties:{prescription:{bsonType: 'object',title: 'object',properties:{right_eye:{bsonType: 'double'},left_eye:{bsonType: 'double'}}},glass_color:{bsonType: 'object',title: 'object',properties:{right_eye:{bsonType: 'double'},left_eye:{bsonType: 'double'}}},brand:{bsonType: 'string'},frame type:{enum: floating, paste, metallic},price:{bsonType: 'double'}}},supplier:{bsonType: 'object',title: 'object',properties:{address:{bsonType: 'string'},name:{bsonType: 'string'},phone:{bsonType: 'int'},fax:{bsonType: 'int'},nif:{bsonType: 'string'}}},employee:{bsonType: 'object',title: 'object',properties:{name:{bsonType: 'string'}}}}},recommended by:{bsonType: 'objectId'}}}}});