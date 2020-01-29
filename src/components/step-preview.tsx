import React from 'react';
import { Link } from 'react-router-dom';
import { testIds } from '../__step-definitions__/test-ids';
import { getStep } from '../data/steps';
import { StepId } from '../types/steps';

export interface StepPreviewProps {
    stepId: StepId;
}

// tslint:disable-next-line:variable-name
export const StepPreview: React.FC<StepPreviewProps> = props => {
    const step = getStep(props.stepId);
    return (
        <Link
            className="step-preview"
            to={`/step/${step.id}?$modena=bachata-science`}
            data-testid={testIds.stepPreview.link}
        >
            {step.name}
            {!step.videoFile && <span> (🚫📹)</span>}
        </Link>
    );
};
