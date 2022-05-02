import { string, object, ref } from "yup";

let validations = object({
  email: string().email("Geçerli bir email adresi giriniz").required("Zorunlu alan"),
  password: string().min(5, "Parolanız en az 5 karakterden oluşmalıdır").required("Zorunlu alan"),
  passwordConfirm: string().oneOf([ref("password")], "Parolalar eşleşmiyor").required("Zorunlu alan")
})

export default validations;