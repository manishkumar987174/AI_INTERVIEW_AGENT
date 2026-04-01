import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import AuthModel from "../components/AuthModel";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import evalImg from "../assets/ai-ans.png";
import creditImg from "../assets/credit.png";
import Footer from "../components/Footer";
const Home = () => {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="  min-h-screen bg-[#f3f3f3] flex flex-col ">
      <Navbar />
      <div className="px-22 flex-1  py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <HiSparkles size={16} className="bg-greeen-50 text-green-600" />
              AI Powered Smart Interview Platform
            </div>
          </div>
          <div className="text-center mb-28">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
            >
              Practice Interview With
              <span className="relative inline-block">
                <span className="bg-green-100 text-green-600 px-5 py-1 rounded-full">
                  AI Intelligence
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
            >
              Role-based mock interview with smart follows-ups, adaptive
              difficulty and real-time perforamnce evaluation.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4 mt-10 ">
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/interview");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="cursor-pointer bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md"
              >
                Start Interview
              </motion.button>
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/history");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className=" cursor-pointer border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition"
              >
                View History
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-28">
            {[
              {
                icon: <BsRobot size={24} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts difficulty based on selected job role.",
              },
              {
                icon: <BsMic size={24} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Dynamic follow-up questions based on your answers.",
              },
              {
                icon: <BsClock size={24} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Real interview pressure with time tracking.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                whileHover={{ y:-6}}
                className={`relative bg-white rounded-3xl border-2 border-green-100 hover:border-gray-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl
              transition-all duration-300
              ${index === 0 ? "rotate-[-4deg]" : ""}
                ${index === 1 ? "rotate-[-3deg] md:-mt-6 shadow-xl" : ""}
                ${index === 2 ? "rotate-[-3deg]" : ""}
              `}
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex
               items-center justify-center shadow-lg "
                >
                  {item.icon}
                </div>
                <div className=" pt-10 text-center">
                  <div className="text-sm text-gray-600 font-semibold mb-2 tracking-wide">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-3 text-lg ">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16"
            >
              AdvanceAI <span className="text-green-600">Capabilities</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  image: evalImg,
                  icon: <BsBarChart size={20} />,
                  title: "AI Answer Evaluation",
                  desc: "Scores communication, technical accuracy and confidence.",
                },
                {
                  image: resumeImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Resume Based Interview",
                  desc: "Project-specific questions based on uploaded resume.",
                },
                {
                  image: pdfImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Downloadable PDF Report",
                  desc: "Detailed strengths, weaknesses and improvement insights.",
                },
                {
                  image: analyticsImg,
                  icon: <BsBarChart size={20} />,
                  title: "History & Analytics",
                  desc: "Track progress with performance graphs and analysis.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className=" bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-6">
                    {/* Image LEFT */}
                    <div className="w-40 h-28 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content RIGHT */}
                    <div>
                      <div className="bg-green-50 text-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                        {item.icon}
                      </div>

                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16"
            >
              Multiple Intervies <span className="text-green-600">Modes</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  img: hrImg,
                  title: "HR Interview Mode",
                  desc: "Behavioral and communication based evaluation.",
                },
                {
                  img: techImg,
                  title: "Technical Mode",
                  desc: "Deep technical questioning based on selected role.",
                },
                {
                  img: confidenceImg,
                  title: "Confidence Detection",
                  desc: "Basic tone and voice analysis insights.",
                },
                {
                  img: creditImg,
                  title: "Credits System",
                  desc: "Unlock premium interview sessions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className=" bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-6">
                    {/* Image LEFT */}
                    <div className="w-40 h-28 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content RIGHT */}
                    <div>

                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Home;
