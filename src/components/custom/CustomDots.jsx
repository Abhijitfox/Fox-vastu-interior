import React from 'react'

const CustomDots = ({ className, slides, setCurrent, current }) => {
    return (
        <div className={`${className}`}>
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`relative w-3 sm:w-3 md:w-4 h-3 flex items-center justify-center rounded-full border border-white transition-all duration-300 ease-in-out ${current === i ? "scale-125" : "opacity-40"
                        }`}
                >
                    <span
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${current === i ? "bg-white" : "bg-transparent"
                            }`}
                    />
                </button>
            ))}
        </div>
    )
}

export default CustomDots
