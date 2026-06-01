"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Wrench, CircleHelp, MessageSquare, Calendar, ShieldCheck, ChevronDown } from "lucide-react"
import "./PostProjectCare.css"

const postProjectCare = {
  eyebrow: "POST-PROJECT CARE",
  title: "AFTERCARE & CUSTOMER SERVICE",
  subtitle: "ONE-YEAR WORKMANSHIP CORRECTION (CALLBACK) PERIOD",
  description: "After your project is completed, we stand behind our workmanship for one year. If something we installed isn’t performing as intended, we return to correct it—calmly, promptly, and with minimal disruption.",
  services: [
    {
      icon: <Wrench size={24} />,
      text: "What's covered?",
      content: "Our one-year workmanship warranty covers labor and installation for all items included in your project's scope of work. This includes things like cabinet installation, tile setting, and paint application. We stand by the quality of our craftsmanship.",
    },
    {
      icon: <CircleHelp size={24} />,
      text: "What's not covered?",
      content: "The warranty does not cover damage caused by misuse, neglect, or accidents. It also excludes issues arising from pre-existing conditions, normal wear and tear, and products or materials covered by a separate manufacturer's warranty.",
    },
    {
      icon: <MessageSquare size={24} />,
      text: "How to request a service?",
      content: "To request a callback service, simply email us at service@doublerr.com with a description of the issue and any relevant photos. You can also call our office during business hours. We'll create a service ticket and schedule a visit.",
    },
    {
      icon: <Calendar size={24} />,
      text: "Typical response & scheduling",
      content: "We prioritize warranty claims and will typically respond within 24-48 business hours to assess the situation. A site visit will be scheduled at the earliest mutually convenient time, usually within one to two weeks.",
    },
    {
      icon: <ShieldCheck size={24} />,
      text: "Manufacturer warranties.",
      content: "Many products used in your renovation, such as appliances, faucets, and windows, come with their own manufacturer's warranty. We will provide you with all the necessary documentation to file a claim directly with the manufacturer if needed.",
    },
  ],
};

export function PostProjectCare() {
  return (
    <section className="care-section">
      <div className="care-container">
        <div className="care-header">
          <p className="care-eyebrow">{postProjectCare.eyebrow}</p>
          <h2 className="care-title">{postProjectCare.title}</h2>
          <h3 className="care-subtitle">{postProjectCare.subtitle}</h3>
          <p className="care-description">{postProjectCare.description}</p>
        </div>
        <Accordion.Root type="single" collapsible className="accordion-root">
          {postProjectCare.services.map((service, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="accordion-item">
              <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                  <div className="accordion-trigger-left">
                    <div className="accordion-icon">
                      {service.icon}
                    </div>
                    <p className="accordion-title">
                      {service.text}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 accordion-chevron" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content">
                <div className="accordion-content-inner">
                  <p>{service.content}</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

