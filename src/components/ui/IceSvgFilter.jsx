const IceSvgFilter = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
                <filter id="svgfilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.3"
                        numOctaves="1"
                        seed="0"
                        stitchTiles="stitch"
                        result="feTurbulence-391ac80d"
                    ></feTurbulence>
                    <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="2"
                        edgeMode="duplicate"
                        result="feGaussianBlur-85e146a6"
                    ></feGaussianBlur>
                    <feDisplacementMap
                        in="feGaussianBlur-85e146a6"
                        in2="feTurbulence-391ac80d"
                        scale="37"
                        xChannelSelector="A"
                        yChannelSelector="A"
                    ></feDisplacementMap>
                </filter>
            </defs>
        </svg>
    );
};

export default IceSvgFilter;
