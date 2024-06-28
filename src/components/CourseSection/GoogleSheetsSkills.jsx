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
        <p className="text-start p-4">{description}</p>
      </div>
    </div>
  );
}

function GoogleSheetsSkills() {
  const skills = [
    {
      number: "01",
      title: " Getting Started with Google Sheets",
      description: (
        <div className="flex flex-col">
          
          <li>Introduction to Google Sheets interface and basic navigation.</li>
          <li>Creating, opening, and saving spreadsheets.</li>
        </div>
      ),
    },
    {
      number: "02",
      title: "Formatting and Customizing Spreadsheets",
      description: (
        <div className="flex flex-col">
          <li>
            Formatting options: font styles, colors, borders, and backgrounds.
          </li>
          <li>Adjusting column width and row height.</li>
        </div>
      ),
    },
    {
      number: "03",
      title: "Formulas and Functions Essentials",
      description: (
        <div className="flex flex-col ">
          <li>
            Using built-in functions like SUM, AVERAGE, MAX, MIN to perform
            calculations.
          </li>
          <li>Writing formulas to manipulate and analyze data.</li>
        </div>
      ),
    },
    {
      number: "04",
      title: "Data Visualization and Charting",
      description: (
        <div className="flex flex-col">
          <li>
            Creating different types of charts (e.g., bar, line, pie, scatter)
            to represent data visually.
          </li>
          <li>Customizing chart elements such as titles, axes, and legends.</li>
        </div>
      ),
    },
    {
      number: "05",
      title: "Collaboration and Sharing Features",
      description: (
        <div className="flex flex-col ">
          <li>
            Sharing spreadsheets with others and setting permissions (view,
            edit, comment).
          </li>
          <li>
            Collaborating in real-time with multiple users on the same
            spreadsheet.
          </li>
        </div>
      ),
    },
    {
      number: "06",
      title: "Advanced Data Analysis with PivotTables and Filterss",
      description: (
        <div className="flex flex-col ">
          <li>Creating PivotTables to summarize and analyze large datasets.</li>
          <li>Applying filters to focus on specific data subsets.</li>
        </div>
      ),
    },
    {
      number: "07",
      title: "Automation with Macros and Apps Script",
      description: (
        <div className="flex flex-col ">
          <li>Recording and editing macros to automate repetitive tasks.</li>
          <li>
            Writing custom scripts using Google Apps Script to extend Google
            Sheets functionality.
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

export default GoogleSheetsSkills;
