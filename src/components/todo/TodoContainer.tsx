import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      {/* Add and filter todo  */}
      <div className="space-x-3 pb-3">
        <Button>Add todo</Button>
        <Button>Filter</Button>
      </div>

      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-2">
        {/* <div className="bg-white text-red-500 p-5 rounded-md text-center">
          <p className="text-2xl font-bold">There is no task pending</p>
        </div> */}
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
