import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-10">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Strategy.</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Analytics and Research</li>
              <li>Interactive Workshops</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>Digital Strategy</li>
              <li>
                <a href="#" className="underline">
                  Conversion Rate Optimization
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Design.</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Creative Direction</li>
              <li>Brand Guides</li>
              <li>Prototypes</li>
              <li>
                <a href="#" className="underline font-medium">
                  UI/UX & Web Design
                </a>
              </li>
              <li>Visual Asset Creation</li>
              <li>Motion Design</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Development.</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>System Architecture Design</li>
              <li>Full-Stack Development</li>
              <li>
                <a href="#" className="underline">
                  3rd Party Integrations
                </a>
              </li>
              <li>
                <a href="#" className="underline font-medium">
                  Performance Optimization
                </a>
              </li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
