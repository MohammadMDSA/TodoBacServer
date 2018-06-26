import DBModel from "bacjs/out/MongoDB/Model"
import { SchemaDefinition, Document } from "mongoose";

class Todo extends DBModel {
	protected static $schema(): SchemaDefinition {
		return {
			createdAt: { type: Number, index: true, required: true },
			title: { type: String, required: true },
			description: { type: String, required: true },
			id: { type: Number, unique: true, required: true}
		}
	}
}

export interface ITodo extends Document {
	createdAt: number;
	title: string;
	description: string,
	id: number
}

export default Todo.$model<ITodo>();