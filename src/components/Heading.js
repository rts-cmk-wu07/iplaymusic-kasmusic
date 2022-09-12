const Heading = ({ children, headingLevel, css }) => {
  const gradientRules = "bg-gradient-to-r from-gradient-start to-gradient-end";
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  const Heading = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";
  return <Heading className={css + " " + gradientRules}>{children}</Heading>;
};

export default Heading;
