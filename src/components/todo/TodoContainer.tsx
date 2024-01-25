import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos[0]);
  
  return (
    <div>
      {/* Add and filter todo  */}
      <div className="flex justify-between pb-3">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-2">
        {/* <div className="bg-white text-red-500 p-5 rounded-md text-center">
          <p className="text-2xl font-bold">There is no task pending</p>
        </div> */}
        <div className="bg-white rounded-lg p-2 space-y-3 ">
         {
          todos.map((item)=><TodoCard key={item.id} todo={item}></TodoCard>)
         }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
