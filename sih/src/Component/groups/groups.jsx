import React, { useEffect, useState } from "react";
// import { endPoints, axiosInstance} from "../../services/api";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/loading";

export default function Groups({ letter }) {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   function handleLoadGroups(letter){
  //     try{
  //         const response = axiosInstance.get(`${endPoints.GETGROUPS}${letter}`);
  //         setGroups(response.data);
  //     }catch(error){
  //         console.log(error);
  //     }
  //   } 
  //   handleLoadGroups(letter);
  // }, [letter]);

  const fakeGroups = 

  [
    {"name": "Arthritis Support Circle", "description": "Group for managing arthritis pain and mobility."},
    {"name": "Better Breathing Club", "description": "Supports individuals with chronic lung conditions."},
    {"name": "Cancer Warriors", "description": "Fights against cancer through support and awareness."},
    {"name": "Diabetes Care Group", "description": "Supports managing diabetes through lifestyle changes."},
    {"name": "Epilepsy Action Network", "description": "Raises awareness and support for epilepsy patients."},
    {"name": "Fibromyalgia Friends", "description": "Community for fibromyalgia pain management and support."},
    {"name": "Glaucoma Awareness Group", "description": "Supports those with glaucoma to preserve vision."},
    {"name": "Hearing Loss Heroes", "description": "Empowers those with hearing impairment challenges."},
    {"name": "IBS Support Network", "description": "Offers support for irritable bowel syndrome patients."},
    {"name": "Joint Pain Advocates", "description": "Addresses chronic joint pain and its management."},
    {"name": "Kidney Care Companions", "description": "Supports people managing chronic kidney disease."},
    {"name": "Lupus Life Network", "description": "Community for lupus patients to share experiences."},
    {"name": "Migraine Relief Society", "description": "Provides migraine management tips and support."},
    {"name": "Neuropathy Support Group", "description": "Assists those with nerve damage and pain."},
    {"name": "Osteoporosis Prevention Alliance", "description": "Raises awareness on bone health and osteoporosis."},
    {"name": "Parkinson’s Partners", "description": "Offers help for those affected by Parkinson’s disease."},
    {"name": "Quiet Minds Anxiety Group", "description": "Supports managing anxiety and mental wellness."},
    {"name": "Rheumatoid Resilience Group", "description": "Focuses on battling rheumatoid arthritis together."},
    {"name": "Sleep Apnea Awareness", "description": "Support for those suffering from sleep apnea."},
    {"name": "Thyroid Health Team", "description": "Promotes thyroid health awareness and management."},
    {"name": "Understanding Autism Circle", "description": "Support and awareness for autism spectrum disorders."},
    {"name": "Vision Loss Champions", "description": "Empowering individuals with visual impairments."},
    {"name": "Wheelchair Warriors", "description": "Support group for wheelchair users and caregivers."},
    {"name": "Xtreme Chronic Pain Fighters", "description": "Fights against chronic pain with shared experiences."},
    {"name": "Young Stroke Survivors", "description": "Community of support for young stroke patients."},
    {"name": "Zero Mobility Alliance", "description": "Supports individuals with paralysis and mobility challenges."},
    {"name": "Allergy Assistance Group", "description": "Helps people manage severe allergies safely."},
    {"name": "Brain Injury Support Circle", "description": "Rehabilitation and support for brain injury survivors."},
    {"name": "Chronic Fatigue Alliance", "description": "Raises awareness for chronic fatigue syndrome."},
    {"name": "Dyslexia Learners Network", "description": "Support for individuals with dyslexia in learning."},
    {"name": "Eczema Care Club", "description": "Provides support for people with chronic eczema."},
    {"name": "Fibrosis Fighters", "description": "Offers resources for cystic fibrosis management."},
    {"name": "Grief and Loss Support", "description": "Supports those coping with grief and loss."},
    {"name": "Heart Health Heroes", "description": "Focuses on managing cardiovascular conditions."},
    {"name": "Insulin Warriors", "description": "Support for managing insulin-dependent diabetes."},
    {"name": "Juvenile Arthritis Support", "description": "Support for kids with juvenile arthritis."},
    {"name": "Kidney Transplant Survivors", "description": "Group for kidney transplant patients and caregivers."},
    {"name": "Liver Disease Advocates", "description": "Support for those battling liver diseases."},
    {"name": "Multiple Sclerosis Network", "description": "Provides support for multiple sclerosis patients."},
    {"name": "Narcolepsy Awareness Group", "description": "Raises awareness for narcolepsy and sleep disorders."},
    {"name": "Obesity Health Support", "description": "Supports individuals managing obesity and weight issues."},
    {"name": "Psoriasis Patient Network", "description": "Support for individuals dealing with psoriasis."},
    {"name": "Quitting Smoking Support", "description": "Helps people quit smoking and stay tobacco-free."},
    {"name": "Restless Legs Group", "description": "Focuses on managing restless leg syndrome."},
    {"name": "Scoliosis Support Alliance", "description": "Supports individuals with scoliosis and spinal issues."},
    {"name": "Tourette Syndrome Awareness", "description": "Raising awareness for Tourette syndrome."},
    {"name": "Urinary Incontinence Support", "description": "Addresses incontinence management and resources."},
    {"name": "Vascular Health Team", "description": "Focuses on vascular disease awareness and support."},
    {"name": "Wound Care Warriors", "description": "Helps individuals manage chronic wounds."},
    {"name": "X-ray Wellness Group", "description": "Offers guidance on radiation therapy and safety."},
    {"name": "Youth Mental Health Advocates", "description": "Promotes youth mental health awareness."},
    {"name": "Zonal Disability Network", "description": "Supports individuals with various disabilities."},
    {"name": "Alzheimer’s Awareness Network", "description": "Provides support for Alzheimer’s patients and caregivers."},
    {"name": "Bipolar Support Circle", "description": "Assists people managing bipolar disorder."},
    {"name": "Chronic Pain Relief Club", "description": "Helps chronic pain sufferers find relief."},
    {"name": "Depression Recovery Network", "description": "Supports individuals recovering from depression."},
    {"name": "Endometriosis Empowerment", "description": "Empowers women with endometriosis."},
    {"name": "Foot Health Forum", "description": "Provides foot care advice for foot-related health issues."},
    {"name": "Gluten-Free Life", "description": "Support for managing celiac disease and gluten intolerance."},
    {"name": "Hypertension Health Group", "description": "Focuses on managing high blood pressure."},
    {"name": "Irritable Bowel Care", "description": "Helps individuals manage irritable bowel syndrome."},
    {"name": "Joint Health Network", "description": "Focuses on joint health and mobility."},
    {"name": "Kidney Stones Support", "description": "Offers support for kidney stone patients."},
    {"name": "Lyme Disease Advocates", "description": "Supports individuals battling Lyme disease."},
    {"name": "Mental Health Matters", "description": "Focuses on general mental health support."},
    {"name": "Neurological Disorders Network", "description": "Supports individuals with neurological conditions."},
    {"name": "Obstructive Sleep Apnea Group", "description": "Focuses on obstructive sleep apnea management."},
    {"name": "Pulmonary Health Alliance", "description": "Focuses on respiratory health and lung conditions."},
    {"name": "Quadriplegic Support Group", "description": "Supports individuals with quadriplegia and caregivers."},
    {"name": "Rheumatic Disease Circle", "description": "Raises awareness for rheumatic diseases."},
    {"name": "Stroke Recovery Group", "description": "Supports stroke survivors and recovery processes."},
    {"name": "Tinnitus Awareness Team", "description": "Support for individuals suffering from tinnitus."},
    {"name": "Ulcerative Colitis Network", "description": "Focuses on managing ulcerative colitis."},
    {"name": "Vertigo Support Circle", "description": "Helps individuals manage vertigo and dizziness."},
    {"name": "Weight Management Group", "description": "Focuses on healthy weight management strategies."},
    {"name": "Xerostomia Relief Network", "description": "Offers support for individuals with dry mouth."},
    {"name": "Youth Disability Advocates", "description": "Empowers youth with disabilities and promotes inclusion."},
    {"name": "Zoster Virus Survivors", "description": "Support for shingles and postherpetic neuralgia patients."}
  ]
  
  useEffect(() => {
    function handleLoadGroups(letter) {
      setTimeout(() => {
        setIsLoading(!isLoading);
      }, 3000);
      const groupWithLetter = fakeGroups.filter((group) => {
        return group.name.charAt(0).toUpperCase() === letter.toUpperCase();
      });
      setGroups(groupWithLetter);
    }
    handleLoadGroups(letter);
  }, [letter]);

  const navigate = useNavigate();

  function handleGoToGroup(group) {
    const trimedText = group.replace(/\s+/g, "");
    navigate(`/community/${trimedText}`);
  }

  return (
    <div className="bg-white mt-6 p-4 rounded-lg shadow-green-500 shadow flex items-start h-max">
      <div className="flex flex-col items-center w-full h-max">
        {isLoading ? (
          <Loading />
        ) : groups ? (
          groups.map((group, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-left w-full cursor-pointer border-b-2 border-gray-200 py-4"
                onClick={() => {
                  handleGoToGroup(group.name);
                }}
              >
                <h2 className="text-xl font-bold">{group.name}</h2>
                <p className="text-gray-500">{group.description}</p>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
