interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="px-4 mb-24">{children}</div>;
};
export default Container;
