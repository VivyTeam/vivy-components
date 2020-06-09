import { FieldsObject } from "../Forms/Validation";

const fieldValue = (element: Element) => {
  const { type, checked, value, id } = element as HTMLInputElement;

  switch (type) {
    case "checkbox":
      return { [id]: checked };
    case "button":
    case "submit":
    case "reset":
      return {};
    default:
      return { [id]: value };
  }
};

export default function formData(
  elements?: HTMLFormElement | HTMLFormControlsCollection
) {
  let data: FieldsObject = {};

  if (elements) {
    Array.from(elements).forEach((element) => {
      data = { ...data, ...fieldValue(element) };
    });
  }

  return data;
}
