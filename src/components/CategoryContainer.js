import { ChevronDownOutline } from "react-ionicons";
import Category from "./Category";
import { motion } from "framer-motion";
import { useState } from "react";

const CategoryContainer = ({ color, children }) => {
  const tempSubCategories = ["1", "2", "3", "4", "5", "6"];

  const [showHide, setShowHide] = useState(false);
  console.log(showHide);
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
          animate={{ transform: showHide ? 0 : 180 }}
          transition={{
            duration: 0.5,
          }}
        >
          <ChevronDownOutline color={"#ffffff"} height="25px" width="25px" />
        </motion.div>
      </section>
      <motion.section
        className="mx-6"
        variants={({ show: { scaleY: 100 } }, { hidden: { scaleY: 0 } })}
        animate={showHide ? "show" : "hidden"}
        transition={{
          duration: 0.5,
        }}
      >
        {tempSubCategories.map((category) => {
          return (
            <Category>
              <p className="text-lg">{category}</p>
            </Category>
          );
        })}
      </motion.section>
    </>
  );
};

export default CategoryContainer;
