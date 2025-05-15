import { InputController, SelectController, RadioController, UploadController } from "@/components/form"

export const getController = (type) => {
	switch (type) {
		case 'input':
			return InputController;
		case 'select':
			return SelectController;
		case 'radio':
			return RadioController;
		case 'file':
			return UploadController;
		default:
			return InputController;
	}
}