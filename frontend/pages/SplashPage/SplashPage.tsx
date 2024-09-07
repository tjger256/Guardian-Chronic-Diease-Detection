import styles from "./SplashPage.module.css";
export default function SplashPage(props: any) {
  return (
    <>
      <Banner PageState={props.PageState} />
      <section>
        <div
          className={styles.about_us}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className={styles.logos}
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="images/avanade-logo.png"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "cover",
              }}
            />
            <img
              src="images/cpp-logo.png"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "cover",
              }}
            />
          </div>
          <p style={{ maxWidth: "700px", fontSize: "1.2rem" }}>
            We are{" "}
            <b>
              a ragtag team of students from across a broad range of disciplines
              with the energy to better our world with machine learning and
              artificial intelligence
            </b>
            . This service is our submission for Cal Poly Pomona{`'`}s 2024 AI
            Hackathon.
          </p>
        </div>
      </section>
    </>
  );
}

export function Banner(props: any) {
  return (
    <div
      className={styles.banner}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        borderRadius: "7px",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{ height: "100%", width: "100%" }}
        className={styles.banner_img}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "50% 0%",
          }}
          src="images/smiling_doctor_holding_bear.png"
          alt="doctor holding bear"
        />
      </div>
      <div
        className={styles.banner_info}
        style={{
          height: "100%",
          width: "35%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "0px",
          flexDirection: "column",
          background: "var(--ruby-red)",
          boxShadow:
            "-20px 0px 40px rgba(0,0,0,0.4), inset 0px 0px 10px rgba(0,0,0,0.2)",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          The best medicine is
        </h1>
        <h1
          style={{
            color: "var(--bright-orange)",
            fontWeight: "800",
            fontSize: "4rem",
            fontFamily: "var(--secondary-font)",
          }}
        >
          Prevention.
        </h1>
        <p style={{ color: "white", lineHeight: "2" }}>
          Empowering you with{" "}
          <b style={{ fontSize: "1.1rem", textDecoration: "underline" }}>
            cost-effective, personalized health plans
          </b>
          to keep you on the right track. Leveraging advanced machine learning,
          we offer{" "}
          <b style={{ fontSize: "1.1rem", textDecoration: "underline" }}>
            quick risk assessments
          </b>{" "}
          so that you can easily keep track of your health, potentially saving
          you medical bills.
        </p>
        <button
          className={styles.interactive_button}
          style={{
            padding: "0.5rem 1rem",
            border: "2px solid white",
            borderRadius: "7px",
            background: "none",
            color: "white",
            fontWeight: "800",
            fontSize: "1.2rem",
            margin: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            props.PageState[1](1);
          }}
        >
          Demo
        </button>
      </div>
    </div>
  );
}
