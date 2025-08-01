import { useEffect, useState } from "react";
import { Moon, Sun, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import faqs from "@/data/faqsdata";

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(null); // Start as null to detect preference

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false); // default to light
    }
  }, []);

  // Save user preference to localStorage
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode === true
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-black text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } min-h-screen transition-all duration-500`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute inset-0 ${
            darkMode === true ? "bg-white" : "bg-black"
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex justify-center mb-8">
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="icon"
              className={`h-14 w-14 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                darkMode === true
                  ? "border-gray-700 bg-gray-800/50 hover:bg-gray-700 backdrop-blur-sm shadow-lg shadow-gray-900/20"
                  : "border-gray-300 bg-white/80 hover:bg-gray-50 backdrop-blur-sm shadow-lg shadow-gray-900/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode === true ? (
                <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600 transition-transform duration-300" />
              )}
            </Button>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
              darkMode === true
                ? "bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            Frequently Asked Questions
          </h1>

          <p
            className={`text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed ${
              darkMode === true ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border ${
              darkMode === true
                ? "bg-gray-800/30 border-gray-700/50 shadow-black/20"
                : "bg-white/60 border-gray-200/50 shadow-gray-900/10"
            }`}
          >
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl transition-all duration-300 ${
                    expandedIndex === index
                      ? darkMode === true
                        ? "bg-gray-700/40 shadow-lg shadow-gray-900/20"
                        : "bg-gray-50/80 shadow-lg shadow-gray-900/5"
                      : "hover:bg-gray-500/5"
                  }`}
                >
                  <button
                    className="w-full p-6 sm:p-8 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded-2xl transition-all duration-300"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={expandedIndex === index}
                  >
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-3">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 ${
                              expandedIndex === index
                                ? darkMode === true
                                  ? "bg-white text-gray-900"
                                  : "bg-gray-900 text-white"
                                : darkMode === true
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <div
                            className={`h-px flex-1 transition-colors duration-300 ${
                              expandedIndex === index
                                ? darkMode === true
                                  ? "bg-gray-600"
                                  : "bg-gray-300"
                                : darkMode === true
                                ? "bg-gray-800"
                                : "bg-gray-200"
                            }`}
                          />
                        </div>

                        <h3
                          className={`text-lg sm:text-xl lg:text-2xl font-semibold leading-tight transition-colors duration-300 ${
                            expandedIndex === index
                              ? darkMode === true
                                ? "text-white"
                                : "text-gray-900"
                              : darkMode === true
                              ? "text-gray-200 group-hover:text-white"
                              : "text-gray-700 group-hover:text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          expandedIndex === index
                            ? darkMode === true
                              ? "bg-white text-gray-900 rotate-180 scale-110"
                              : "bg-gray-900 text-white rotate-180 scale-110"
                            : darkMode === true
                            ? "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-200 group-hover:scale-105"
                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700 group-hover:scale-105"
                        }`}
                      >
                        {expandedIndex === index ? (
                          <Minus className="h-5 w-5 transition-transform duration-300" />
                        ) : (
                          <Plus className="h-5 w-5 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div
                        className={`pl-12 border-l-2 transition-colors duration-300 ${
                          darkMode === true ? "border-gray-600" : "border-gray-300"
                        }`}
                      >
                        <p
                          className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                            darkMode === true ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
