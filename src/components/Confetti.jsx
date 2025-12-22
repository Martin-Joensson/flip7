import React from "react";

export const Confetti = () => {
  const confettiWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = confettiWrapperRef.current;
    if (!wrapper) return;

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti-piece");
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.setProperty(
        "--fall-duration",
        `${Math.random() * 3 + 3}s`
      );
      confetti.style.setProperty("--confetti-color", getRandomColor());
      wrapper.appendChild(confetti);
    }
  }, []);

  function getRandomColor() {
    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      ref={confettiWrapperRef}
      className="min-h-screen w-screen  relative"
    ></div>
  );
};
