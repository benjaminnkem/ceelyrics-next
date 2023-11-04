const WidthClamp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="md:max-w-[1200px] w-11/12 mx-auto">{children}</div>;
};

export default WidthClamp;
