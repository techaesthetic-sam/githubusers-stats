import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = useContext(GithubContext);
  // console.log(repos);

  let languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    // total[language] = 30;
    // console.log(total[language]);
    if (!total[language]) total[language] = { label: language, value: 1 };
    else
      total[language] = {
        label: language,
        value: (total[language].value += 1),
      };
    return total;
  }, {});

  languages = Object.values(languages).sort((a, b) => a.value > b.value);
  // console.log(languages); // this is where it returns everything
  const chartData = [
    {
      label: "HTML",
      value: "290",
    },
    {
      label: "CSS",
      value: "260",
    },
    {
      label: "JAVASCRIPT",
      value: "580",
    },
  ];
  return (
    <section>
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={languages} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
