<template>
  <div
    class="otp-view container d-flex flex-column justify-content-center align-items-center gap-2"
  >
    <h1 class="__title">OTP Verification</h1>

    <input
      type="text"
      class="form-control"
      id="code"
      placeholder="Enter OTP Code"
    />

    <button class="btn btn-secondary w-100">Resend Code</button>
    <button class="btn btn-primary w-100">Confirm</button>

    <p class="__note">*Please check your inbox (SMS) and fill with attached code</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.otp-view {
  height: 100vh;
  width: 100vw;
  padding: 10px;

  .__note {
    text-align: center;
    font-size: 12px;
    font-weight: bold
  }
}
</style>
