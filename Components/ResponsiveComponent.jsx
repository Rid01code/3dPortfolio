"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
    const size = useScreenSize();

    if (typeof children !== "function") {
        console.error("ResponsiveComponent expects children to be a function");
        return null;
    }

    return <>{children({ size })}</>;
};

export default ResponsiveComponent;
