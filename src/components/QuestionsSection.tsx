import React from 'react';
import question1Img from '../asset/Question1.png';
import question2Img from '../asset/Question2.png';

export const QuestionsSection: React.FC = () => {
  return (
    <section id="questions-section" className="w-full">
      {/* Question 1 — screen-height constrained, no zoom */}
      <div className="w-full flex justify-center items-center overflow-hidden" style={{ maxHeight: '100vh' }}>
        <img
          src={question1Img}
          alt="Question 1 - ERX Framework & Analysis"
          className="max-w-full max-h-screen w-auto h-auto block select-none object-contain"
          loading="eager"
        />
      </div>

      {/* Question 2 — screen-height constrained, no zoom */}
      <div className="w-full flex justify-center items-center overflow-hidden" style={{ maxHeight: '100vh' }}>
        <img
          src={question2Img}
          alt="Question 2 - ERX Operational Overview"
          className="max-w-full max-h-screen w-auto h-auto block select-none object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
};
