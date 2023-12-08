import styles from "./StartWork.module.scss";

type StartWorkProps = {
  name: string;
};

const StartWork = ({ name }: StartWorkProps) => {
  return <div className={styles.StartWork}>StartWork {name}</div>;
};

export default StartWork;
