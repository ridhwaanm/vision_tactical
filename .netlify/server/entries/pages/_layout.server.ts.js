const mainNav = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Manned Guarding", href: "/services/manned-guarding" },
      { label: "Armed Response", href: "/services/armed-response" },
      { label: "VIP Protection", href: "/services/vip-protection" },
      { label: "Emergency Medical", href: "/services/emergency-medical" },
      { label: "Drone Surveillance", href: "/services/drone-surveillance" },
      { label: "Anti-Kidnapping", href: "/services/anti-kidnapping" },
      { label: "CCTV & Alarms", href: "/services/cctv-alarms" },
      { label: "Event Security", href: "/services/event-security" },
      { label: "Dog Handling", href: "/services/dog-handling" }
    ]
  },
  { label: "Community", href: "/community" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" }
];
function load() {
  return {
    nav: mainNav
  };
}
export {
  load
};
