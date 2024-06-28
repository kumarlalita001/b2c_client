function SkillItem({ number, title, description }) {
  return (
    <div className="flex flex-col md:flex-row rounded-xl bg-gray-200 shadow-gray-500 shadow-lg h-auto p-2 m-2 w-[90%] mx-auto">
      <div className="bg-goldenrod px-10 flex justify-center items-center md:w-20 rounded-md">
        <h1 className="text-5xl font-bold items-center text-center md:pt-2">
          {number}
        </h1>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-black text-2xl pb-3 font-bold text-center mt-2">
          {title}
        </h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

function MSExcelSkill() {
  const skills = [
    {
      number: "01",
      title: " Basic Excel Skills",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Navigating the Excel interface efficiently.</li>
          <li>Creating, formatting, and editing spreadsheets.</li>
          <li>Managing rows, columns, and cells effectively.</li>
        </div>
      ),
    },
    {
      number: "02",
      title: "Formulas and Functions",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Mastering essential formulas such as SUM, AVERAGE, and IF.</li>
          <li>
            Understanding advanced functions like VLOOKUP, INDEX/MATCH, and
            SUMIFS.
          </li>
          <li>Using logical and text functions to manipulate data.</li>
        </div>
      ),
    },
    {
      number: "03",
      title: "Data Analysis and Visualization",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Sorting and filtering data for analysis.</li>
          <li>
            Creating pivot tables to summarize and analyze large datasets.
          </li>
          <li>Designing charts and graphs to visualize trends and patterns.</li>
        </div>
      ),
    },
    {
      number: "04",
      title: "Data Management and Manipulation",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Importing and exporting data from external sources.</li>
          <li>Cleaning and transforming data for analysis.</li>
          <li>
            Using data validation and protection features to ensure data
            integrity.
          </li>
        </div>
      ),
    },
    {
      number: "05",
      title: "Automation with Macros",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Recording and editing macros to automate repetitive tasks.</li>
          <li>
            Implementing basic programming concepts with Visual Basic for
            Applications (VBA).
          </li>
        </div>
      ),
    },
    {
      number: "06",
      title: "Advanced Techniques",
      description: (
        <div className="flex flex-col items-center justify-start">
          <li>Working with array formulas for complex calculations.</li>
          <li>Harnessing the power of Excel's what-if analysis tools.</li>
          <li>
            Collaborating with others using Excel's sharing and collaboration
            features.
          </li>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center pl-10 pr-10 pb-10 mt-9">
      <div className="w-full flex flex-wrap flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-white py-5 mb-3">
          Skills You Will <span className="text-goldenrod">Master</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            number={skill.number}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MSExcelSkill;
