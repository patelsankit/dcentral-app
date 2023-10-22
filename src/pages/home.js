import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Logout from "./logout";
import ToggleButton from "../components/ToggleButton";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import Modal from '../components/Modal';
import News from "./News";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white dark:bg-[#212121] min-h-screen text-center">
      <Header />
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
        </Modal>
      </div>
      <h1 className="text-black dark:text-white pt-5">Welcome to the home page sankit!</h1>
      <DataTable />
      <Logout />

      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={openModal}>Open Modal</button>

    </div>
  );
};

export default Home;
