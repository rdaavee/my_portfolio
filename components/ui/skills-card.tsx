
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons/lib";

export const SkillsCard = ({
    items,
    className,
}: {
    items: {
        title: string;
        Icon: IconType;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState < number | null > (null);

    return (
        <div
            className={cn(
                "grid grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, index) => {

                const Icon = item.Icon

                return <div
                    key={index}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-800/[0.8] block  rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-1 ring-zinc-100 relative z-20 transition-all duration-500 cursor-pointer">
                        <div className="py-10 z-50 relative space-y-5">
                            <Icon className="w-8 h-8 mx-auto" />
                            <p className="text-xl font-bold text-center text-zinc-300">{item.text}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};
