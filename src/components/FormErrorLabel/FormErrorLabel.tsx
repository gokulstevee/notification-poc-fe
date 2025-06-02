type FormErrorLabelProps = {
  children: React.ReactNode;
};

const FormErrorLabel = ({ children }: FormErrorLabelProps) => {
  return <p className="text-[0.8rem] text-danger">{children}</p>;
};

export default FormErrorLabel;
