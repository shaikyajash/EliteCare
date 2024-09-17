import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";

// UserTestimonial Component
const UserTestimonial = ({ name, title, imageUrl, testimonial }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <p className="text-gray-600 mb-4 text-sm">{testimonial}</p>
    <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full mb-2" />
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
);

// UserTestimonials Component
export const UserTestimonials = () => {
  const users = [
    {
      name: 'Nat Reynolds',
      title: 'Chief Accountant',
      imageUrl: '/images/pic1.jpg',
      testimonial: "The chatbot answered all my questions with ease, and the personalized recommendations based on my health data are super helpful. It’s like having a personal health assistant at my fingertips"
    },
    {
      name: 'Celia Almeda',
      title: 'Secretary',
      imageUrl: '/images/pic2.jpg',
      testimonial: "The analytics provided are invaluable for our community outreach efforts. We’ve seen significant growth since we started using this service."
    },
    {
      name: 'Bob Roberts',
      title: 'Sales Manager',
      imageUrl: '/images/pic3.jpg',
      testimonial: "I appreciate the personalized support and the impact stories. They offer real insights and inspiration for improving our engagement strategies."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-100 to-blue-100 p-8">
      <h2 className="text-3xl font-bold text-pink-500 mb-8 text-center">What do our users say?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <UserTestimonial key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default function HomePage() {
  useEffect(() => {
    // Ensure Vimeo API script is loaded
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.onload = () => {
      // Vimeo Player initialization
      const iframe = document.querySelector('iframe');
      if (iframe) {
        const player = new window.Vimeo.Player(iframe);

        player.setCurrentTime(0).catch(error => {
          console.log('Error setting start time:', error);
        });

        player.on('play', () => {
          setTimeout(() => {
            player.pause().then(() => {
              player.setCurrentTime(0).then(() => {
                player.play().catch(error => {
                  console.log('Error during playback:', error);
                });
              }).catch(error => {
                console.log('Error setting time:', error);
              });
            }).catch(error => {
              console.log('Error pausing video:', error);
            });
          }, 38000); // 38 seconds
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script
      const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="relative flex flex-col items-center">
        {/* Video Section */}
        <div className="w-full min-h-screen flex flex-col justify-center items-center relative">
          <div 
            style={{ 
              paddingBottom: "56.25%", 
              position: "relative", 
              width: "100%", 
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              opacity: "0.9"
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/291508362?loop=1&autoplay=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%" 
              }}
              title="INTEL AI | Healthcare"
            ></iframe>
          </div>
          <div className="absolute top-40 transform -translate-y-1 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Empowering Communities & NGOs</h1>
            <h3 className="text-xl">Get insights, grow your community, and make an impact</h3>
          </div>
          <div className="flex gap-4 h-0">
          <div style={{ fontFamily: 'Anton', transform: 'translateY(-100px)', color: "white", fontSize: "40px", letterSpacing: "2px" }}>PRESENTING</div>
        
          <div style={{ fontFamily: 'Anton', transform: 'translateY(-100px)', color: "white", fontSize: "40px", letterSpacing: "2px" }}>ELITECARE</div>
        </div>
        <p></p>

        </div>

        {/* Features Section */}
        <div className="w-full py-10 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
          <div className="flex flex-col md:flex-row justify-around mt-8">
            <div className="md:w-1/3 p-4">
              <img src={"/images/image1.png"} alt="NGO Listings" className="w-full h-40 object-cover mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-bold">NGO Listings</h3>
              <p className="mt-2">Explore and connect with a wide range of NGOs.</p>
            </div>
            <div className="md:w-1/3 p-4">
              <img src={"/images/image2.png"} alt="Community Analytics" className="w-full h-40 object-cover mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-bold">Community Analytics</h3>
              <p className="mt-2">Get detailed reports on community engagement and growth.</p>
            </div>
            <div className="md:w-1/3 p-4">
              <img src={"/images/image3.png"} alt="Impact Stories" className="w-full h-40 object-cover mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-bold">Impact Stories</h3>
              <p className="mt-2">Learn from the success stories of others making a difference.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <UserTestimonials />
            
        {/* Footer Section */}
        <footer className="w-full py-8 bg-[rgba(ffffff, 0.8)] text-black text-bold text-center">
          <div className="container mx-auto px-4">
            
            <p>&copy; {new Date().getFullYear()} EliteCare, All rights reserved.</p>
            <p>Lovely Professional University, Jalandhar, India</p>
            <p>Email: EliteCare@email.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
