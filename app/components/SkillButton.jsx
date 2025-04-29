import React from 'react';

// SkillButton component for button under landing section
const SkillButton = ({ name }) => {
  return (
    <button className="bg-gray-200 text-black shadow-lg shadow-gray-500/10 w-auto rounded-sm p-2 px-2">
      {name}
    </button>
  );
};

export default SkillButton;
