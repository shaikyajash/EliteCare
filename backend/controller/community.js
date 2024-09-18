const Community = require("../models/community");
const handlePost = async (req, res, next) => {
  try {
    const { content, title, community, author } = req.body;
    const post = new Community({
      content,
      title,
      community,
      author,
    });
    await post.save();
    res.status(201).json(post);
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
};

const handleGetGroups = async (req, res, next) => {
  const fakeGroups = [
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

  return res.json(fakeGroups);
}

const handleGetPost = async (req, res, next) => {
  const fakePosts = 
    [
      {
        "author": "Alice Johnson",
        "topic": "Living with Type 1 Diabetes",
        "blog": "Managing Type 1 Diabetes has been a daily challenge for me. In this blog, I share how I’ve adjusted my diet, lifestyle, and mindset to cope with the disease. From insulin management to regular exercise, I discuss the strategies that have helped me control my blood sugar levels. One of the hardest parts is maintaining balance, especially during stressful times. I also talk about the importance of mental health support for diabetics, which is often overlooked. Living with diabetes is tough, but with the right tools, it's manageable."
      },
      {
        "author": "Michael Lee",
        "topic": "Overcoming Obesity",
        "blog": "Obesity has impacted my life in many ways, from self-esteem issues to health complications like hypertension. This blog is my story of how I began my weight-loss journey through small, consistent changes in my diet and exercise routine. I discuss the importance of avoiding fad diets and focusing on long-term, sustainable habits. Support from my family and healthcare provider has been crucial in helping me stay motivated. Losing weight isn’t just about looking good; it’s about feeling healthy and living a longer, better life. I hope to inspire others facing the same struggles."
      },
      {
        "author": "Emma Davis",
        "topic": "Living with Multiple Sclerosis",
        "blog": "Being diagnosed with Multiple Sclerosis (MS) was a life-changing moment for me. In this blog, I share my journey of adapting to the symptoms of MS, including fatigue, mobility issues, and vision problems. I talk about the treatments I’ve tried and the lifestyle changes I’ve made to help manage my condition, such as staying active, managing stress, and sticking to a healthy diet. It’s not easy, but building a support network has been crucial for my mental and physical well-being. MS has its ups and downs, but I’m learning how to live my life despite the challenges."
      },
      {
        "author": "James Carter",
        "topic": "Coping with Chronic Back Pain",
        "blog": "For years, chronic back pain has affected every aspect of my life. In this blog, I discuss the physical and emotional toll it has taken on me and how I’ve found relief through a combination of physical therapy, exercise, and mindfulness practices. Pain management is complex, and it’s about finding what works for you. I’ve also explored alternative therapies, such as acupuncture and chiropractic care, which have helped reduce my pain levels. Chronic pain can feel overwhelming, but with the right approach, it’s possible to regain control over your life."
      },
      {
        "author": "Sophia Martinez",
        "topic": "Healthy Lifestyle After Heart Surgery",
        "blog": "After undergoing heart surgery, I had to make significant changes to my lifestyle. This blog is about how I adopted a heart-healthy diet, incorporated daily exercise, and learned to manage stress better. I share my journey of recovery, the challenges I faced, and how I found a new balance in my life. Eating whole foods, limiting salt and sugar, and staying active have all played a role in improving my health. I also talk about the importance of regular medical checkups and staying positive throughout the recovery process. A healthy lifestyle is key to heart health."
      },
      {
        "author": "Liam Roberts",
        "topic": "Living with Asthma",
        "blog": "Asthma has been a constant presence in my life, affecting everything from sports to daily activities. In this blog, I share how I’ve learned to manage my asthma symptoms through medication, avoiding triggers, and staying physically active within my limits. I also discuss the role that air quality plays in asthma control and how I’ve adjusted my environment to reduce exposure to allergens. Education and awareness are critical for living with asthma, and with proper management, I’ve been able to live an active and fulfilling life despite the condition."
      },
      {
        "author": "Olivia Green",
        "topic": "Living with Celiac Disease",
        "blog": "Celiac disease has completely changed the way I approach food. In this blog, I talk about the challenges of maintaining a gluten-free diet, especially when dining out or traveling. I share tips on how to avoid cross-contamination and how to read food labels effectively. While it’s been difficult, I’ve found support in online communities and through trial and error in my kitchen. This blog also discusses the importance of regular health checkups to monitor nutrient absorption and overall health. Celiac disease can feel restrictive, but it’s possible to lead a full and healthy life with careful management."
      },
      {
        "author": "Ethan Wright",
        "topic": "Managing ADHD as an Adult",
        "blog": "Being diagnosed with ADHD as an adult explained so many of the struggles I’ve had with focus and time management throughout my life. In this blog, I discuss how I’ve adapted to living with ADHD through a combination of medication, therapy, and organizational tools. I share tips on how to stay productive, manage impulsive behavior, and maintain mental clarity. ADHD can be challenging, but understanding the condition and developing coping strategies has made a huge difference in my life. I hope to help others who may be facing the same difficulties."
      },
      {
        "author": "Grace Taylor",
        "topic": "Recovering from a Stroke",
        "blog": "Recovering from a stroke has been a long and difficult journey, both physically and emotionally. In this blog, I share my experience with rehabilitation, including physical therapy, speech therapy, and cognitive exercises. It’s been a slow process, but with determination and support from loved ones, I’ve made significant progress. I also talk about the lifestyle changes I’ve made to prevent another stroke, such as improving my diet, staying active, and managing my blood pressure. Recovery is possible, but it takes time, patience, and a strong support system. I hope my story inspires others facing similar challenges."
      },
      {
        "author": "Jack Wilson",
        "topic": "Living with Arthritis",
        "blog": "Arthritis has affected my mobility and quality of life, but I’ve learned ways to manage the pain and stay active. In this blog, I share how physical therapy, low-impact exercises, and anti-inflammatory diets have helped me reduce joint pain. I also discuss the emotional toll of living with a chronic condition and how I’ve found strength in support groups and counseling. Arthritis doesn’t have to define your life; with the right approach, it’s possible to maintain a good quality of life. I hope my experience can help others who are also living with arthritis."
      }
    ];

    return res.json(fakePosts);
}

module.exports = {
  handlePost,
  handleGetGroups,
  handleGetPost
};
