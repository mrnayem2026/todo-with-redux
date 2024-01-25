import { Button } from "../ui/button";

const TodoContainer = () => {
    return (
        <div>
            {/* Add and filter todo  */}
            <div>
                <Button>Add todo</Button>
                <Button>Filter</Button>
            </div>

            <div className="bg-red-500 w-full h-screen rounded-xl p-5">
                <div>
                    <input type="checkbox"></input>
                    <p>Todo title</p>
                    <p>Time</p>
                    <p>Description</p>
                    <div>
                        <Button>Delete</Button>
                        <Button>Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;