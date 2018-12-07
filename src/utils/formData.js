const fieldValue = target => {
  const { type, checked, value, id } = target;
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

export default function formData(elements) {
  let data = {};

  Array.from(elements).forEach(element => {
    data = { ...data, ...fieldValue(element) };
  });

  return data;
}
