interface FormInputProp {
  label: string;
  type: string;
  value: string | number;
  name: string;
}
const FormInput = ({ label, type, value, name }: FormInputProp) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        readOnly
        type={type}
        name={name}
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
      />
    </div>
  );
};

export default FormInput;
