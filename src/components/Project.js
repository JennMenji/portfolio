import React from "react";
import { capitalizeFirstLetter } from "../assets/utils/helpers";
import Photolist from "./Photolist.js";

function Project({ currentCategory }) {
  const { name, description } = currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <Photolist category={currentCategory.name} />
    </section>
  );
}

export default Project;
