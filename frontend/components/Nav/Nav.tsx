import styles from "./Nav.styles.module.css";
export type NavProps = {
  PageState: any;
};
export default function Nav(props: NavProps) {
  return (
    <header className={styles.container}>
      <Navigation />
      <Title>The Guardian</Title>
      <Login />
      <MenuButton />
    </header>
  );
}

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink href="#MissionStatement">Our Mission</NavLink>
      <NavLink href="#AboutUs">About us</NavLink>
      <NavLink href="#TryNow">Demo</NavLink>
    </nav>
  );
}

export type NavLinkProp = {
  children: React.ReactNode;
  href: string;
};
function NavLink(props: NavLinkProp) {
  const { href, children } = props;
  return (
    <a className={styles.navlink} href={href}>
      {children}
    </a>
  );
}
type TitleProps = {
  children: React.ReactNode;
};
function Title(props: TitleProps) {
  return (
    <div className={styles.title}>
      <h1>{props.children}</h1>
      <img src="images/guardian_logo.png"></img>
    </div>
  );
}

function Login() {
  return (
    <div className={styles.login}>
      Login
      <button
        style={{
          background: "none",
          border: "none",
          height: "2rem",
          width: "2rem",
          position: "relative",
        }}
      >
        <LoginWithGoogle />
      </button>
    </div>
  );
}

function LoginWithGoogle() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={{ display: "block", height: "100%", width: "100%" }}
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      ></path>
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      ></path>
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      ></path>
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      ></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
  );
}

function MenuButton() {
  return (
    <svg
      className={styles.menu_button}
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="var(--ruby-red)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
