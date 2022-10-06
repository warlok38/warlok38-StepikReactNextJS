import React from "react";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag } from "./../../components/Htag/Htag";
import { Tag } from "./../../components/Tag/Tag";

//5:40

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
    </div>
  );
};
