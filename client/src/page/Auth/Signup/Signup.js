import { Box, Flex, Text, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useContext } from "react";
import validations from "./validations";
import { fetchRegister } from "../../../api";
import AuthContext from "../../../contexts/AuthContext";

function Signup() {
  const { login } = useContext(AuthContext);

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    onSubmit: async (values, bag) => {
      try {
        //console.log(values)
        const registerResponse = await fetchRegister({ email: values.email, password: values.password })
        login(registerResponse)
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
            Sign Up
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

            <FormControl mt="4" width="full">
              <FormLabel htmlFor='passwordConfirm'>Password Confirm</FormLabel>
              <Input
                id='passwordConfirm'
                type='password'
                name="passwordConfirm"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.passwordConfirm && touched.passwordConfirm}
              />
            </FormControl>

            {errors.passwordConfirm && touched.passwordConfirm && <div style={{ color: "red" }}>{errors.passwordConfirm}</div>}
          </Box>

          <Button mt="4" width="full" type="submit">
            Sign Up
          </Button>
        </form>
      </Box>
    </Flex>
  )
};

export default Signup;