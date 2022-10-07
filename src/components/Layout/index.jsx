import classes from "src/components/Layout/Layout.module.css";

export const Layout = (props) => {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};
