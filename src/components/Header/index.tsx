import todoLogo from "assets/todoLogo.svg";
import { AppContext } from "context/appContext";
import { LOCAL_STORAGE_KEY } from "lib/constants";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container } from "@mui/material";
import FormInputs from "./FormInputs";
import styles from "./Header.module.css";

export interface FormState {
  title: string;
  description: string;
}

function HeaderPage() {
  const { tasks, setTasks } = useContext(AppContext);
  const [formState, setFormState] = useState<FormState>({
    title: "",
    description: "",
  });

  const handleAddTask = () => {
    const { title, description } = formState;
    if (title && description) {
      const newTask = {
        id: crypto.randomUUID(),
        title,
        description,
        isChecked: false,
        createdAt: new Date().toLocaleTimeString(),
      };
      setTasks([...tasks, newTask]);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...tasks, newTask])
      );
      setFormState({ title: "", description: "" });
    } else {
      toast.error(
        "Please fill all the fields, title and description cannot be empty."
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask();
  };
  return (
    <Container
      className={styles.header}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "5rem",
      }}
    >
      <img src={todoLogo} srcSet={todoLogo} alt="Todo Logo" loading="lazy" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <FormInputs formState={formState} setFormState={setFormState} />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Container>
  );
}

export default HeaderPage;
