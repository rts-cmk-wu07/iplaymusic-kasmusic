import { ChevronDownOutline } from "react-ionicons";
import Category from "./Category";
import { motion } from "framer-motion";
import { useState } from "react";

const CategoryContainer = ({ color, children }) => {
  const tempSubCategories = ["1", "2", "3", "4", "5", "6"];

  const [showHide, setShowHide] = useState(false);
  return (
    <>
      <section
        onClick={() => {
          setShowHide(!showHide);
        }}
        className={
          "p-[25px] rounded-xl flex place-content-between my-4 " + color
        }
      >
        {children}
        <motion.div
          animate={{ rotate: showHide ? 180 : 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <ChevronDownOutline
            color={"#"}
            height="25px"
            width="25px"
            className="text-white"
          />
        </motion.div>
      </section>
      <motion.section
        className="mx-6 "
        variants={
          ({ show: { scaleY: 100, display: "block" } },
          { hidden: { scaleY: 0, display: "none" } })
        }
        animate={showHide ? "show" : "hidden"}
        transition={{
          duration: 0.5,
        }}
      >
        {tempSubCategories.map((category) => {
          return (
            <Category>
              <p className="text-lg dark:text-white">{category}</p>
            </Category>
          );
        })}
      </motion.section>
    </>
  );
};

export default CategoryContainer;
