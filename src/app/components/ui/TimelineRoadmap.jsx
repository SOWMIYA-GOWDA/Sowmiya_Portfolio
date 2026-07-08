"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RoadmapCard from "./RoadmapCard";

const CARD_WIDTH = 240;
const CARD_HEIGHT = 200;
const GAP_X = 60;
const GAP_Y = 70;
const CURVE_WAVE = 20;   // extra bulge on the connecting curve
const ROW_BOB = 26;      // how far cards bob up/down within a row — breaks the straight-line look

export default function TimelineRoadmap({ items, onOpen }) {
  const gradientId = useId();
  const glowId = useId();
  const flowId = useId();
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 60%"],
  });
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!items?.length) return null;

  const cellW = CARD_WIDTH + GAP_X;
  const cellH = CARD_HEIGHT + GAP_Y;
  const topPadding = CARD_HEIGHT / 2 + ROW_BOB;

  let columns = 1;
  let rows = 0;
  let gridWidth = 0;
  let totalHeight = 400;
  let positions = [];
  let roadPath = "";

  if (containerWidth > 0) {
    columns = Math.max(1, Math.floor((containerWidth + GAP_X) / (CARD_WIDTH + GAP_X)));
    rows = Math.ceil(items.length / columns);
    gridWidth = columns * cellW - GAP_X;
    totalHeight = CARD_HEIGHT + ROW_BOB * 2 + (rows - 1) * cellH;

    positions = items.map((_, index) => {
      const row = Math.floor(index / columns);
      const colInRow = index % columns;
      const reversed = row % 2 === 1;
      const col = reversed ? columns - 1 - colInRow : colInRow;
      const bob = colInRow % 2 === 0 ? -ROW_BOB : ROW_BOB;
      return {
        x: col * cellW + CARD_WIDTH / 2,
        y: topPadding + row * cellH + bob,
        row,
      };
    });

    roadPath = `M ${positions[0].x} ${positions[0].y}`;
    positions.forEach((point, index) => {
      if (index === 0) return;
      const prev = positions[index - 1];
      const sameRow = point.row === prev.row;
      const dir = index % 2 === 0 ? 1 : -1;
      const wave = CURVE_WAVE * dir;

      if (sameRow) {
        const midX = (prev.x + point.x) / 2;
        roadPath += ` C ${midX} ${prev.y + wave}, ${midX} ${point.y + wave}, ${point.x} ${point.y}`;
      } else {
        const midY = (prev.y + point.y) / 2;
        roadPath += ` C ${prev.x + wave} ${midY}, ${point.x + wave} ${midY}, ${point.x} ${point.y}`;
      }
    });
  }

  return (
    <div ref={wrapperRef} className="w-full">
      <section
        ref={containerRef}
        className="relative mx-auto"
        style={{
          width: containerWidth ? `${gridWidth}px` : "100%",
          height: `${totalHeight}px`,
        }}
      >
        {containerWidth > 0 && (
          <>
            {/* Snake path SVG */}
            <div className="absolute inset-0 z-0">
          <svg
            viewBox={`0 0 ${gridWidth} ${totalHeight}`}
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            <defs>
              
              <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base track — more visible now (.08 -> .16 opacity) */}
            <path
              d={roadPath}
              fill="none"
              stroke="rgba(255,255,255,.16)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* One-time draw-in reveal, tied to scroll */}
            <motion.path
              d={roadPath}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: drawProgress }}
            />

            {/* Continuous flowing pulse — always animated, independent of scroll */}
            <motion.path
              d={roadPath}
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 22"
              opacity="0.8"
              animate={{ strokeDashoffset: [0, -56] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />

            {positions.map((point, index) => (
              <motion.circle
                key={items[index].id}
                cx={point.x}
                cy={point.y}
                r="6"
                fill="#8b5cf6"
                filter={`url(#${glowId})`}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              />
            ))}
          </svg>
        </div>

        {/* Cards */}
        <div className="absolute inset-0 z-10">
          {items.map((item, index) => {
            const position = positions[index];
            return (
              <div
                key={item.id}
                className="absolute"
                style={{
                  left: position.x - CARD_WIDTH / 2,
                  top: position.y - CARD_HEIGHT / 2,
                  width: CARD_WIDTH,
                }}
              >
                <RoadmapCard item={item} index={index} onOpen={onOpen} />
              </div>
            );
          })}
        </div>
          </>
        )}
      </section>
    </div>
  );
}