import React from 'react';
import CohortDetails from './components/CohortDetails';

const cohorts = [
  {
    cohortCode: "CJP-Jan2024",
    startedOn: "01-Jan-2024",
    status: "Ongoing",
    coach: "John Doe",
    trainer: "Alice Smith"
  },
  {
    cohortCode: "FSD-Feb2024",
    startedOn: "15-Feb-2024",
    status: "Scheduled",
    coach: "Mike Ross",
    trainer: "Harvey Specter"
  },
  {
    cohortCode: "DATA-Nov2023",
    startedOn: "01-Nov-2023",
    status: "Completed",
    coach: "Rachel Zane",
    trainer: "Donna Paulsen"
  }
];

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>
      <div>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
