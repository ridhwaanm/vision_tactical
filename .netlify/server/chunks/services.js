const services = [
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    shortDescription: "Professional security officers for residential, commercial, and corporate properties with on-site surveys and H&S assessments.",
    icon: "shield",
    heroImage: "/images/services/manned-guarding.jpg",
    content: {
      intro: `Our manned guarding service provides highly trained security officers who serve as the first line of defence for your property. Each officer undergoes rigorous vetting and training to ensure they meet our strict standards.

We conduct comprehensive on-site surveys and health & safety assessments to identify vulnerabilities and develop a tailored security strategy for your specific needs. Our guards are equipped with modern communication devices and operate under strict protocols.

Every security contract we undertake is personally overseen by one of our Directors, ensuring the highest level of accountability and service delivery.`,
      features: [
        {
          title: "Trained Professionals",
          description: "All guards undergo PSIRA-registered training and continuous skills development."
        },
        {
          title: "On-Site Surveys",
          description: "Comprehensive property assessments to identify security gaps and optimise guard placement."
        },
        {
          title: "Health & Safety Compliance",
          description: "Full H&S assessments ensuring your property meets all regulatory requirements."
        },
        {
          title: "24/7 Supervision",
          description: "Field supervisors conduct random inspections and are available around the clock."
        }
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "We discuss your security needs and conduct a preliminary site assessment."
        },
        {
          step: 2,
          title: "Risk Assessment",
          description: "Detailed analysis of threats, vulnerabilities, and required guard strength."
        },
        {
          step: 3,
          title: "Deployment",
          description: "Trained officers are deployed with proper equipment and communication systems."
        },
        {
          step: 4,
          title: "Ongoing Management",
          description: "Continuous monitoring, supervision, and performance reviews."
        }
      ],
      whyVisionTactical: `With years of experience in the South African security industry, Vision Tactical has built a reputation for excellence in manned guarding. Our officers are not just security guards – they are trained professionals who understand access control, emergency response, and customer service. We maintain strict vetting procedures and invest heavily in ongoing training to ensure our teams are prepared for any situation.`
    },
    cta: { text: "Get a Guarding Quote", href: "/get-a-quote" },
    relatedServices: ["armed-response", "cctv-alarms", "dog-handling"],
    seo: {
      title: "Manned Guarding Services | Vision Tactical | Johannesburg",
      description: "Professional manned guarding services in Johannesburg. PSIRA-registered security officers for residential, commercial, and corporate properties."
    }
  },
  {
    slug: "armed-response",
    title: "Armed Response",
    shortDescription: "Rapid reaction officers, CCTV monitoring, alarm response, and patrol services for immediate threat intervention.",
    icon: "siren",
    heroImage: "/images/services/armed-response.jpg",
    content: {
      intro: `Our armed response unit is ready to react immediately to any security breach or emergency situation. Equipped with high-visibility vehicles and advanced communication systems, our reaction officers can reach your location within minutes.

The unit operates 24/7 from our state-of-the-art control room, where trained controllers monitor CCTV feeds and alarm systems around the clock. When an alarm triggers, our team verifies the threat and dispatches the nearest available reaction vehicle.

All response officers are extensively trained in tactical response, firearms handling, and emergency medical care, ensuring they can handle any situation professionally.`,
      features: [
        {
          title: "Rapid Response Time",
          description: "Average response time of under 5 minutes in our core coverage areas."
        },
        {
          title: "24/7 Control Room",
          description: "Professional controllers monitoring alarms and CCTV feeds around the clock."
        },
        {
          title: "GPS Tracking",
          description: "All vehicles equipped with GPS for optimal deployment and real-time tracking."
        },
        {
          title: "Armed Officers",
          description: "Fully licensed and trained reaction officers with extensive tactical training."
        }
      ],
      process: [
        {
          step: 1,
          title: "Alarm Activation",
          description: "Your alarm system sends a signal to our 24/7 control room."
        },
        {
          step: 2,
          title: "Verification",
          description: "Controllers verify the alarm using CCTV or phone contact."
        },
        {
          step: 3,
          title: "Dispatch",
          description: "Nearest available reaction vehicle is dispatched immediately."
        },
        {
          step: 4,
          title: "Response",
          description: "Officers arrive on scene, assess the situation, and take appropriate action."
        }
      ],
      whyVisionTactical: `Vision Tactical's armed response unit has one of the best track records in Johannesburg. Our integration of technology, training, and tactical expertise means we don't just respond – we resolve. With partnerships including ER24 for medical emergencies and close coordination with SAPS, we provide a comprehensive security response that goes beyond traditional armed response services.`
    },
    cta: { text: "Request Armed Response", href: "/get-a-quote" },
    relatedServices: ["cctv-alarms", "drone-surveillance", "emergency-medical"],
    seo: {
      title: "Armed Response Services | Vision Tactical | Johannesburg",
      description: "24/7 armed response security in Johannesburg. Rapid reaction officers, alarm monitoring, and CCTV surveillance for immediate threat response."
    }
  },
  {
    slug: "vip-protection",
    title: "VIP Protection",
    shortDescription: "Executive protection services with advance planning, route risk assessment, and close protection officers.",
    icon: "user-shield",
    heroImage: "/images/services/vip-protection.jpg",
    content: {
      intro: `Our VIP protection service provides discreet, professional close protection for executives, dignitaries, and high-net-worth individuals. Our officers are trained in advanced protective techniques and understand the balance between security and accessibility.

Every protection assignment begins with comprehensive advance planning. We conduct route surveys, venue assessments, and threat analyses to identify potential risks before they materialise. Our teams work seamlessly with existing security arrangements and local authorities.

We specialise in both residential protection and mobile escort services, ensuring our clients remain safe whether at home, in transit, or attending events.`,
      features: [
        {
          title: "Close Protection Officers",
          description: "Highly trained bodyguards with backgrounds in military, police, or private security."
        },
        {
          title: "Advance Planning",
          description: "Pre-event reconnaissance, route planning, and venue security assessments."
        },
        {
          title: "Risk Assessment",
          description: "Comprehensive threat analysis and mitigation strategies for each assignment."
        },
        {
          title: "Discreet Service",
          description: "Professional officers who understand the importance of maintaining a low profile."
        }
      ],
      process: [
        {
          step: 1,
          title: "Threat Assessment",
          description: "Detailed analysis of potential threats and risk factors."
        },
        {
          step: 2,
          title: "Protection Plan",
          description: "Customised security strategy tailored to the client's lifestyle and needs."
        },
        {
          step: 3,
          title: "Team Deployment",
          description: "Appropriate number of officers deployed based on risk level."
        },
        {
          step: 4,
          title: "Continuous Review",
          description: "Ongoing assessment and adjustment of protection measures."
        }
      ],
      whyVisionTactical: `Vision Tactical's VIP protection team includes former military and law enforcement professionals with years of experience protecting high-profile individuals. We understand that effective protection is about prevention, not just reaction. Our advance planning and intelligence-gathering capabilities mean we identify and neutralise threats before they reach our clients.`
    },
    cta: { text: "Request VIP Protection", href: "/get-a-quote" },
    relatedServices: ["armed-response", "emergency-medical", "event-security"],
    seo: {
      title: "VIP Protection Services | Vision Tactical | Johannesburg",
      description: "Professional close protection and VIP security services in Johannesburg. Executive protection, bodyguards, and advance security planning."
    }
  },
  {
    slug: "emergency-medical",
    title: "Emergency Medical Services",
    shortDescription: "ER24 partnership providing 280+ emergency vehicles, 24/7 contact centre, and on-scene medical response.",
    icon: "heart-pulse",
    heroImage: "/images/services/emergency-medical.jpg",
    content: {
      intro: `Through our strategic partnership with ER24, Vision Tactical provides comprehensive emergency medical services to our clients. This partnership gives you access to one of Africa's largest private emergency medical networks, with over 280 vehicles strategically positioned across South Africa.

Our 24/7 contact centre can dispatch medical assistance immediately in the event of an accident, medical emergency, or security incident requiring medical attention. All our armed response officers are trained in basic life support (BLS) and can provide critical care in the minutes before paramedics arrive.

We also offer stand-by medical services for events, ensuring professional medical coverage for your corporate functions, sporting events, or private gatherings.`,
      features: [
        {
          title: "ER24 Partnership",
          description: "Direct access to Africa0027s leading private emergency medical service provider."
        },
        {
          title: "24/7 Dispatch",
          description: "Round-the-clock contact centre capable of dispatching medical assistance."
        },
        {
          title: "BLS-Trained Officers",
          description: "All security officers trained in basic life support and first response."
        },
        {
          title: "Event Medical Cover",
          description: "Stand-by ambulances and paramedics for corporate and private events."
        }
      ],
      process: [
        {
          step: 1,
          title: "Emergency Call",
          description: "Client or control room contacts ER24 dispatch centre."
        },
        {
          step: 2,
          title: "Medical Triage",
          description: "Qualified paramedics assess the situation and determine response level."
        },
        {
          step: 3,
          title: "Dispatch",
          description: "Nearest available ambulance and/or BLS-trained security officer dispatched."
        },
        {
          step: 4,
          title: "On-Scene Care",
          description: "Medical professionals provide treatment and transport if required."
        }
      ],
      whyVisionTactical: `Our partnership with ER24 sets Vision Tactical apart from traditional security companies. We understand that security incidents often require medical response, and our integrated approach ensures seamless coordination between security and medical teams. This holistic approach to client safety has saved countless lives and provides genuine peace of mind.`
    },
    cta: { text: "Request Medical Cover", href: "/get-a-quote" },
    relatedServices: ["armed-response", "vip-protection", "event-security"],
    seo: {
      title: "Emergency Medical Services | Vision Tactical | Johannesburg",
      description: "24/7 emergency medical response through our ER24 partnership. Ambulance services, event medical cover, and BLS-trained security officers."
    }
  },
  {
    slug: "drone-surveillance",
    title: "Drone Surveillance",
    shortDescription: "Pioneering aerial crime combat operations with thermal imaging, aerial reconnaissance, and real-time monitoring.",
    icon: "drone",
    heroImage: "/images/services/drone-surveillance.jpg",
    content: {
      intro: `Vision Tactical pioneered the use of drone technology for crime prevention and surveillance in South African private security operations. Our advanced drone unit provides aerial reconnaissance that ground-based security simply cannot match.

Equipped with high-resolution cameras and thermal imaging technology, our drones can monitor large areas, track suspects, and provide real-time intelligence to ground teams. This capability has proven invaluable in combating hijackings, burglaries, and illegal dumping operations.

Our drone pilots are fully licensed by the South African Civil Aviation Authority (SACAA) and operate under strict regulations. We maintain comprehensive insurance and follow all airspace protocols.`,
      features: [
        {
          title: "Thermal Imaging",
          description: "Advanced thermal cameras for night operations and suspect tracking."
        },
        {
          title: "Real-Time Intelligence",
          description: "Live video feeds to control room and ground teams for coordinated response."
        },
        {
          title: "Large Area Coverage",
          description: "Monitor multiple properties and respond to incidents across wide areas."
        },
        {
          title: "SACAA Licensed",
          description: "Fully licensed and insured drone operations complying with all regulations."
        }
      ],
      process: [
        {
          step: 1,
          title: "Mission Planning",
          description: "Define surveillance objectives and flight paths based on intelligence."
        },
        {
          step: 2,
          title: "Deployment",
          description: "Drone launched from strategic location for optimal coverage."
        },
        {
          step: 3,
          title: "Surveillance",
          description: "Real-time monitoring with thermal and visual cameras."
        },
        {
          step: 4,
          title: "Response Coordination",
          description: "Ground teams directed based on aerial intelligence."
        }
      ],
      whyVisionTactical: `Vision Tactical was the first private security company in South Africa to successfully integrate drone technology into routine security operations. Our drone unit has been featured in national media for its role in combating crime, and our innovative approach has been recognised with industry awards. We continue to push the boundaries of what's possible with security technology.`
    },
    cta: { text: "Request Drone Coverage", href: "/get-a-quote" },
    relatedServices: ["armed-response", "cctv-alarms", "event-security"],
    seo: {
      title: "Drone Surveillance Services | Vision Tactical | Johannesburg",
      description: "Advanced drone surveillance and aerial security operations in Johannesburg. Thermal imaging, real-time monitoring, and SACAA-licensed pilots."
    }
  },
  {
    slug: "cctv-alarms",
    title: "CCTV & Alarm Systems",
    shortDescription: "Complete security camera systems, alarm installation, 24/7 monitoring, and remote access control solutions.",
    icon: "video",
    heroImage: "/images/services/cctv-alarms.jpg",
    content: {
      intro: `Our CCTV and alarm division provides complete electronic security solutions, from initial design and installation to 24/7 monitoring and maintenance. We work with industry-leading equipment to ensure reliable, high-quality surveillance and intrusion detection.

All systems can be integrated with our armed response service, ensuring that any alarm activation triggers an immediate response from our reaction officers. Remote access capabilities allow you to monitor your property from anywhere in the world via smartphone or computer.

We offer comprehensive maintenance contracts to keep your systems in optimal working condition, with regular inspections and prompt repairs when needed.`,
      features: [
        {
          title: "HD Camera Systems",
          description: "High-definition cameras with night vision and weather-resistant housings."
        },
        {
          title: "Smart Alarms",
          description: "Advanced intrusion detection with smartphone alerts and remote arming."
        },
        {
          title: "24/7 Monitoring",
          description: "Professional control room monitoring all alarm and camera systems."
        },
        {
          title: "Remote Access",
          description: "View live feeds and control your system from anywhere via mobile app."
        }
      ],
      process: [
        {
          step: 1,
          title: "Site Survey",
          description: "Comprehensive assessment of property to determine optimal camera and alarm placement."
        },
        {
          step: 2,
          title: "System Design",
          description: "Customised security system design based on property layout and risk profile."
        },
        {
          step: 3,
          title: "Installation",
          description: "Professional installation by certified technicians with minimal disruption."
        },
        {
          step: 4,
          title: "Monitoring & Support",
          description: "24/7 monitoring with ongoing maintenance and technical support."
        }
      ],
      whyVisionTactical: `Vision Tactical's electronic security division combines quality equipment with professional installation and responsive monitoring. Unlike companies that simply sell equipment, we provide complete security solutions backed by our armed response capability. When your alarm triggers, we don't just notify you – we respond immediately.`
    },
    cta: { text: "Get CCTV Quote", href: "/get-a-quote" },
    relatedServices: ["armed-response", "manned-guarding", "drone-surveillance"],
    seo: {
      title: "CCTV & Alarm Systems | Vision Tactical | Johannesburg",
      description: "Professional CCTV camera and alarm system installation in Johannesburg. 24/7 monitoring, remote access, and integrated armed response."
    }
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortDescription: "Comprehensive security for large-scale events including crowd management, access control, and emergency medical cover.",
    icon: "users",
    heroImage: "/images/services/event-security.jpg",
    content: {
      intro: `Vision Tactical provides comprehensive security solutions for events of all sizes, from corporate functions and product launches to sporting events and music festivals. Our experienced event security team understands the unique challenges of managing large crowds while maintaining a welcoming atmosphere.

We provide everything from basic access control to full-scale security operations including crowd management, VIP protection, emergency medical cover, and drone surveillance. Our controllers coordinate all security personnel from a dedicated event control room, ensuring seamless communication and rapid response to any incident.

All our event security staff are professionally trained in crowd psychology, conflict resolution, and emergency procedures.`,
      features: [
        {
          title: "Crowd Management",
          description: "Trained stewards and security officers for safe crowd control."
        },
        {
          title: "Access Control",
          description: "Professional gate management, ticket verification, and bag searches."
        },
        {
          title: "Medical Cover",
          description: "Stand-by ambulances and paramedics through our ER24 partnership."
        },
        {
          title: "Integrated Operations",
          description: "Control room coordination of all security, medical, and emergency services."
        }
      ],
      process: [
        {
          step: 1,
          title: "Event Assessment",
          description: "Detailed review of event type, venue, expected attendance, and risk factors."
        },
        {
          step: 2,
          title: "Security Plan",
          description: "Comprehensive security strategy including staffing, equipment, and procedures."
        },
        {
          step: 3,
          title: "Deployment",
          description: "Security team deployed with clear roles, communication channels, and command structure."
        },
        {
          step: 4,
          title: "Event Execution",
          description: "Professional security delivery with real-time adjustments as needed."
        }
      ],
      whyVisionTactical: `Vision Tactical has secured some of South Africa's most high-profile events, from corporate gatherings to major public festivals. Our integrated approach – combining physical security, medical cover, and aerial surveillance – provides comprehensive protection that allows event organisers to focus on delivering successful events. We understand that good event security is invisible until it's needed.`
    },
    cta: { text: "Request Event Security", href: "/get-a-quote" },
    relatedServices: ["vip-protection", "emergency-medical", "dog-handling"],
    seo: {
      title: "Event Security Services | Vision Tactical | Johannesburg",
      description: "Professional event security for corporate functions, festivals, and sporting events. Crowd management, access control, and medical cover."
    }
  },
  {
    slug: "dog-handling",
    title: "Dog Handling Services",
    shortDescription: "Professional K9 units including patrol dogs, detection dogs, and handler teams for enhanced security operations.",
    icon: "dog",
    heroImage: "/images/services/dog-handling.jpg",
    content: {
      intro: `Our K9 unit provides highly trained dog and handler teams for patrol, detection, and specialised security operations. Dogs are an invaluable security asset, offering superior senses of smell and hearing combined with an intimidating presence that deters criminals.

All our dog handlers are professionally trained in canine handling and welfare. Our dogs undergo rigorous training in obedience, tracking, apprehension, and (where applicable) substance detection. Each team is certified to recognised standards before deployment.

K9 units can be deployed as standalone services or integrated with manned guarding and armed response operations for enhanced effectiveness.`,
      features: [
        {
          title: "Patrol Dogs",
          description: "Large breeds trained for perimeter patrol, tracking, and suspect apprehension."
        },
        {
          title: "Detection Dogs",
          description: "Specially trained dogs for narcotics, explosives, or other substance detection."
        },
        {
          title: "Certified Handlers",
          description: "Professional handlers trained in canine care, control, and deployment."
        },
        {
          title: "Integrated Operations",
          description: "K9 teams work seamlessly with human security teams for maximum effectiveness."
        }
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Assessment of security needs to determine appropriate K9 capability."
        },
        {
          step: 2,
          title: "Team Selection",
          description: "Matching appropriate dog and handler team to specific requirements."
        },
        {
          step: 3,
          title: "Deployment",
          description: "K9 team deployed with clear operational parameters and support."
        },
        {
          step: 4,
          title: "Ongoing Training",
          description: "Regular training and certification to maintain operational readiness."
        }
      ],
      whyVisionTactical: `Vision Tactical's K9 unit represents a significant investment in training, equipment, and animal welfare. Our dogs are not just security tools – they are valued team members who receive excellent care throughout their service and into retirement. This commitment to excellence is reflected in the performance of our K9 teams, which have been instrumental in countless successful operations.`
    },
    cta: { text: "Request K9 Services", href: "/get-a-quote" },
    relatedServices: ["manned-guarding", "armed-response", "event-security"],
    seo: {
      title: "Dog Handling & K9 Services | Vision Tactical | Johannesburg",
      description: "Professional K9 security services in Johannesburg. Patrol dogs, detection dogs, and certified handler teams for enhanced security."
    }
  }
];
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
function getAllServices() {
  return services;
}
export {
  getServiceBySlug as a,
  getAllServices as g
};
