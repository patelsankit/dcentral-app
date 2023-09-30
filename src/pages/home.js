import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Logout from "./logout";
import ToggleButton from "../components/ToggleButton";

const Home = () => {
  return (
    <div className="bg-[#212121] min-h-screen text-center">
      <ToggleButton />
      <h1 className="text-white pt-5">Welcome to the home page sankit!</h1>
      <Logout />

      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
};

export default Home;
