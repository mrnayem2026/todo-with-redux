import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
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
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
