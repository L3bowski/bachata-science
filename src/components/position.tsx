import React from 'react';
import { getPosition, PositionProps } from '../data/positions';
import { getInputSteps, getOutputSteps, getPositionSteps } from '../data/steps';
import { StepPreview } from './step-preview';

export const Position = (props: PositionProps) => {
    const position = getPosition(props.positionId);
    const inputSteps = getInputSteps(props.positionId);
    const outputSteps = getOutputSteps(props.positionId);
    const positionSteps = getPositionSteps(props.positionId);

    return (
        <div className="position">
            <h3>Posición: {position.name}</h3>
            <div className="thumbnail">👫📷</div>
            <p>
                {position.description ||
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}
            </p>

            <h4>Pasos de entrada</h4>
            {inputSteps.length > 0 ? (
                inputSteps.map(step => (
                    <div>
                        <StepPreview key={step.id} stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos de entrada para esta posición</div>
            )}

            <h4>Pasos en posición</h4>
            {positionSteps.length > 0 ? (
                positionSteps.map(step => (
                    <div>
                        <StepPreview key={step.id} stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos en esta posición</div>
            )}

            <h4>Pasos de salida</h4>
            {outputSteps.length > 0 ? (
                outputSteps.map(step => (
                    <div>
                        <StepPreview key={step.id} stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos de salida para esta posición</div>
            )}
        </div>
    );
};
