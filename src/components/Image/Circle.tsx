interface WithCircleProps {
    src: string;
    alt?: string;
    extraAttributes?: string;
}

const withCircle = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P & WithCircleProps) => {
        return (
            <div className="rounded-full overflow-hidden ">
                <Component {...props} />
            </div>
        );
    };
};

const ImageComponent: React.FC<WithCircleProps> = ({ src, alt, extraAttributes }) => {
    return <img src={src} alt={alt} className={`object-cover ${extraAttributes}`} />;
};

const CircleImage = withCircle(ImageComponent);

export default CircleImage;