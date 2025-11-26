import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faPalette,
	faLeaf,
	faHome,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Section1 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => entry.isIntersecting && setIsVisible(true),
			{ threshold: 0.35 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	// Small presentational components kept inside the file for simplicity
	const Badge = ({ children }) => (
		<span className="inline-flex items-center gap-2 bg-[#e6f7f2] px-3 py-1 rounded-full text-sm font-semibold text-[#0b2545]">
			{children}
		</span>
	);

	const FeatureCard = ({ icon, title, desc }) => (
		<div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full">
			<div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0b2545] text-white text-lg flex-shrink-0">
				<FontAwesomeIcon icon={icon} />
			</div>
			<div>
				<h4 className="font-semibold text-[#0b2545] leading-snug">{title}</h4>
				<p className="text-sm text-gray-600 mt-1">{desc}</p>
			</div>
		</div>
	);

	const stats = [
		{ label: "Projects Completed", value: 100, icon: faHome },
		{ label: "Years of Experience", value: 10, icon: faLeaf },
		{ label: "Service Areas", value: 4, icon: faPalette },
	];

	const features = [
		{
			icon: faPalette,
			title: "Tailored Aesthetics",
			desc: "Designs that blend modern looks with Vastu harmony — tailored to your lifestyle.",
		},
		{
			icon: faLeaf,
			title: "Balanced Energy",
			desc: "Small shifts in layout and materials to invite calm and flow into your space.",
		},
		{
			icon: faHome,
			title: "Holistic Solutions",
			desc: "From space planning to finishes — a single partner for end-to-end interiors.",
		},
	];

	return (
		<section
			ref={sectionRef}
			aria-label="What to expect - Vastu Interior"
			className="relative w-full py-16 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white to-[#f8fbff] text-[#0b2545]"
		>
			<div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
				{/* Grid: left content + right stats */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
					{/* Left: Creative Intro */}
					<div className="flex flex-col gap-6">
						<Badge>Vastu + Design</Badge>

						<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
							Interior design that feels right — and looks unforgettable.
						</h2>

						<p className="text-gray-700 text-base md:text-lg max-w-prose">
							We combine timeless Vastu principles with contemporary aesthetics to craft spaces that support how you live, work and recharge.
						</p>

						<div className="grid gap-3">
							{features.map((f, i) => (
								<FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
							))}
						</div>

						<div className="flex flex-wrap gap-4 items-center">
							<Link to="/contact" className="inline-flex items-center gap-3 bg-[#0b2545] text-white px-5 py-3 rounded-full font-semibold hover:opacity-95 transition">
								Book a Consultation
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</Link>
							<Link to="/about-us" className="text-sm text-[#0b2545] font-medium hover:underline">
								Learn about our process
							</Link>
						</div>
					</div>

					{/* Right: Stats Card */}
					<div>
						<div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
							<blockquote className="italic text-[#0b2545] text-lg font-serif">
								"Design begins with listening — to your routines, tastes and the life you want inside these walls."
							</blockquote>

							<div className="mt-6 grid grid-cols-3 gap-3">
								{stats.map((s, i) => (
									<div key={i} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
										<div className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0b2545] text-white text-sm mb-2">
											<FontAwesomeIcon icon={s.icon} />
										</div>
										<AnimatedNumber target={s.value} isVisible={isVisible} />
										<p className="text-xs text-gray-500 mt-1 uppercase font-medium tracking-wider">{s.label}</p>
									</div>
								))}
							</div>

							<div className="mt-6 flex items-center gap-3 text-sm text-gray-700">
								<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e6f7f2] text-[#0b2545]">
									<FontAwesomeIcon icon={faPhone} />
								</div>
								<div>
									<div className="text-xs text-gray-500">Need quick help?</div>
									<Link to="/contact" className="font-semibold text-[#0b2545] hover:underline">Call us</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// Improved animation using requestAnimationFrame for smoother count
const AnimatedNumber = ({ target, isVisible }) => {
	const [count, setCount] = useState(0);
	const ref = useRef({ start: null, frame: null });

	useEffect(() => {
		if (!isVisible) return;
		const duration = 1400;
		const startValue = 0;

		const animate = (timestamp) => {
			if (!ref.current.start) ref.current.start = timestamp;
			const progress = Math.min((timestamp - ref.current.start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
			const current = Math.floor(startValue + (target - startValue) * eased);
			setCount(current);
			if (progress < 1) {
				ref.current.frame = requestAnimationFrame(animate);
			} else {
				setCount(target);
			}
		};

		ref.current.frame = requestAnimationFrame(animate);

		return () => {
			if (ref.current.frame) cancelAnimationFrame(ref.current.frame);
			ref.current.frame = null;
			ref.current.start = null;
		};
	}, [isVisible, target]);

	return (
		<h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0b2545]">
			{count}
			<span className="inline-block ml-1 text-sm md:text-base">+</span>
		</h3>
	);
};

export default Section1;