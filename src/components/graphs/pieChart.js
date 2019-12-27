import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export const PieChart = ({ data, onClick}) => (
    <ResponsivePie
        data={data}
        onClick={onClick}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={'inherit'}
        enableRadialLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive
    />
);