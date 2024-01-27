/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // This from local machine
  // const { todos } = useAppSelector((state) => state.todos);

  // This from server
  const { data, isLoading } = useGetTodosQuery(undefined);

 
  if (isLoading) {
    return <p>Loding.....</p>;
  }
 

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
          {data.data.slice(0,6).map((item) => (
            <TodoCard key={item.id} todo={item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
