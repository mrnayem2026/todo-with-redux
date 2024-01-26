import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todosSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [task, setTasks] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const dispatch = useAppDispatch();


  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const todoTask = {
      id: randomString,
      title: task,
      priority,
      description,
    };
    dispatch(addTodo(todoTask));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-lg font-bold">
          Add todo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add your today task.</DialogTitle>
          <DialogDescription>
            Never leave till tomorrow that whice you can do today.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onsubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTasks(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            {/* Select Prioroty  */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Select onValueChange={(value: string) => setPriority(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue  placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectLabel>Task Priority</SelectLabel>
                    <SelectItem value="highe">Highe</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
