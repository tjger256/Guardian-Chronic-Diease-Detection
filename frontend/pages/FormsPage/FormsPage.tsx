import axios from "axios";
import styles from "./Forms.module.css";
import { APIGateway } from "@/routes";
import { useState } from "react";
import ReactLoading from "react-loading";
const keys = [
  "PhysicalActivities",
  "SmokerStatus",
  "AlcoholDrinkers",
  "RemovedTeeth",
  "DifficultyConcentrating",
  "LastCheckupTime",
  "BlindOrVisionDifficulty",
  "Sex",
  "DifficultyDressingBathing",
  "DifficultyErrands",
  "DeafOrHardOfHearing",
  "HadKidneyDisease",
  "HadArthritis",
  "PneumoVaxEver",
  "HadCOPD",
  "HadDiabetes",
  "DifficultyWalking",
  "ChestScan",
  "AgeCategory",
  "HadStroke",
  "HadAngina",
  "GeneralHealth",
  "PhysicalHealthDays",
  "MentalHealthDays",
  "SleepHours",
  "WeightInKilograms",
  "BMI",
];

export default function FormsPage(props: any) {
  const [assessment, set_assessment] = useState<null | AssessmentType>(null);

  return (
    <>
      <div
        id="overlay"
        style={{
          opacity: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "199",
          background: "var(--ruby-red)",
          pointerEvents: "none",
          color: "white",
          transition: "opacity 400ms ease",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "3rem" }}>
          Waiting for Results
        </p>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Can take up to thirty seconds.
        </p>
        <ReactLoading type="bubbles" color="white" height="4rem" width="4rem" />
      </div>
      <div
        id="questionnaire"
        style={{
          margin: "calc(80px + 2rem)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Select
          question="Have you done any physical activities recently?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="PhysicalActivities"
        />
        <Select
          question="How often do you smoke?"
          options={[
            ["Never Smoked", 0],
            ["Former Smoker", 1],
            ["Occasional Smoker", 2],
            ["Daily Smoker", 3],
          ]}
          id="SmokerStatus"
        />
        <Select
          question="Do you drink alcohol?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="AlcoholDrinkers"
        />
        <Form
          question="How many tooth(s) did you have removed?"
          id="RemovedTeeth"
          width="50px"
          centered
        />
        <Select
          question="Do you have difficulty concentrating?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="DifficultyConcentrating"
        />
        <Select
          question="When is the last time you got a check-up?"
          options={[
            ["Never", 0],
            ["Last Week", 1],
            ["Last Month", 2],
            ["Last Year", 3],
            ["More than 2 years ago", 4],
          ]}
          id="LastCheckupTime"
        />
        <Select
          question="Do you have blindness or difficulty seeing?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="BlindOrVisionDifficulty"
        />
        <Select
          question="What is your sex?"
          options={[
            ["Female", 0],
            ["Male", 1],
          ]}
          id="Sex"
        />
        <Select
          question="Do you have difficulty dressing or bathing?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="DifficultyDressingBathing"
        />
        <Select
          question="Do you have difficulty running errands alone?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="DifficultyErrands"
        />
        <Select
          question="Do you have difficulty hearing or are you deaf?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="DeafOrHardOfHearing"
        />
        <Select
          question="Do you have kidney disease?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadKidneyDisease"
        />
        <Select
          question="Do you have arthritis?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadArthritis"
        />
        <Select
          question="Have you ever received a pneumococcal vaccine?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="PneumoVaxEver"
        />
        <Select
          question="Have you ever had COPD (Chronic Obstructive Pulmonary Disease)?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadCOPD"
        />
        <Select
          question="Have you ever had diabetes?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadDiabetes"
        />
        <Select
          question="Do you have difficulty walking?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="DifficultyWalking"
        />
        <Select
          question="Have you undergone a chest scan?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="ChestScan"
        />
        <Select
          question="What is your age?"
          options={[
            ["0-7", 0],
            ["8-14", 1],
            ["15-21", 2],
            ["22-28", 3],
            ["29-35", 4],
            ["36-42", 5],
            ["43-49", 6],
            ["50-56", 7],
            ["57-63+", 8],
          ]}
          id="AgeCategory"
        />
        <Select
          question="Have you had a stroke?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadStroke"
        />
        <Select
          question="Have you had an angina?"
          options={[
            ["No", 0],
            ["Yes", 1],
          ]}
          id="HadAngina"
        />
        <Select
          question="How is your health generally?"
          options={[
            ["Poor", 0],
            ["Fair", 1],
            ["Good", 2],
            ["Very Good", 3],
            ["Excellent", 4],
          ]}
          id="GeneralHealth"
        />
        <Form
          question="How many days were you sick last month?"
          id="PhysicalHealthDays"
          width="50px"
          centered
        />
        <Form
          question="How many days did you have poor mental health?"
          id="MentalHealthDays"
          width="50px"
          centered
        />
        <Form
          question="How many hours of sleep do you get on average?"
          id="SleepHours"
          width="50px"
          centered
        />
        <Form
          question="What is your weight in kilogram?"
          id="WeightInKilograms"
          width="50px"
          centered
        />
        <Form question="What is your BMI?" id="BMI" width="50px" centered />
        <button
          style={{
            border: "none",
            padding: "0.5rem",
            width: "100px",
            borderRadius: "7px",
            backgroundColor: "var(--ruby-red)",
            color: "white",
            fontSize: "1.2rem",
            alignSelf: "center",
            cursor: "pointer",
          }}
          onClick={async () => {
            const data: { [key: string]: any } = {};
            for (const key of keys) {
              const element = document.getElementById(key) as HTMLElement;
              if (element) {
                if (element.tagName === "SELECT") {
                  const select = element as HTMLSelectElement;
                  data[key] = parseFloat(select.value);
                } else if (element.tagName === "INPUT") {
                  const input = element as HTMLInputElement;
                  data[key] = parseFloat(input.value);
                }
              }
            }
            const Overlay = document.getElementById(
              "overlay"
            ) as HTMLDivElement;
            Overlay.style.opacity = "1";
            Overlay.style.pointerEvents = "auto";
            const result = await axios.post(
              APIGateway.api("send_prompt_to_gpt"),
              {
                data: {
                  data: data,
                },
              }
            );
            const q = document.getElementById(
              "questionnaire"
            ) as HTMLDivElement;
            q.style.display = "none";
            const resultinfo = document.getElementById(
              "result"
            ) as HTMLDivElement;

            resultinfo.style.display = "flex";
            const resultsdata = JSON.parse(result.data) as AssessmentType;
            Overlay.style.opacity = "0";
            Overlay.style.pointerEvents = "none";

            set_assessment(resultsdata);
          }}
        >
          Submit
        </button>
      </div>
      <div id="result" className={styles.result}>
        <div
          className={styles.plan}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2 style={{ textAlign: "center" }}>Risk for Heart Disease</h2>
          <h1
            style={{
              textAlign: "center",
              margin: "1rem 0rem",
              color:
                `hsl(${Math.round(
                  120 - parseFloat(assessment?.risk_probability || "0") * 120
                )}, 70%, 60%)` || "black",
            }}
          >
            {assessment?.risk_probability}
          </h1>
          <p>{assessment?.assessment}</p>
        </div>
        {(assessment &&
          assessment.plans.map((plan, index) => (
            <Plan plan={plan} key={index + "plan"} />
          ))) ||
          null}
      </div>
    </>
  );
}

type FormProps = {
  id: string;
  question: string;
  width: string;
  centered?: boolean;
  int?: boolean;
  float?: boolean;
};
function Form(props: FormProps) {
  return (
    <div className={styles.form}>
      <h2>{props.question}</h2>
      <input
        id={props.id}
        style={{
          width: props.width,
          textAlign: props.centered ? "center" : "left",
        }}
      />
    </div>
  );
}
type SelectProps = {
  options: [string, any][];
  id: string;
  question: string;
};
function Select(props: SelectProps) {
  return (
    <div className={styles.select}>
      <h2>{props.question}</h2>
      <select id={props.id}>
        {props.options.map(([label, value], index) => (
          <option value={value} key={props.id + index}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
type Task = {
  task_name: string;
  task_description: string;
  task_days: string[];
  task_importance: string;
};
type AssessmentType = {
  plans: PlanType[];
  risk_probability: string;
  assessment: string;
};
type PlanType = {
  plan_title: string;
  plan_summary: string;
  plan_tasks: Task[];
};
type PlanProps = {
  plan: PlanType;
};
function Plan(props: PlanProps) {
  const Plan = props.plan;
  return (
    <div className={styles.plan}>
      <div>
        <h2>{Plan.plan_title}</h2>
        <p>{Plan.plan_summary}</p>
      </div>
      <div style={{ padding: "1rem 0rem" }}>
        <p style={{ marginBottom: "1rem", padding: "0" }}>Task list</p>
        {Plan.plan_tasks.map((task, index) => (
          <Task task={task} key={Plan.plan_title + index + task.task_name} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
          borderTop: "1px solid rgb(205, 205, 205)",
        }}
      >
        <h3>{`Tasks: ${Plan.plan_tasks.length}`}</h3>
        <h2>
          🔥
          {Plan.plan_tasks.reduce(
            (sum, curr) => parseInt(curr.task_importance) + sum,
            0
          )}
        </h2>
      </div>
    </div>
  );
}
type TaskProp = {
  task: Task;
};
function Task(props: TaskProp) {
  const Task = props.task;
  return (
    <div>
      <h3>{Task.task_name}</h3>
      <p>{Task.task_description}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {Task.task_days.map((e, i) => (
          <p className={styles.task_tag} key={i + Task.task_name}>
            {e}
          </p>
        ))}
      </div>
      <div>
        <p>🔥{Task.task_importance}</p>
      </div>
    </div>
  );
}
