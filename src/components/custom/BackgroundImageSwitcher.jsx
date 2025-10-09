import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundImageSwitcher = ({ image }) => {

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 bg-black/20" />
        </motion.div>
    );
};

export default BackgroundImageSwitcher;
