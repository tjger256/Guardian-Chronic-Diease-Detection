import styles from "./Banner.styles.module.css";
type BannerProps = {
  img: {
    src: string;
    alt: string;
  };
  height: string;
  width: string;
  children: React.ReactNode;
};
export default function Banner(props: BannerProps) {
  return (
    <div>
      <div>
        <img src={props.img.src} alt={props.img.alt} />
        <div>{props.children}</div>
      </div>
      <aside></aside>
    </div>
  );
}
