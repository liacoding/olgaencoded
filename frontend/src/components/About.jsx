import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  const qaList = [
    {
      question: "Who am I?",
      answer: "My name is Olga Nazarova. I'm a Full Stack Software Developer with a passion for delivering high-quality products.",
    },
    {
      question: "Tech stack?",
      answer: "I have experience working with both MERN (MongoDB, Express, React, Node.js) and PERN (PostgreSQL, Express, React, Node.js) stacks. I also work with AWS services such as EC2 and S3.",
    },
    {
      question: "Skills?",
      answer: "Domain-driven design, REST APIs, Design Patterns, Version Control (Git), AWS services, Documentation (Confluence), Unit Testing (Jest).",
    },
    {
      question: "How did I become a developer?",
      answer: "I started my journey as a QA Engineer and fell in love with technology. Over time, I expanded my skills and transitioned into full-stack development.",
    },
    {
      question: "Values and motivation?",
      answer: "I'm driven by a desire to bring real value to the world through technology. I believe in the power of collaboration, continuous learning, and integrity.",
    },
    {
      question: "Hobbies and interests?",
      answer: "In my free time, I enjoy exploring new tech trends, creating art, playing tennis and spending time with family & friends.",
    },
  ];

  return (
    <div id="about" className="my-3 lg:my-2 relative px-4">
       {/* Header for About Section */}
       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-400 text-center mb-20">
        About Me
      </h2>
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
  
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
        {qaList.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#0d1224] rounded-lg border border-[#1b2c68a0] shadow-lg"
          >
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {item.question}
            </h3>
            <p className="mt-2 text-gray-200">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default AboutSection;
