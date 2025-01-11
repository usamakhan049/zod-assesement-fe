import React from 'react';

interface TagProps {
    text: string;
    extraAttributes?: string;
}

const Tag: React.FC<TagProps> = ({ text, extraAttributes }) => {
    return (
        <span className={`inline-block max-h-6 border border-border border-0.5 px-2.5 rounded-full text-muted text-xs leading-5 whitespace-nowrap ${extraAttributes}`}>
            {text}
        </span>
    );
};

export default Tag;