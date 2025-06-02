const NormalTag = ({ name }: { name: string }) => {
  if (!name) {
    return;
  }

  return (
    <p className="avenir-medium font-medium text-[#007bff] rounded-md min-h-[23px] bg-[#e7f3ff] text-xs text-center leading-[150%] px-2 flex justify-center items-center py-1">
      {name}
    </p>
  );
};

export default NormalTag;
