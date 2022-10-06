import { useCallback, useState } from "react";
import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  const { items } = props;
  
  return (
    <div className={classes.grid}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={classes.card}>
          <h2 className={classes.title}>{item.title}</h2>
          <p className={classes.description}>{item.description}</p>
        </a>
      ))}
    </div>
  );
};
