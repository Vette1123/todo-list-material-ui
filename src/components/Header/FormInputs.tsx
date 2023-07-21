import { FormControl, Input, InputLabel } from "@mui/material";

interface Props {
  formState: {
    title: string;
    description: string;
  };
  setFormState: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
    }>
  >;
}

function FormInputs({ formState, setFormState }: Props) {
  return (
    <>
      <FormControl sx={{ m: 1, flexGrow: 1 }} variant="standard">
        <InputLabel htmlFor="create-new-todo-input-title">Title</InputLabel>
        <Input
          id="create-new-todo-input-title"
          placeholder="Todo title"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, flexGrow: 1 }} variant="standard">
        <InputLabel htmlFor="create-new-todo-input-description">
          Description
        </InputLabel>
        <Input
          id="create-new-todo-input-description"
          placeholder="Todo description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
        />
      </FormControl>
    </>
  );
}

export default FormInputs;
