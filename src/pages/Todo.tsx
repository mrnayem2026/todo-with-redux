import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-3xl md:text-5xl font-semibold text-center my-5">My Todo</h1>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;