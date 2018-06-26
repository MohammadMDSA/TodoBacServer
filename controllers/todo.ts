import Controller, { RequestType } from "bacjs/out/server/controller";
import Todo from "../models/Todo";

export default class TodoController extends Controller {
	public init(): void {
		this.assign("", [RequestType.GET], async (req, h) => {
			let result = await Todo.find({});
			return result;
		});

		this.assign("/{id}", [RequestType.GET], async(req, h) => {
			return req.params;
		})
	}
}