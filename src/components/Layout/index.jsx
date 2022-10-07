export const Layout = (props) => {
  const { children } = props;

  return <div className="flex flex-col items-center mx-auto max-w-2xl px-2 min-h-screen">{children}</div>;
};
