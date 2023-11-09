"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginComponect() {
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("กรอกข้อมูลด้วย")
      .email("รูปแบบ email ไม่ถูกต้อง"),
    password: yup
      .string()
      .required("กรอกข้อมูลด้วย")
      .min(3, "รหัสผ่านต้องมากกว่า 3 ตัว"),
  });

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      router.replace("/dashboard");
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            {...register("email")}
            label="Email"
            placeholder="you@mantine.dev"
            error={errors.email && <span>{errors.email.message}</span>}
          />
          <PasswordInput
            {...register("password")}
            label="Password"
            placeholder="Your password"
            mt="md"
            error={errors.password && <span>{errors.password.message}</span>}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl" loading={isSubmitting}>
            login
          </Button>
        </Paper>
      </Container>
    </form>
  );
}
