function SkillItem({ number, title, description }) {
  return (
    <div className="flex flex-col md:flex-row rounded-xl bg-gray-300 shadow-gray-500 shadow-lg h-auto p-2 m-2 w-[90%] mx-auto border">
      <div className="bg-goldenrod px-10 flex justify-center items-center md:w-20 rounded-md">
        <h1 className="text-5xl font-bold items-center text-center md:pt-2">{number}</h1>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-black text-2xl pb-3 font-bold text-center mt-2">{title}</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

function SkillMaster() {
  const skills = [
    {
      number: "01",
      title: "Captivating Dashboards",
      description: "Turn raw data into actionable insights with captivating dashboards and reports."
    },
    {
      number: "02",
      title: "Data Manipulation",
      description: "Master importing, transforming, cleaning, and refining data for analysis."
    },
    {
      number: "03",
      title: "DAX Proficiency",
      description: "Conquer complex calculations and supercharge data models with DAX (Data Analysis Expressions)."
    },
    {
      number: "04",
      title: "Data Security",
      description: "Fortify your data fortress with robust security measures and seamless sharing capabilities."
    },
    {
      number: "05",
      title: "Performance Optimization",
      description: "Turbocharge performance and troubleshooting with precision. Seamlessly integrate Power BI with other Microsoft tools for a cohesive data ecosystem."
    }
  ];

  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center pl-10 pr-10 pb-10 mt-9">
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

export default SkillMaster;
