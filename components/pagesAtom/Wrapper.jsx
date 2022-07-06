const Wrapper = ({ children, style }) => {
    return (
        <div className={` ${style? style : 'max-w-[640px] lg:max-w-[906px] mx-auto px-[4%] sm:px-[2%] lg:px-0'}`}>
          {children}
      </div>
    );
  };
  
  export default Wrapper;