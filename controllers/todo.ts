import Controller, { RequestType } from "bacjs/out/server/controller";
import Todo from "../models/Todo";

export default class TodoController extends Controller {
	public init(): void {
		this._prefix = "Todo"

		this.assign("", [RequestType.GET], async (req, h) => {
			await Todo.find({});
		});

		this.assign("/{id}", [RequestType.GET], async(req, h) => {
			return req.params;
		})
	}
}