
import findSystemData from "../data/findSystemdata";

export default function FindRightSystem() {
  return (
    <section className=" bg-linear-to-br
  from-green-50
  via-green-100
  to-amber-50
  py-16 px-4 sm:px-6 lg:px-12">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-700">
          Find the Right Solar System
        </h2>

        <p className="text-gray-600 mt-3">
          Choose the Perfect Solar Solution Based on Your Energy Needs and Lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {findSystemData.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id}
              className="bg-gray-50 p-7 rounded-xl border border-gray-200
              hover:shadow-lg hover:border-green-600
              transition-all duration-300">
             
             {/* System type image */}
<div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-green-50 flex items-center justify-center">
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-auto object-contain  "
  />
</div>


              <div className="w-14 h-14 bg-green-100 text-green-700
                rounded-xl flex items-center justify-center mb-5">
                <Icon size={30} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-bold text-green-700 mb-2">
                {item.title}
              </h3>

              <h4 className="font-semibold text-gray-800 mb-3">
                {item.subtitle}
              </h4>

              <p className="text-gray-600 leading-7 mb-5">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 text-gray-700 text-sm">
                    <span className="text-green-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          );
        })}

      </div>
    </section>
  );
}
