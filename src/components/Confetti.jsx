import { useRef, useEffect } from "react";

export const Confetti = () => {
  const confettiWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = confettiWrapperRef.current;
    if (!wrapper) return;

    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
    const pieces = [];
    let mounted = true;

    function spawnConfetti(confetti) {
      if (!mounted) return;

      const duration = Math.random() * 3 + 3;

      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = "-20px";
      confetti.style.setProperty("--fall-duration", `${duration}s`);
      confetti.style.setProperty(
        "--confetti-color",
        colors[Math.floor(Math.random() * colors.length)]
      );

      // reset animation
      confetti.style.animation = "none";
      confetti.offsetHeight; // force reflow
      confetti.style.animation = "";
    }

    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";

      confetti.addEventListener("animationend", () => {
        // random delay BEFORE respawning
        setTimeout(() => spawnConfetti(confetti), Math.random() * 1000);
      });

      // 👇 stagger initial start
      setTimeout(() => {
        if (!mounted) return;
        spawnConfetti(confetti);
        wrapper.appendChild(confetti);
      }, Math.random() * 4400);

      pieces.push(confetti);
    }

    return () => {
      mounted = false;
      pieces.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={confettiWrapperRef} className="confetti-wrapper" />;
};
