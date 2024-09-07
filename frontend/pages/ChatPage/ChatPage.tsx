import styles from "./ChatPage.module.css";
export default function ChatPage() {
  return <></>;
}

type BubbleProp = {
  children: React.ReactNode;
  is_other?: boolean;
};
function Bubble(props: BubbleProp) {
  const style_is_other = {
    color: "var(--ruby-red)",
    border: "2px solid var(--ruby-red)",
  };
  const style_is_self = {
    color: "gray",
    border: "2px solid gray",
  };

  return (
    <div
      className={styles.bubble}
      style={{ justifyContent: props.is_other ? "start" : "end" }}
    >
      <div style={props?.is_other ? style_is_other : style_is_self}>
        {props.children}
      </div>
      <aside
        style={{ borderColor: props?.is_other ? "var(--ruby-red)" : "gray" }}
      ></aside>
    </div>
  );
}
