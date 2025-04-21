const StatisticsTitle = ({ text, count }) => {
  return (
    <>
      <p>
        {text} {count}
      </p>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + " %";

  return (
    <>
      <StatisticsTitle text={"good"} count={good} />
      <StatisticsTitle text={"neutral"} count={neutral} />
      <StatisticsTitle text={"bad"} count={bad} />
      <StatisticsTitle text={"all"} count={all} />
      <StatisticsTitle text={"average"} count={average} />
      <StatisticsTitle text={"positive"} count={positive} />
    </>
  );
};

export default Statistics;
