import React from "react";
import styles from "./TemplateName.module.scss";

type TemplateNameProps = {
  name: string;
};

const TemplateName = ({ name }: TemplateNameProps) => {
  return <div className={styles.TemplateName}>StartWork {name}</div>;
};

export default TemplateName;
