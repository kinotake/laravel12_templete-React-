import React from 'react';

type ImageWithTextProps = {
    imageSrc: string;
    altText: string;
    description: string;
};

const NoBelongPeopleText: React.FC<ImageWithTextProps> = ({ imageSrc, altText, description }) => {

    const hasUnderscore = description.includes('(');

    const beforeUnderscore = description.includes('_')
    ? description.split('_')[0]
        : '';

    const afterUnderscore = description.includes('_')
    ? description.split('_')[1]
        : '';

    return (
    <div className="inline-block text-center">
        <img src={imageSrc} alt={altText} className="w-27 h-30"/>
        <p className="text-[#0D99FF] text-xl">{beforeUnderscore}</p>
        {hasUnderscore && <p>{afterUnderscore}</p>}
    </div>
    );
};

export default NoBelongPeopleText;