import { InputController, SelectController, RadioController } from "@/components/form"

export const getController = (type) => {
	switch (type) {
		case 'input':
			return InputController;
		case 'select':
			return SelectController;
		case 'radio':
			return RadioController;
		default:
			return InputController;
	}
}