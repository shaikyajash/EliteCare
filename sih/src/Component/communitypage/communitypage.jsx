import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import Groups from "../groups/groups";

const CommunityPage = () => {
  const [wikipediaData, setWikipediaData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const featuredGroups = [
    { name: "Anxiety Disorders", category: "Mental health", icon: "👤" },
    { name: "Coronavirus (COVID-19)", category: "Infections", icon: "🦠" },
    { name: "Depression", category: "Mental health", icon: "👤" },
    {
      name: "Hip Replacement",
      category: "Operations and surgical procedures",
      icon: "🦴",
    },
    {
      name: "Irritable Bowel Syndrome",
      category: "Gut, bowel and stomach",
      icon: "🧬",
    },
    {
      name: "Knee Problems",
      category: "Bones, joints and muscles",
      icon: "🦴",
    },
    { name: "Menopause", category: "Women's health", icon: "👩" },
    { name: "Mirtazapine", category: "Brain and nerves", icon: "🧠" },
    {
      name: "Polymyalgia Rheumatica and GCA",
      category: "Bones, joints and muscles",
      icon: "🦴",
    },
  ];

  const categories = [
    "Allergies",
    "Blood & immune system",
    "Bones, joints and muscles",
    "Brain and nerves",
    "Cancer",
    "Chest and lungs",
    "Child health",
    "Contraception and sexual health",
    "Diabetes and hormone problems",
    "Ears, nose, throat and mouth",
    "Eyes",
    "General",
    "Genito-urinary/kidney",
    "Gut, bowel and stomach",
    "Health promotion",
    "Heart Health",
    "Infections",
    "Injury and accidents",
    "Liver and gallbladder",
    "Medicines",
    "Men's health",
    "Mental health",
    "Operations and surgical procedures",
    "Pregnancy and newborn",
    "Senior health",
    "Skin and nails",
    "Symptoms",
    "Teenage health",
    "Tests and investigations",
    "Women's health",
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // const handleCategoryClick = (category) => {
  //   const trimedText = category.replace(/\s+/g, "_");
  //   setSelectedCategory(trimedText);
  //   const wikipediaUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${trimedText}`;
  //   axios
  //     .get(wikipediaUrl)
  //     .then((response) => {
  //       setWikipediaData(response.data.extract);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching Wikipedia data:", error);
  //       setWikipediaData("Wikipedia article not found."); // Handle errors gracefully
  //     });
  // };

  const handleCategoryClick = (category) => {
    const trimmedText = category.replace(/\s+/g, "+");
    const url = `https://en.wikipedia.org/wiki/Special:Search?go=Go&search=${trimmedText}&ns0=1`;
    window.location.href = url;
  };

  const navigate = useNavigate();
  const [showGroups, setShowGroups] = useState(false);
  const [letter, setLetter] = useState("");

  function handleGoToGroup(group) {
    const groupName = group.replace(/\s+/g, "");
    navigate(`/community/${groupName}`);
  }

  function handleShowGroups(letter) {
    setShowGroups(true);
    setLetter(letter);
  }

  useEffect(() => {
    setWikipediaData(null);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-green-500 shadow flex items-start cursor-pointer"
                onClick={() => handleGoToGroup(group.name)}
              >
                <span className="text-2xl mr-3">{group.icon}</span>
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-gray-500">{group.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Condition and medicine categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow shadow-green-500 text-sm cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          {selectedCategory && (
            <div className="mt-4 flex flex-col border-2 border-green-500 bg-white rounded-lg p-4">
              <p>Selected category: {selectedCategory}</p>
              {wikipediaData ? (
                <div dangerouslySetInnerHTML={{ __html: wikipediaData }} />
              ) : (
                <p>Loading Wikipedia data...</p>
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Browse Groups</h2>
          <div className="flex flex-wrap gap-2">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className="bg-white px-3 py-1 rounded shadow  shadow-green-500"
                onClick={() => handleShowGroups(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
          {showGroups && <Groups letter={letter} />}
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
