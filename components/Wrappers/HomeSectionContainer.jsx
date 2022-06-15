const HomeSectionContainer = ({ children }) => {
  return (
    <div className="w-full overflow-hidden md:overflow-visible">
      <div className="my-[80px] w-4/5  md:max-w-[906px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default HomeSectionContainer;
