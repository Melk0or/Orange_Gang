import { createLazyFileRoute } from "@tanstack/react-router";
import { FunctionComponent } from "react";
import Card from "../components/Card";
import rootStyles from "../styles/root.module.scss";

const WelcomePage = () => {
  return (
    <div className={rootStyles.root}>
      <Card
        title="Бомбер"
        src="https://static.tildacdn.com/tild6430-3839-4439-b464-303563623834/75363643.jpg"
      />
      <Card
        title="Джерси"
        src="https://static.tildacdn.com/tild6430-3839-4439-b464-303563623834/75363643.jpg"
      />
      <Card
        title="Кожура"
        src="https://static.tildacdn.com/tild6430-3839-4439-b464-303563623834/75363643.jpg"
      />
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: WelcomePage,
});
