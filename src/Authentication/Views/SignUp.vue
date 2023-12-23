<script setup lang="ts">
import { ref } from "vue";
import PageContainer from "@/layouts/default/PageContainer.vue";
import FormContainer from "@/commons/components/FormContainer.vue";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "vue-router";
import SwitchAuthenticationView from "@/Authentication/components/SwitchAuthenticationView.vue";

const router = useRouter();

const email = ref("");
const emailRules = [
  (value: string) => /.+@.+/.test(value) || "Invalid Email address",
];

const password = ref("");
const passwordRules = [
  (value: string) =>
    value.length >= 6 || "Password must be at least 8 characters",
];

const repeatPassword = ref("");
const repeatPasswordRules = [
  (value: string) => value === password.value || "Passwords do not match",
];

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.log(error.message);
    loading.value = false;
    return;
  }

  await router.replace({ name: "Home" });
  loading.value = false;
};
</script>

<template>
  <PageContainer title="Sign up">
    <FormContainer
      submit-button-title="sign up"
      @submit="handleSubmit"
      :loading="loading"
    >
      <v-text-field
        label="Email"
        :rules="emailRules"
        v-model="email"
        required
      />
      <v-text-field
        label="Password"
        :rules="passwordRules"
        v-model="password"
        type="password"
        required
      />
      <v-text-field
        label="Repeat password"
        :rules="repeatPasswordRules"
        v-model="repeatPassword"
        type="password"
        required
      />

      <template #after-submit>
        <SwitchAuthenticationView sign-in />
      </template>
    </FormContainer>
  </PageContainer>
</template>
