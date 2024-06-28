function SkillItem({ number, title, description }) {
  return (
    <div className="flex flex-col md:flex-row rounded-xl bg-gray-300 shadow-gray-500 shadow-lg h-auto w-[90%] p-2 m-2 mx-auto border">
      <div className="bg-goldenrod px-10 flex justify-center items-center md:w-20 rounded-md">
        <h1 className="text-5xl font-bold items-center text-center md:pt-2 ">{number}</h1>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-black text-2xl pb-3 font-bold text-center mt-2">{title}</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

function TableauSkill() {
  const skills = [
    {
    number: "01",
    title: "Data Visualization",
    description: "Master the art of visualizing data effectively to convey insights clearly and intuitively."
  },
  {
    number: "02",
    title: "Dashboard Creation",
    description: "Learn to design interactive and dynamic dashboards that provide actionable insights at a glance."
  },
  {
    number: "03",
    title: "Data Connection and Preparation",
    description: "Acquire skills to connect to various data sources and prepare data for analysis within Tableau."
  },
  {
    number: "04",
    title: "Calculations and Expressions",
    description: "Explore advanced calculations and expressions to perform complex analyses and create custom metrics."
  },
  {
    number: "05",
    title: "Mapping and Geospatial Analysis",
    description: "Utilize Tableau's mapping capabilities to analyze geospatial data and visualize geographic trends."
  },
  {
    number: "06",
    title: "Advanced Analytics",
    description: "Learn to perform advanced statistical and predictive analytics within Tableau for deeper insights."
  },
  {
    number: "07",
    title: "Dashboard Interactivity",
    description: "Enhance user engagement by adding interactive elements like filters, parameters, and actions to dashboards."
  },
  {
    number: "08",
    title: "Data Storytelling",
    description: "Develop the ability to craft compelling data stories by combining visualizations into coherent narratives."
  },

];

  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center pl-10 pr-10 pb-10 mt-10">
      <div className="w-full flex flex-wrap flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-white py-5 mb-3">Skills You Will <span className="text-goldenrod">Master</span></h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillItem key={index} number={skill.number} title={skill.title} description={skill.description} />
        ))}
      </div>
    </div>
  );
}

export default TableauSkill;