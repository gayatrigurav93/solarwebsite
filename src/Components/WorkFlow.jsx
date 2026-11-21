
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import workflowData from "../data/workflowData";

export default function Workflow() {
  const navigate = useNavigate();

  return (
    <section className="px-5 sm:px-8 md:px-10 py-16 md:py-24 bg-white">

      {/* Section heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <span className="inline-block text-green-700 bg-green-50 border border-green-200 px-6 py-2 rounded-full text-sm font-semibold tracking-widest">
          OUR PROCESS
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-6">
          How We Make{" "}
          <span className="text-green-600">Solar</span> Simple
        </h2>

        <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
          From consultation to clean energy — we handle
          everything, step by step.
        </p>

      </div>

      {/* Workflow steps */}
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-2">

          {workflowData.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row items-center flex-1 w-full gap-5 lg:gap-2"
              >

                {/* Process step */}
                <div className="flex flex-col items-center text-center flex-1 w-full">

                  {/* Icon circle */}
                  <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-green-50 group hover:bg-green-100 transition duration-300">

                    <Icon
                      size={55}
                      strokeWidth={1.6}
                      className="text-green-800"
                    />

                  </div>

                  {/* Step number */}
                  <span className="flex items-center justify-center mt-4 w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold">
                    {String(step.id).padStart(2, "0")}
                  </span>

                  {/* Heading */}
                  <h3 className="font-bold text-gray-900 text-lg mt-3">
                    {step.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 max-w-48">
                    {step.tagline}
                  </p>

                </div>

                {/* Forward arrow */}
                {index !== workflowData.length - 1 && (
                  <ArrowRight
                    size={34}
                    strokeWidth={1.5}
                    className="text-gray-400 shrink-0 rotate-90 lg:rotate-0"
                  />
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-14">

        <button
          onClick={() => navigate("/Contact")}
          className="bg-green-800 hover:bg-green-900 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow-md"
        >
          Start Your Solar Journey
          <span className="ml-2">→</span>
        </button>

      </div>

    </section>
  );
}
