import { Header } from "src/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl px-2 min-h-screen">
      <Header />
      {children}
    </div>
  );
};
