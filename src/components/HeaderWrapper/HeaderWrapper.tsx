interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const HeaderWrapper = ({ children, className = "" }: ContainerWrapperProps) => {
  return (
    <div
      className={`px-6 py-3 bg-[#eaebf5] border-b-[#E4E4E7] border-b-[1px] ${className}`}
    >
      {children}
    </div>
  );
};

export default HeaderWrapper;
