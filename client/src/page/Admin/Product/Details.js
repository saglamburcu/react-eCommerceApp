import { fetchProduct, updateProduct } from "../../../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from 'antd';

function Details() {

  const { product_id } = useParams();
  const [datas, setDatas] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [form, setForm] = useState({ title: "", price: "", description: "" })


  async function getData(id) {
    try {
      const resp = await axios.get(`http://localhost:4000/product/${id}`)

      await setDatas(resp.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getData(product_id)
    setForm({ title: datas.title, price: datas.price, description: datas.description })
  }, [product_id, datas.title, datas.price, datas.description])


  const handleSubmit = async (e) => {
    e.preventDefault();

    message.loading({ content: "Loading...", key: "product_update" })

    try {
      await updateProduct(form, product_id);

      message.success({
        content: "The product successfully updated",
        key: "product_update",
        duration: 2
      });
    } catch (e) {
      message.error("The product does not updated.");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor='title'>Title</FormLabel>
        <Input id='title' name="title" value={form.title} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='price'>Price</FormLabel>
        <Input id='price' name="price" value={form.price} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='description'>Description</FormLabel>
        <Input id='description' name="description" value={form.description} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  )
};

export default Details;