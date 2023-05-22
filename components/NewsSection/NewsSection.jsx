const NewsSection = ({ children, className, title = "section title" }) => {
  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <h1 className="prose-xl font-medium">{title}</h1>
      <hr className="bg-black w-full h-[2px]" />
      {children}
    </div>
  );
};

export default NewsSection;
