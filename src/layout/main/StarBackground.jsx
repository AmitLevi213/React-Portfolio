import "./StarBackground.scss";

const StarBackground = ({ isDark }) => {
  const theme = isDark ? "dark" : "light";

  const stars = Array.from({ length: 50 }, (_, index) => (
    <div key={index} className="star"></div>
  ));

  return (
    <div className={`stars`} data-theme={theme}>
      {stars}
    </div>
  );
};

export default StarBackground;
