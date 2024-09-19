import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { endPoints, axiosInstance } from "../../services/api";
import Loading from "../loading/loading";
import { useNavigate } from "react-router-dom";

export default function NGOPage() {
  const [searchText, setSearchText] = useState("");
  const [ngos, setNGOs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  async function handleFormSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const response = await axiosInstance.get(
      endPoints.FETCHNGOBYDISEASE
    );
    console.log(response);
    const filteredNGOs = response.data.filter(
      (ngo) => searchText.toLowerCase() === ngo.specialty.toLowerCase()
    );
    setNGOs(filteredNGOs);
  }

  const fakeNGOs = [
    {
      name: "LifeSavers Foundation",
      description: "Providing organ and blood donations for critical patients.",
      specialty: "Donation",
      email: "yajash40@gmail.com",
    },
    {
      name: "HeartHelp Initiative",
      description: "Supporting heart patients with medical care and resources.",
      specialty: "Cardiology",
      email: "yajash40@gmail.com",
    },
    {
      name: "CancerCare Society",
      description: "Offering treatment support and care for cancer patients.",
      specialty: "Cancer",
      email: "yajash40@gmail.com",
    },
    {
      name: "Kidney Health Trust",
      description:
        "Dedicated to improving kidney health and transplant services.",
      specialty: "Kidney",
      email: "yajash40@gmail.com",
    },
    {
      name: "LungLife Association",
      description: "Improving the quality of life for lung disease patients.",
      specialty: "Pulmonology",
      email: "yajash40@gmail.com",
    },
    {
      name: "BoneMarrow Aid Foundation",
      description: "Helping patients in need of bone marrow transplants.",
      specialty: "Donation",
      email: "yajash40@gmail.com",
    },
    {
      name: "Diabetes Support Network",
      description:
        "Providing education and care for individuals with diabetes.",
      specialty: "Diabetes",
      email: "yajash40@gmail.com",
    },
    {
      name: "VisionForAll",
      description:
        "Offering support and treatment for visually impaired individuals.",
      specialty: "Ophthalmology",
      email: "yajash40@gmail.com",
    },
    {
      name: "Mental Wellness Trust",
      description:
        "Promoting mental health awareness and providing counseling services.",
      specialty: "MentalHealth",
      email: "yajash40@gmail.com",
    },
    {
      name: "HepatitisHelp",
      description: "Dedicated to providing resources for Hepatitis patients.",
      specialty: "Hepatitis",
      email: "yajash40@gmail.com",
    },
    {
      name: "BloodBond Initiative",
      description:
        "Connecting blood donors with patients in need of transfusions.",
      specialty: "Donation",
      email: "yajash40@gmail.com",
    },
    {
      name: "Leukemia Fighters",
      description: "Support and resources for patients battling leukemia.",
      specialty: "Leukemia",
      email: "yajash40@gmail.com",
    },
    {
      name: "HIV Hope Foundation",
      description:
        "Providing healthcare support for individuals living with HIV.",
      specialty: "HIV",
      email: "yajash40@gmail.com",
    },
    {
      name: "Epilepsy Empowerment",
      description:
        "Helping patients with epilepsy manage their condition effectively.",
      specialty: "Epilepsy",
      email: "yajash40@gmail.com",
    },
    {
      name: "Stroke Support Group",
      description:
        "Assisting stroke survivors with recovery and rehabilitation.",
      specialty: "Stroke",
      email: "yajash40@gmail.com",
    },
    {
      name: "Alzheimer’s Aid",
      description:
        "Providing care and support for Alzheimer's patients and families.",
      specialty: "Alzheimers",
      email: "yajash40@gmail.com",
    },
    {
      name: "Thalassemia Care Foundation",
      description: "Support and treatment for patients with thalassemia.",
      specialty: "Thalassemia",
      email: "yajash40@gmail.com",
    },
    {
      name: "Autism Alliance",
      description: "Raising awareness and offering support to autism patients.",
      specialty: "Autism",
      email: "yajash40@gmail.com",
    },
    {
      name: "Parkinson’s Partners",
      description:
        "Providing resources and support for Parkinson's disease patients.",
      specialty: "Parkinsons",
      email: "yajash40@gmail.com",
    },
    {
      name: "Sickle Cell Solutions",
      description: "Support and healthcare services for sickle cell patients.",
      specialty: "SickleCell",
      email: "yajash40@gmail.com",
    },
    {
      name: "Rare Diseases Foundation",
      description:
        "Support for patients diagnosed with rare and uncommon diseases.",
      specialty: "RareDiseases",
      email: "yajash40@gmail.com",
    },
    {
      name: "Endometriosis Awareness Network",
      description:
        "Helping women cope with endometriosis through support and education.",
      specialty: "Endometriosis",
      email: "yajash40@gmail.com",
    },
    {
      name: "Multiple Sclerosis Care",
      description:
        "Providing resources and care for multiple sclerosis patients.",
      specialty: "MS",
      email: "yajash40@gmail.com",
    },
    {
      name: "Cystic Fibrosis Support",
      description:
        "Offering treatment and resources for cystic fibrosis patients.",
      specialty: "CysticFibrosis",
      email: "yajash40@gmail.com",
    },
    {
      name: "Prostate Cancer Aid",
      description:
        "Supporting prostate cancer patients with care and treatment.",
      specialty: "ProstateCancer",
      email: "yajash40@gmail.com",
    },
    {
      name: "Asthma Action Network",
      description:
        "Helping patients manage asthma symptoms with care and support.",
      specialty: "Asthma",
      email: "yajash40@gmail.com",
    },
    {
      name: "Cerebral Palsy Foundation",
      description: "Providing care and support for cerebral palsy patients.",
      specialty: "CerebralPalsy",
      email: "yajash40@gmail.com",
    },
    {
      name: "Spina Bifida Assistance",
      description: "Dedicated to supporting patients living with spina bifida.",
      specialty: "SpinaBifida",
      email: "yajash40@gmail.com",
    },
    {
      name: "Hemophilia Support Society",
      description: "Offering resources and care for hemophilia patients.",
      specialty: "Hemophilia",
      email: "yajash40@gmail.com",
    },
    {
      name: "Lupus Life Network",
      description:
        "Supporting patients dealing with lupus through care and resources.",
      specialty: "Lupus",
      email: "yajash40@gmail.com",
    },
    {
      name: "ALS Support Foundation",
      description:
        "Providing care and support for ALS patients and their families.",
      specialty: "ALS",
      email: "yajash40@gmail.com",
    },
    {
      name: "Dermatitis Care Initiative",
      description:
        "Helping patients manage dermatitis through education and care.",
      specialty: "Dermatitis",
      email: "yajash40@gmail.com",
    },
    {
      name: "Pancreatic Cancer Foundation",
      description:
        "Dedicated to supporting pancreatic cancer patients with treatment.",
      specialty: "PancreaticCancer",
      email: "yajash40@gmail.com",
    },
    {
      name: "Migraines Matter",
      description: "Offering support and care for chronic migraine sufferers.",
      specialty: "Migraines",
      email: "yajash40@gmail.com",
    },
    {
      name: "Polio Rehabilitation Network",
      description: "Supporting polio survivors with rehabilitation and care.",
      specialty: "Polio",
      email: "yajash40@gmail.com",
    },
    {
      name: "Anemia Awareness Association",
      description:
        "Helping patients with anemia through education and resources.",
      specialty: "Anemia",
      email: "yajash40@gmail.com",
    },
    {
      name: "Psoriasis Support Group",
      description:
        "Providing care and resources for individuals with psoriasis.",
      specialty: "Psoriasis",
      email: "yajash40@gmail.com",
    },
    {
      name: "Glaucoma Research Foundation",
      description: "Dedicated to research and support for glaucoma patients.",
      specialty: "Glaucoma",
      email: "yajash40@gmail.com",
    },
    {
      name: "Tinnitus Support Network",
      description: "Helping patients manage and cope with tinnitus symptoms.",
      specialty: "Tinnitus",
      email: "yajash40@gmail.com",
    },
    {
      name: "Crohn’s and Colitis Care",
      description:
        "Providing care for patients with Crohn’s disease and colitis.",
      specialty: "Crohns",
      email: "yajash40@gmail.com",
    },
  ];

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   const filteredNGOs = fakeNGOs.filter(
  //     (ngo) => searchText.toLowerCase() === ngo.specialty.toLowerCase()
  //   );
  //   setNGOs(filteredNGOs);
  // }

  function handleNGOClick(ngo) {
    const trimedText = ngo.name.replace(/\s+/g, "");
    navigate(`/ngo/${trimedText}`, { state: { ngo } });
  }

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <form
          className="bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-row items-center justify-center"
          onSubmit={handleFormSubmit}
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search NGO by disease"
            className="w-full text-center border-b-2 pb-1 border-gray-300 focus:border-green-500 rounded-lg mx-1 outline-none"
          />
          <button
            type="submit"
            className="border-2 px-4 py-1 rounded-xl border-green-500 font-semibold hover:bg-green-500 hover:text-white mx-1"
          >
            List
          </button>
        </form>
        <div className="bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-col items-center justify-center mt-6">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              {ngos.length > 0 ? (
                ngos.map((ngo, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-left w-full cursor-pointer border-b-2 border-gray-200 py-4"
                      onClick={() => {
                        handleNGOClick(ngo);
                      }}
                    >
                      <h2 className="text-xl font-bold">{ngo.name}</h2>
                    </div>
                  );
                })
              ) : (
                <h2>No NGO found for {searchText}</h2>
              )}
            </div>
          )}
          ;
        </div>
      </div>
    </div>
  );
}
