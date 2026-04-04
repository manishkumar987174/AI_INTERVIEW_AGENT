import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaUserTie,
  FaMicrophone,
  FaChartLine,
  FaBriefcase,
  FaUpload,
} from "react-icons/fa";

const Step1Setup = ({ onStart }) => {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("Technical");

  const [resumeFile, setResumeFile] = useState(null);
  const [analysisDone, setAnalysisDone] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden"
      >
        {/* LEFT */}
        <div className="bg-green-50 p-6 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Start Your AI Interview
          </h2>

          <p className="text-gray-600 mb-6 text-sm">
            Practice real interview scenarios powered by AI. Improve
            communication, technical skills, and confidence.
          </p>

          <div className="space-y-3">
            {[
              {
                icon: <FaUserTie className="text-green-600" />,
                text: "Choose Role & Experience",
              },
              {
                icon: <FaMicrophone className="text-green-600" />,
                text: "Smart Voice Interview",
              },
              {
                icon: <FaChartLine className="text-green-600" />,
                text: "Performance Analytics",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
              >
                {item.icon}
                <span className="text-gray-700 text-sm font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Interview Setup
          </h2>

          <div className="space-y-4">
            {/* Role */}
            <div className="relative">
              <FaUserTie className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600" />
              <input
                type="text"
                placeholder="Enter Role"
                className="w-full pl-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 outline-none transition"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
            </div>

            {/* Experience */}
            <div className="relative">
              <FaBriefcase className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600" />
              <input
                type="text"
                placeholder="Experience (e.g. 2 years)"
                className="w-full pl-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 outline-none transition"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
              />
            </div>

            {/* Mode */}
            <select
              onChange={(e) => setMode(e.target.value)}
              value={mode}
              className="w-full py-2.5 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
            >
              <option value="Technical">Technical Interview</option>
              <option value="HR">HR Interview</option>
            </select>

            {/* Resume Upload */}
            {!analysisDone && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  document.getElementById("resumeUpload").click()
                }
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-green-500 transition cursor-pointer"
              >
                <FaUpload className="text-3xl mx-auto text-gray-600 mb-2" />

                <input
                  type="file"
                  id="resumeUpload"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />

                <p className="text-gray-600 text-sm font-medium">
                  {resumeFile
                    ? resumeFile.name
                    : "Click to upload resume (Optional)"}
                </p>
              </motion.div>
            )}
          </div>

          {/* Button */}
          {resumeFile && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer w-full mt-4 bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
            >
              {analyzing ? "Analyzing..." : "Analyze Resume"}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step1Setup;