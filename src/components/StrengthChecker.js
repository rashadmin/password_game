import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
  const testedResult = zxcvbn(password);
  const strength = testedResult.score * 25;

  return (
    <div>
      <progress value={strength} max="100"></progress>
    </div>
  );
};

export default PasswordStrengthMeter;