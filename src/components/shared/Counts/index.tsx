import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import "./Counts.css"
const Counts = ({ decrement, increment, count }: { decrement: any; increment: any; count: number }) => {
  return (
    <div className="counts">
      <button
        className={`${
          count === 1
            ? "hover:bg-white hover:text-primary cursor-not-allowed"
            : ""
        }`}
        onClick={decrement}
      >
        <RiSubtractFill />
      </button>
      <span>{count}</span>
      <button className="increment" onClick={increment}>
        <RiAddFill />
      </button>
    </div>
  );
};

export default Counts;
