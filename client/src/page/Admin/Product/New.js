import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import axios from "axios";

function New() {

  async function postData(input) {
    await axios.post("http://localhost:4000/product", (input))
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      photos: []
    },
    onSubmit: () => {
      postData(obj);
    }
  });

  const obj = {
    ...values,
    photos: JSON.stringify(values.photos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl >
        <FormLabel htmlFor='title'>Title</FormLabel>
        <Input id='title' name="title" value={values.title} onChange={handleChange} />
      </FormControl>

      <FormControl mt="5">
        <FormLabel htmlFor='price'>Price</FormLabel>
        <Input id='price' name="price" value={values.price} onChange={handleChange} />
      </FormControl>

      <FormControl mt="5">
        <FormLabel htmlFor='description'>Description</FormLabel>
        <Input id='description' name="description" value={values.description} onChange={handleChange} />
      </FormControl>

      <FormControl mt="5">
        <FormLabel htmlFor='photos'>Photos</FormLabel>
        <Input id='photos' name="photos" value={values.photos} onChange={handleChange} />
      </FormControl>

      <Button type="submit" mt="5">Save</Button>
    </form>
  )
};

export default New;