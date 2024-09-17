import React, { useEffect, useState} from'react';
import Navbar from '../navbar/navbar';
import Loading from '../loading/loading';
import { axiosInstance, endPoints } from '../../services/api';
import { useParams, useNavigate } from "react-router-dom";


export default function CommunityChat() {

    const {params} = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

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

    useEffect(()=>{
        function handleLoadChats(){
            setTimeout(()=>{
                setIsLoading(false);
            }, 1000);
            setPosts(fakePosts);
        }
        handleLoadChats();
    },[params]);

    const handleOpenPost = (post) => {
        navigate(`/community/:${params}/post/${post.topic}`,{state: {post}});
      };

    // useEffect(()=>{
    //     function handleLoadChats(){
    //         setTimeout(()=>{
    //             setIsLoading(!isLoading);
    //         }, 3000);
    //         const respone  = axiosInstance.get(`${endPoints.BLOGS}/${params}`);
    //         setChats(respone.data);
    //     }
    //     handleLoadChats();
    // }, [params]);

    return(
        <div className='bg-gray-100 min-h-screen w-full'>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
                <div className='bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-col items-start'>
                    <div className='flex flex-col items-center w-full '>
                        <h1 className="text-4xl font-semibold mb-4">Community Posts</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full pt-4'>
                    {isLoading ? <Loading /> : 
                        <div className='flex flex-col items-center justify-center w-full border-t-2 border-gray-200'>
                            {posts.map((post, index)=>{
                                return(
                                    <div key={index}  className='flex flex-row items-start justify-between w-full p-4 border-t-2 border-gray-200 cursor-pointer' onClick={()=>{handleOpenPost(post)}}>
                                        <h1 className='font-bold text-2xl'>{post.topic}</h1>
                                        <p className='font-normal text-sm text-green-500'>By {post.author}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}