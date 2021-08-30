<template>
    

                     <div>   
                        
                        <form @submit.prevent="submit">
                            
                            
                            <!-- email -->
                            
                            <div class="form-group">
                                <label for="register-email">Your email address *</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="example@example.com"
                                    v-model="user.email"
                                    :class="{ error: $v.user.email.$error }"
                                    id="register-email"
                                    @blur="$v.user.email.$touch()"
                                    name="register-email"
                                    required
                                >
                                <div v-if="$v.user.email.$error">
                                    <p v-if="!$v.user.email.email" class="errorMessage">Please enter a valid email</p>
                                    <p v-if="!$v.user.email.required" class="errorMessage">Email is required</p>
                                </div>
                                                                 
                            </div>

                            <!-- password -->

                            <div class="form-group">
                                <label for="register-password">Password *</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Password"
                                    v-model="user.password"
                                    :class="{ error: $v.user.password.$error }"
                                    id="register-password"
                                    @blur="$v.user.password.$touch()"
                                    name="register-password"
                                    required
                                >
                                <div v-if="$v.user.password.$error">
                                    <p v-if="!$v.user.password.minLength" class="errorMessage">Password must be at least 8 characters</p>
                                    <p v-if="!$v.user.password.required" class="errorMessage">Password is required</p>
                                </div>
                            </div>
            
                            <!-- repeat password -->

                            <div class="form-group">
                                <label for="register-password2">Repeat Password *</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Repeat Password"
                                    v-model="user.password2"
                                    :class="{ error: $v.user.password2.$error }"
                                    id="register-password2"
                                    @blur="$v.user.password2.$touch()"
                                    name="register-password2"
                                    required
                                >
                                <div v-if="$v.user.password2.$error">
                                    <p v-if="!$v.user.password2.sameAsPassword" class="errorMessage">Passwords must the same</p>
                                    <p v-if="!$v.user.password2.required" class="errorMessage">Password is required</p>
                                </div>
                            </div>

                            <!-- First Name -->
                            
                            <div class="form-group">
                                <label for="register-firstName">First Name *</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First Name"
                                    v-model="user.firstName"
                                    :class="{ error: $v.user.firstName.$error }"
                                    id="register-firstName"
                                    @blur="$v.user.firstName.$touch()"
                                    name="register-firstName"
                                    required
                                >
                                <div v-if="$v.user.firstName.$error">
                             <p v-if="!$v.user.firstName.required" class="errorMessage">First Name is required</p>
                                </div>
                            </div>

                            <!-- Last Name -->

                            <div class="form-group">
                                <label for="register-lastName">Last Name *</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Last Name"
                                    v-model="user.lastName"
                                    :class="{ error: $v.user.lastName.$error }"
                                    id="register-lastName"
                                    @blur="$v.user.lastName.$touch()"
                                    name="register-lastName"
                                    required
                                >
                                <div v-if="$v.user.lastName.$error">
                                    <p v-if="!$v.user.lastName.required" class="errorMessage">Last Name is required</p>
                                </div>
                            </div>

                            <!-- Adress -->

                            <div class="form-group">
                                <label for="register-addres">Addres *</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Your Addres"
                                    v-model="user.addres"
                                    :class="{ error: $v.user.addres.$error }"
                                    id="register-addres"
                                    @blur="$v.user.addres.$touch()"
                                    name="register-addres"
                                    required
                                >
                                <div v-if="$v.user.addres.$error">
                                    <p v-if="!$v.user.addres.required" class="errorMessage">Addres is required</p>
                                </div>
                            </div>

                            <!-- Adress cd -->

                            <div class="form-group">
                                <label for="register-addresCd">Addres cd *</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Addres cd"
                                    v-model="user.addresCd"
                                    :class="{ error: $v.user.addresCd.$error }"
                                    id="register-addresCd"
                                    @blur="$v.user.addresCd.$touch()"
                                    name="register-addresCd"
                                    required
                                >
                                      <div v-if="$v.user.addresCd.$error">
                                    <p v-if="!$v.user.addresCd.required" class="errorMessage">Addres is required</p>
                                </div>
                            </div>

                            <!-- Postal code -->

                            <div class="form-group">
                                <label for="register-postalCode">Postal Code *</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Postal Code"
                                    v-model="user.postalCode"
                                    :class="{ error: $v.user.postalCode.$error }"
                                    id="register-postalCode"
                                    @blur="$v.user.postalCode.$touch()"
                                    name="register-postalCode"
                                    required
                                >
                                <div v-if="$v.user.postalCode.$error">
                                    <p v-if="!$v.user.postalCode.required" class="errorMessage">Postal Code is required</p>
                                </div>
                            </div>

                            <!-- City -->

                            <div class="form-group">
                                <label for="register-city">City *</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="City"
                                    v-model="user.city"
                                    :class="{ error: $v.user.city.$error }"
                                    id="register-city"
                                    @blur="$v.user.city.$touch()"
                                    name="register-city"
                                    required
                                >
                                <div v-if="$v.user.city.$error">
                                    <p v-if="!$v.user.city.required" class="errorMessage">City is required</p>
                                </div>
                            </div>

                            <!-- Phone -->

                            <div class="form-group">
                                <label for="register-phone">Your Phone Number</label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    placeholder=" +48 555 555 555"
                                    v-model="user.phone"
                                    id="register-phone"
                                    name="register-phone"
                                    required
                                >
                      
                            </div>

                            <!-- form bootons -->

                            <div class="form-footer">
                                <button :disabled="$v.$anyError" type="submit" class="btn btn-outline-primary-2">
                                    <span>SIGN UP</span>
                                    <i class="icon-long-arrow-right"></i>
                                </button>

                                <div class="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="register-policy"
                                        required
                                    />
                                    <label class="custom-control-label" for="register-policy">
                                        I agree to the
                                        <a href="javascript:;">privacy policy</a> *
                                    </label>
                                </div>
                                    <p v-if="$v.$anyError" class="errorMessage">Please fill out the required fields</p>
                            </div>
                        </form>
                        <div class="form-choice">
                            <p class="text-center">or sign in with</p>
                            <div class="row">
                                <div class="col-sm-6">
                                    <a href="javascript:;" class="btn btn-login btn-g">
                                        <i class="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>

                                <div class="col-sm-6">
                                    <a  href="javascript:;" class="btn btn-login btn-f">
                                        <i class="icon-facebook-f"></i>
                                        
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
// import Tabs from '~/components/elements/Tabs';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
    components: {
        //  Tabs, 
    },
    data: function() {
        return {
            user: {
                email: null,
                password: null,
                password2: null,
                firstName: null,
                lastName: null,
                addres: null,
                addresCd: null,
                postalCode: null,
                city: null,
            },


            tabsData: [
                {
                    id: 'sign-in',
                    title: 'Sign In',
                    active: true
                },
                {
                    id: 'sign-in2',
                    title: 'Sign In2',
                    
                },
                {
                    id: 'register',
                    title: 'Register'
                }
            ]
        };
    },
   
    validations: {
        user:{
            email: { 
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
                    
            }, 
            password2: {
                required,
                minLength: minLength(8),
                sameAsPassword: sameAs('password')
            },
            firstName: {
                required
            },  
            lastName: {
                required
            },  
            addres: {
                required
            },  
            addresCd: {
                required
            },
            postalCode: {
                required
            },
            city: {
                required
            },
           
        }
    },
    methods: {

        submit() {
            this.$v.$touch()
           
                console.log('Form Submission:', this.email)
            
        }
    }
};
</script>
