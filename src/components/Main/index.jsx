import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";


export function Main(props) {
  const { page } = props;
  return (
    <main className={classes.main}>
      <Headline page={page}>
        <code className={classes.code}>pages/{page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
