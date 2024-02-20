import Part from "./Part";
const Content = ({ parts }) => (
  <>
    {parts.map((parts) => (
      <Part key={parts.id} part={parts} />
    ))}
  </>
);

export default Content;
