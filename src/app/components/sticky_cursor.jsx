"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "@/app/scss/cursor.module.scss";

export default function StickyCursor({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorSize, setCursorSize] = useState({ width: 20, height: 20 });
  const [borderRadius, setBorderRadius] = useState("50%"); // Default to circle

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 30, stiffness: 600, mass: 0.2 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (isHovered) {
      // Move cursor towards the center of the element
      mouse.x.set(center.x - cursorSize.width / 2 + distance.x * 0.05);
      mouse.y.set(center.y - cursorSize.height / 2 + distance.y * 0.05);
    } else {
      // Track the mouse normally
      mouse.x.set(clientX - cursorSize.width / 2);
      mouse.y.set(clientY - cursorSize.height / 2);
    }
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);

    // Get the element's size
    const target = e.target;
    const { offsetWidth, offsetHeight } = target;

    // Set cursor size based on element dimensions and change border radius
    setCursorSize({
      width: offsetWidth,
      height: offsetHeight,
    });
    setBorderRadius("10%"); // Change border radius on hover
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    setCursorSize({ width: 20, height: 20 }); // Reset to default size
    setBorderRadius("50%"); // Reset to circular shape
  };

  useEffect(() => {
    const sticky = stickyElement.current;

    window.addEventListener("mousemove", manageMouseMove);
    sticky.addEventListener("mouseover", manageMouseOver);
    sticky.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      sticky.removeEventListener("mouseover", manageMouseOver);
      sticky.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [isHovered, cursorSize]);

  return (
    <div>
      {/* SVG Filter */}

      {/* Cursor */}
      <motion.div
        className={styles.gradientBg} // Apply the CSS class for the animated background
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          borderRadius: borderRadius, // Dynamically set border radius
        }}
        animate={{
          width: cursorSize.width,
          height: cursorSize.height,
        }}
      >
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive}></div>
        </div>
      </motion.div>
    </div>
  );
}
