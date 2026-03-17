/**
 * Svelte action for counting up numbers
 * Usage: <span use:countUp={168}>0</span>
 */
export function countUp(node: HTMLElement, target: number) {
  const duration = 2000; // ms
  let startTime: number;
  let animationFrame: number;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startTime = performance.now();
        animate();
        observer.unobserve(node);
      }
    },
    { threshold: 0.5 }
  );

  function animate() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    node.textContent = current.toLocaleString();

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      node.textContent = target.toLocaleString();
    }
  }

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    }
  };
}
