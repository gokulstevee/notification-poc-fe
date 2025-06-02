const SuccessTag = ({ name }: { name: string }) => {
  if (!name) {
    return;
  }

  return (
    <p className="avenir-medium font-medium text-primary rounded-md min-h-[23px] bg-[#EAFFF5CC] text-xs text-center leading-[150%] px-2 flex justify-center items-center py-1">
      {name}
    </p>
  );
};

export default SuccessTag;
