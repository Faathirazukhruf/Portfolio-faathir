import React from "react";

const AuroraBackground = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`relative isolate flex flex-col items-center justify-center bg-background text-text ${className}`}
            {...props}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Base vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />

                {/* Smoke layer 1 (main) */}
                <div
                    className="
            absolute -right-[42%] md:-right-[18%] top-[-25%] h-[150%] w-[190%] md:w-[85%]
            opacity-45 blur-[90px]
            mix-blend-screen
            [background-image:
              radial-gradient(circle_at_15%_35%,rgba(59,130,246,0.55),transparent_55%),
              radial-gradient(circle_at_55%_15%,rgba(139,92,246,0.60),transparent_52%),
              radial-gradient(circle_at_75%_70%,rgba(6,182,212,0.50),transparent_58%),
              radial-gradient(circle_at_35%_80%,rgba(59,130,246,0.35),transparent_60%)
            ]
            [background-size:220%_220%]
            [background-position:0%_50%]
            [mask-image:radial-gradient(ellipse_at_62%_50%,black_0%,transparent_70%)]
            [-webkit-mask-image:radial-gradient(ellipse_at_62%_50%,black_0%,transparent_70%)]
            will-change-transform
            [animation:auroraSmoke1_18s_ease-in-out_infinite]
          "
                />

                {/* Smoke layer 2 (depth) */}
                <div
                    className="
            absolute -right-[34%] md:-right-[12%] top-[-18%] h-[135%] w-[170%] md:w-[75%]
            opacity-30 blur-[110px]
            mix-blend-screen
            [background-image:
              radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.45),transparent_55%),
              radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.42),transparent_55%),
              radial-gradient(circle_at_55%_80%,rgba(139,92,246,0.45),transparent_58%)
            ]
            [background-size:240%_240%]
            [background-position:60%_40%]
            [mask-image:radial-gradient(ellipse_at_62%_50%,black_0%,transparent_74%)]
            [-webkit-mask-image:radial-gradient(ellipse_at_62%_50%,black_0%,transparent_74%)]
            will-change-transform
            [animation:auroraSmoke2_26s_ease-in-out_infinite]
          "
                />

                {/* Light sweep tipis (biar ada “napas” aurora) */}
                <div
                    className="
            absolute right-[-10%] top-0 h-full w-[115%] md:w-[62%]
            opacity-22 blur-[70px]
            mix-blend-screen
            [background-image:
              radial-gradient(ellipse_at_right,rgba(255,255,255,0.10)_0%,rgba(59,130,246,0.28)_18%,rgba(139,92,246,0.18)_40%,transparent_75%)
            ]
            [mask-image:linear-gradient(to_left,transparent_0%,black_45%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_left,transparent_0%,black_45%,transparent_100%)]
            will-change-transform
            [animation:auroraSmoke3_12s_ease-in-out_infinite]
          "
                />

                {/* Subtle grain */}
                <div
                    className="
            absolute inset-0 opacity-[0.06]
            [background-image:repeating-radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12)_0_1px,transparent_1px_6px)]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
            [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
          "
                />
            </div>

            {children}
        </div>
    );
};

export default AuroraBackground;
