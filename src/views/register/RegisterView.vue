<template>
  <div class="register-view container d-flex flex-column align-items-center gap-3 w-100">
    <h1 class="__title">Sign Up</h1>

    <template v-for="field in mainFieldsState" :key="field.name">
      <div class="flex-nowrap flex-column w-100">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
        <input
          :type="field.type"
          class="form-control"
          :id="field.name"
          :placeholder="field.placeholder"
        />
      </div>
    </template>

    <hr />

    <template v-for="field in secondaryFieldsState" :key="field.name">
      <div class="flex-nowrap flex-column w-100">
        <template v-if="field.name == 'gender'">
          <label :for="field.name" class="form-label">{{ field.label }}</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </template>
        <template v-else>
          <label :for="field.name" class="form-label">{{ field.label }}</label>
          <input
            :type="field.type"
            class="form-control"
            :id="field.name"
            :placeholder="field.placeholder"
          />
        </template>
      </div>
    </template>

    <button class="btn btn-primary btn-submit">Create an Account</button>

    <div class="__footer">
      Already have an account? <router-link to="/login">Sign in</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { mainFields, secondaryFields } from './lib/fields.ts'

const mainFieldsState = reactive(mainFields)
const secondaryFieldsState = reactive(secondaryFields)

const computedFields = computed<Array<Object>>(() => mainFieldsState)
</script>

<style lang="scss">
.register-view {
  height: 100vh;
  width: 100vw;
  padding: 10px 10px;

  .__title {
    text-align: center;
  }

  .btn-submit {
    margin: 10px 0;
  }

  .__footer {
    padding-bottom: 50px;
  }
}
</style>
