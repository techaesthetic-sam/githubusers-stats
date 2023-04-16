import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = useContext(GithubContext);
  // console.log(repos);
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    // total[language] = 30;
    // console.log(total[language]);
    if (!total[language])
      total[language] = { label: language, value: 1, stars: stargazers_count };
    else
      total[language] = {
        label: language,
        value: (total[language].value += 1),
        stars: total[language].stars + stargazers_count,
      };
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => a.value > b.value)
    .slice(0, 5);

  console.log(languages); // this is where it returns everything

  //most stars per language

  const mostPopular = Object.values(languages)
    .sort((a, b) => a.stars > b.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    }).slice(0,5);
  // console.log(mostPopular);
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
        <div></div>
        <div></div>
        {/* <ExampleChart data={chartData} /> */}

        <Pie3D data={mostUsed} />
        <Doughnut2D data={mostPopular} />
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
