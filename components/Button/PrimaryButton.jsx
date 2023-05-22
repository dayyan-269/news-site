const PrimaryButton = ({
  children,
  className,
  onClick = null,
  compType = "button",
}) => {
  return (
    <button
      type={compType}
      className={`border-[1.5px] rounded-sm prose-sm px-2 py-1 duration-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
