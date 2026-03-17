/**
 * Svelte action for scroll-triggered fade-in animations
 * Usage: <div use:reveal={{ delay: 100 }}>Content</div>
 */
export function reveal(node: HTMLElement, options: { delay?: number; distance?: number } = {}) {
  const { delay = 0, distance = 20 } = options;

  node.style.opacity = '0';
  node.style.transform = `translateY(${distance}px)`;
  node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
