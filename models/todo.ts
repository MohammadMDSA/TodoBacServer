import DBModel from "bacjs/out/mongodb/Model"
import { SchemaDefinition, Document } from "mongoose";

class Todo extends DBModel {
	protected static $schema(): SchemaDefinition {
		return {
			createdAt: {type: Number, index: true},
			title: String,
			description: String
		}
	}
}

export interface ITodo extends Document {
	createdAt: number;
	title: string;
	description: string
}

export default Todo.$model<ITodo>();