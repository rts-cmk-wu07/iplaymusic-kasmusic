const Heading = ({ children, headingLevel, css }) => {
  const gradientRules =
    "bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent text-5xl font-bold max-w-max";
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  const Heading = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";
  return <Heading className={css + " " + gradientRules}>{children}</Heading>;
};

export default Heading;
