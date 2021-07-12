<template>
  <form @submit.prevent="submit">
    <input
      type="email"
      placeholder="What's your email"
      v-model="email"
      :class="{ error: $v.email.$error }"
      @blur="$v.email.$touch()"
    >
    <div v-if="$v.email.$error">
        <p v-if="!$v.email.email" class="errorMessage">Please enter a valid email</p>
        <p v-if="!$v.email.required" class="errorMessage">Email is required</p>
      </div>

    <input 
      id="password" 
      :class="{ error: $v.password.$error }"
      v-model="$v.formResponses.password.$model" 
      @blur="$v.email.$touch()"
    
      type="text"
     >

     <div v-if="$v.password.$error">
        <p v-if="!$v.password.password" class="errorMessage">Please enter a valid password</p>
        <p v-if="!$v.password.required" class="errorMessage">Password is required</p>
        <p v-if="!$v.password.minLength" class="errorMessage">Password must be at least 8 characters</p>
      </div>

//    v-model.lazy  -- zadziała po przestaniu pisania. 

    <button :disabled="$v.$invalid" type="submit">Submit</button>
    <p v-if="$v.$anyError" class="errorMessage">Please fill out the required fields</p>
  </form>
</template>

<script>











import { required, minLength ,email } from 'vuelidate/lib/validators'

export default {
    data() {
      return {
        email: null,
        password: '',
        name: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password1: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        }
      },
      name: {
        required,
        minLength: minLength(3)
    },
    methods: {
      submit() {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          console.log('Form Submission:', this.email)
        }
      }
    }
  }
}

// <template>
//   <div id="app">
//     <section>
//       <label for="fname">Name*</label>
//       <input id="fname" v-model="$v.formResponses.name.$model" type="text">
//       <p class="error" v-if="!$v.formResponses.name.required">this field is required</p>
//       <p
//         class="error"
//         v-if="!$v.formResponses.name.minLength"
//       >Field must have at least {{ $v.formResponses.name.$params.minLength.min }} characters.</p>
//     </section>
//     <section>
//       <label for="femail">Email*</label>
//       <input id="femail" v-model="$v.formResponses.email.$model" type="email">
//       <p class="error" v-if="!$v.formResponses.email.required">this field is required</p>
//       <p class="error" v-if="!$v.formResponses.email.email">Needs to be a valid email.</p>
//     </section>
//     <section>
//       <label for="fpass1">Password*</label>
//       <input id="fpass1" v-model="$v.formResponses.password1.$model" type="password">
//       <p class="error" v-if="!$v.formResponses.password1.required">this field is required</p>
//       <p
//         class="error"
//         v-if="!$v.formResponses.password1.strongPassword"
//       >Strong passwords need to have a letter, a number, a special character, and be more than 8 characters long.</p>
//     </section>
//     <section>
//       <label for="fpass2">Please re-type your Password</label>
//       <input id="fpass2" v-model="$v.formResponses.password2.$model" type="password">
//       <p class="error" v-if="!$v.formResponses.password2.required">this field is required</p>
//       <p class="error" v-if="!$v.formResponses.password2.sameAsPassword">The passwords do not match.</p>
//     </section>
//   </div>
// </template>

// <script>
// import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

// export default {
//   data() {
//     return {
//       formResponses: {
//         name: null,
//         email: null,
//         password1: null,
//         password2: null
//       }
//     };
//   },
//   validations: {
//     formResponses: {
//       name: {
//         required,
//         minLength: minLength(3)
//       },
//       email: {
//         required,
//         email
//       },
//       password1: {
//         required,
//         strongPassword(password1) {
//           return (
//             /[a-z]/.test(password1) && //checks for a-z
//             /[0-9]/.test(password1) && //checks for 0-9
//             /\W|_/.test(password1) && //checks for special char
//             password1.length >= 8
//           );
//         }
//       },
//       password2: {
//         required,
//         sameAsPassword: sameAs("password1")
//       }
//     }
//   }
// };
// </script>

// <style>
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// .error {
//   color: red;
// }
// </style>

