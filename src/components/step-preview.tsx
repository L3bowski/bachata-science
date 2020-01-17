import React from 'react';
import { Link } from 'react-router-dom';
import { testIds } from '../__step-definitions__/test-ids';
import { getStep } from '../data/steps';
import { StepProps } from '../types/steps';

// tslint:disable-next-line:variable-name
export const StepPreview: React.FC<StepProps> = props => {
    const step = getStep(props.stepId);
    return (
        <Link
            className="step-preview"
            to={`/step/${step.id}?$modena=bachata-science`}
            data-testid={testIds.stepPreview.link}
        >
            {step.name}
            {step.videoFile ? <noscript /> : <span> (🚫📹)</span>}
        </Link>
    );
};
