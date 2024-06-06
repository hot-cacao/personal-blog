import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend",
    Svg: require("@site/static/img/frontend.svg").default,
    description: (
      <>
        Learning the fundamentals of frontend development from basic to
        intermediate levels.
      </>
    ),
  },
  {
    title: "Backend",
    Svg: require("@site/static/img/backend.svg").default,
    description: (
      <>
        Learning about the main concepts of backend development (REST APIs,
        GraphQL) using Node.js.
      </>
    ),
  },
  {
    title: "Database",
    Svg: require("@site/static/img/database.svg").default,
    description: (
      <>Learning about database queries and basic optimization techniques.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
