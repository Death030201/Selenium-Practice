import React, { useState } from "react";

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [showTextbox, setShowTextbox] = useState(true);
  const [showHoverSuggestions, setShowHoverSuggestions] = useState(false);
  const [selectedTech, setSelectedTech] = useState("");

  const handleSuggestion = (e) => {
    const value = e.target.value.toLowerCase();
    const options = ["India", "Indonesia", "Indigo", "Canada", "USA"];
    const filtered = options.filter((item) =>
      item.toLowerCase().includes(value)
    );
    setSuggestions(filtered);
  };

  const handleWindowOpen = () => {
    window.open("https://polariscampus.com/", "_blank");
  };

  const handleTabSwitch = () => {
    window.location.href = "https://polariscampus.com/";
  };

  const handleAlert = () => {
    alert("Hello, share this practice page and share your knowledge");
  };

  const handleConfirm = () => {
    confirm("Are you sure you want to confirm?");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="p-10 font-sans space-y-10 w-full max-w-3xl bg-white shadow-xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-indigo-700">
           QA Workshop Practice page
        </h1>

        {/* Checkboxes */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Checkbox Example:
          </label>
          <div className="flex flex-wrap gap-4">
            {["Option1", "Option2", "Option3", "Option4"].map((opt, i) => (
              <label key={i} className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" id={`check${i}`} />
                {opt}
              </label>
            ))}
          </div>
        </section>

        {/* Radio Buttons */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Radio Button Example:
          </label>
          <div className="flex flex-wrap gap-4">
            {["Radio1", "Radio2", "Radio3"].map((opt, i) => (
              <label key={i} className="flex items-center gap-2 text-gray-600">
                <input type="radio" name="radioGroup" id={`radio${i}`} />
                {opt}
              </label>
            ))}
          </div>
        </section>

        {/* Auto Suggest */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Suggestion Class Example:
          </label>
          <input
            type="text"
            placeholder="Type country..."
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400"
            onChange={handleSuggestion}
          />
          <ul className="mt-2">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 px-2 py-1 hover:bg-indigo-100 rounded cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Dropdown */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Dropdown Example:
          </label>
          <select className="block border border-gray-300 rounded-lg p-2 w-full">
            <option value="">-- Select --</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4</option>
          </select>
        </section>

        {/* Windows / Tabs */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Switch Window Example:
          </label>
          <div className="space-x-4">
            <button
              onClick={handleWindowOpen}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Open Window
            </button>
            <button
              onClick={handleTabSwitch}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Open Tab
            </button>
          </div>
        </section>

        {/* Alerts */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Alert & Confirm Example:
          </label>
          <div className="space-x-4">
            <button
              onClick={handleAlert}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg"
            >
              Alert
            </button>
            <button
              onClick={handleConfirm}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Confirm
            </button>
          </div>
        </section>

        {/* Hide / Show */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Hide/Show Example:
          </label>
          <div className="space-x-4">
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowTextbox(false)}
            >
              Hide
            </button>
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowTextbox(true)}
            >
              Show
            </button>
          </div>
          {showTextbox && (
            <input
              type="text"
              className="border border-gray-300 p-2 rounded mt-3 block w-full"
              placeholder="This will be hidden/shown"
            />
          )}
        </section>

        {/* Web Table */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Web Table Example:
          </label>
          <table className="w-full table-auto border border-gray-300 rounded overflow-hidden">
            <thead className="bg-indigo-100">
              <tr>
                <th className="border px-4 py-2">Course</th>
                <th className="border px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Selenium</td>
                <td className="border px-4 py-2">$30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Cypress</td>
                <td className="border px-4 py-2">$25</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Playwright</td>
                <td className="border px-4 py-2">$35</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* iFrame */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            iFrame Example:
          </label>
          <iframe
            src="https://www.wikipedia.org/"
            title="Wikipedia"
            width="100%"
            height="400"
            className="rounded border border-gray-300"
          ></iframe>
        </section>

        {/* Hover Suggestions */}
        <section>
          <label className="block text-xl font-semibold text-gray-700 mb-2">
            Hover to Show Suggestions:
          </label>
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowHoverSuggestions(true)}
            onMouseLeave={() => setShowHoverSuggestions(false)}
          >
            <div className="bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
              Hover me
            </div>

            {showHoverSuggestions && (
              <ul className="absolute z-10 bg-white shadow-lg border rounded w-48 mt-1">
                {["React", "Vue", "Angular", "Svelte"].map((tech, i) => (
                  <li
                    key={i}
                    onClick={() => setSelectedTech(tech)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {selectedTech && (
            <p className="mt-3 text-green-700 font-medium">
              You selected: <span className="font-bold">{selectedTech}</span>
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;