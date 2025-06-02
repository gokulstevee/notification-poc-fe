interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper = ({
  children,
  className = "",
}: ContainerWrapperProps) => {
  return <div className={`p-[1.5rem] ${className}`}>{children}</div>;
};

export default ContainerWrapper;
