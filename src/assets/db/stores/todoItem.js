const Datastore = require('nedb-promises');
const Ajv = require('ajv');
const todoItemSchema = require('../schemas/todoItem');
const process = require('process');

class TodoItemStore {
    constructor() {
        const ajv = new Ajv({
            allErrors: true,
            useDefaults: true
        });

        this.schemaValidator = ajv.compile(todoItemSchema);
        const dbPath = './doffice/todolist.db';
        // const dbPath = process.cwd();
        console.log(dbPath)
        this.db = Datastore.create({
            filename: dbPath,
            timestampData: true,
        });
    }

    validate(data) {
        return this.schemaValidator(data);
    }

    create(data) {
        alert('create hit')
        const isValid = this.validate(data);
        if (isValid) {
            return this.db.insert(data);
        }
    }

    read(_id) {
        return this.db.findOne({_id}).exec()
    }

    readAll() {
        return this.db.find()
    }

    readActive() {
        return this.db.find({isDone: false}).exec();
    }

    archive({_id}) {
        return this.db.update({_id}, {$set: {isDone: true}})
    }
}

// function myFunc1()
// {

//     alert('bi');
// }
//  s//  exports.TodoItemStore =TodoItemStore ;
// exports.todoItem = todoItem;
