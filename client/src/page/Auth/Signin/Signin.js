import { Box, Flex, Text, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useContext } from "react";
import validations from "./validations";
import { fetchLogin } from "../../../api";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, bag) => {
      try {
        //console.log(values)
        const loginResponse = await fetchLogin({ email: values.email, password: values.password })
        login(loginResponse);
        navigate("/profile")
      } catch (e) {
        bag.setErrors({ general: e.response.data.message })
      }
    },
    validationSchema: validations
  })


  return (
    <Flex mt="5" width="full" justifyContent="center">
      <Box>
        <Box textAlign="center" fontWeight='semibold'>
          <Text fontSize="3xl">
            Sign In
          </Text>
        </Box>

        <Box mt="5">
          {
            errors.general ? <Alert status="error">{errors.general}</Alert> : ""
          }
        </Box>

        <form onSubmit={handleSubmit}>
          <Box my={5} textAlign="left">
            <FormControl width="full">
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input
                id='email'
                type='email'
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.email && touched.email}
              />
            </FormControl>

            {errors.email && touched.email && <div style={{ color: "red" }}>{errors.email}</div>}

            <FormControl mt="4" width="full">
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.password && touched.password}
              />
            </FormControl>

            {errors.password && touched.password && <div style={{ color: "red" }}>{errors.password}</div>}

          </Box>

          <Button mt="4" width="full" type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </Flex>
  )
};

export default Signin;