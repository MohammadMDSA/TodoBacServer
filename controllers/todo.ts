import Controller, { RequestType } from "bacjs/out/server/controller";
import Todo from "../models/Todo";

export default class TodoController extends Controller {
	public init(): void {
		this.assign("", [RequestType.GET], async (req, h) => {
			let result = await Todo.find({});
			return result;
		});

		this.assign("", [RequestType.PUT], async (req, h) => {
			let { createdAt, title, description } = (req.payload) as any;

			let count = (await Todo.find({})).length;

			let model = new Todo({createdAt, title, description, id: count + 1});

			return await model.save();
		});

		this.assign("/{id}", [RequestType.GET], async (req, h) => {
			return req.params;
		});
	}
}