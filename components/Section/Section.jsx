const Section = ({ className, children }) => {
  return (
    <section className={`w-10/12 lg:w-11/12 mx-auto py-3 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
