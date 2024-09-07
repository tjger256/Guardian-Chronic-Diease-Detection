import styles from "./Row.styles.module.css";
export type RowProps = {
  children: React.ReactNode;
};
export function Row(props: RowProps) {
  return <div className={styles.container}>{props.children}</div>;
}
