import React from "react";

import cls from "../App.css";

function Repository(props) {
  const { name, url, description, language, stars, forks} = props;
  return (
    <div className={cls["repo-row"]}>
      <div className={cls["repo-name"]}><a href={url}>{name}</a></div>
      <div className={cls["repo-desc"]}>{description}</div>
      <div className={cls["repo-status"]}>
        { (language) && <div className={cls["repo-lan"]}><div className={`${cls["circle-language"]} ${cls[language.toLowerCase()]}`} />{language}</div> }
        <div className={cls["repo-stars"]}><span >Stars: </span>{stars}</div>
        <div className={cls["repo-forks"]}><span >Forks: </span>{forks}</div>
      </div>
    </div>
  );
}

export default Repository;
