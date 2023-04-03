import { object, string } from "yup";

export const step1Val =object({
    name: string().required().max(5)
})

export const step2Val =object({
    age: string().required().max(3),

})

export const step3Val =object({
    account: string().required().max(16),

})
