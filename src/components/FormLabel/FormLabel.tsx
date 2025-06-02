type FormLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const FormLabel = ({ htmlFor, children }: FormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[0.9rem] font-medium text-[#4a4a4a]"
    >
      {children}
    </label>
  );
};

export default FormLabel;
