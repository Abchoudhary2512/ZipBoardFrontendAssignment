import { useEffect, useState } from "react";
import { Moon, Sun, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import faqs from "@/data/faqsdata";

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

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
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-black text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } min-h-screen transition-all duration-500`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-white" : "bg-black"}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="icon"
              className={`h-12 w-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "border-gray-700 bg-gray-800/50 hover:bg-gray-700 backdrop-blur-sm shadow-lg shadow-gray-900/20"
                  : "border-gray-300 bg-white/80 hover:bg-gray-50 backdrop-blur-sm shadow-lg shadow-gray-900/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </Button>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 ${
              darkMode
                ? "bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            Frequently Asked Questions
          </h1>

          <p
            className={`text-base sm:text-lg max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl">
          <div
            className={`rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md border shadow-xl ${
              darkMode
                ? "bg-gray-800/40 border-gray-700/60 shadow-black/20"
                : "bg-white/70 border-gray-200/50 shadow-gray-900/10"
            }`}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group rounded-xl transition-all duration-300 ${
                    expandedIndex === index
                      ? darkMode
                        ? "bg-gray-700/40 shadow-lg shadow-gray-900/20"
                        : "bg-gray-50/90 shadow-lg shadow-gray-900/10"
                      : "hover:bg-gray-500/5"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={expandedIndex === index}
                    className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-xl focus:outline-none transition-all"
                  >
                    <div className="flex items-start gap-4 w-full">
                      <span
                        className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold shrink-0 ${
                          expandedIndex === index
                            ? darkMode
                              ? "bg-white text-gray-900"
                              : "bg-gray-900 text-white"
                            : darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-semibold leading-snug flex-1 ${
                          expandedIndex === index
                            ? darkMode
                              ? "text-white"
                              : "text-gray-900"
                            : darkMode
                            ? "text-gray-200 group-hover:text-white"
                            : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                        expandedIndex === index
                          ? darkMode
                            ? "bg-white text-gray-900 rotate-180 scale-105"
                            : "bg-gray-900 text-white rotate-180 scale-105"
                          : darkMode
                          ? "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-200"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700"
                      }`}
                    >
                      {expandedIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
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
                    <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                      <div
                        className={`border-l-2 pl-5 sm:pl-8 ${
                          darkMode ? "border-gray-600" : "border-gray-300"
                        }`}
                      >
                        <p
                          className={`text-sm sm:text-base leading-relaxed ${
                            darkMode ? "text-gray-300" : "text-gray-600"
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
