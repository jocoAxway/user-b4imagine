var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('User', {
    "description": "Manage user information",
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "country": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;