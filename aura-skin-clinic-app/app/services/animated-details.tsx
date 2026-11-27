"use client";

import { useEffect, useRef, type ComponentProps } from "react";

export default function AnimatedDetails(props: ComponentProps<"details">) {
  const ref = useRef<HTMLDetailsElement>(null);
  const animation = useRef<Animation | null>(null);
  const destination = useRef<boolean | null>(null);

  useEffect(() => () => animation.current?.cancel(), []);

  return (
    <details
      {...props}
      ref={ref}
      onClick={event => {
        const element = ref.current;
        if (!element || !(event.target instanceof Element)) return;
        const summary = element.firstElementChild;
        // A nested treatment controls its own disclosure.
        if (event.target.closest("summary") !== summary) return;
        event.preventDefault();

        const expand = !(destination.current ?? element.open);
        const from = element.getBoundingClientRect().height;
        animation.current?.cancel();
        destination.current = expand;
        element.toggleAttribute("data-collapsing", !expand);

        const finish = () => {
          element.open = expand;
          element.style.overflow = "";
          element.removeAttribute("data-collapsing");
          destination.current = null;
          animation.current = null;
        };

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          finish();
          return;
        }

        element.open = true;
        const to = expand
          ? element.getBoundingClientRect().height
          : (summary?.getBoundingClientRect().height ?? 0) +
            parseFloat(getComputedStyle(element).borderTopWidth) +
            parseFloat(getComputedStyle(element).borderBottomWidth);
        element.style.overflow = "hidden";
        const motion = element.animate(
          [{ height: `${from}px` }, { height: `${to}px` }],
          { duration: 360, easing: "cubic-bezier(.22, 1, .36, 1)" },
        );
        animation.current = motion;
        motion.onfinish = finish;
      }}
    />
  );
}
