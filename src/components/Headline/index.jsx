import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  const { page, children, handleReduce } = props;

  return (
    <div>
      <h1 className={classes.title}>{page} page</h1>

      <p className={classes.description}>
        アイテムの数は {children} 個です。
      </p>

      <button onClick={handleReduce}>減らす</button>
    </div>
  );
}
