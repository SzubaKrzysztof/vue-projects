<template>
    <div class="modal-body  m-3">
       
        <button type="button" class="close" @click="$emit('close')">
            <span aria-hidden="true">
                <i class="icon-close"></i>
            </span>
        </button>

        <div class="form-box">
            <div class="form-tab">
                <tabs class="nav-pills nav-fill" :data="tabsData"></tabs>
                <div class="tab-content">
                    
                    <!-- LOGIN -->
                    
                    <div class="tab-pane fade show active" id="sign-in">
                        
                        <form @submit.prevent="doLogin">
                            <div class="form-group">
                                <label for="singin-email">Username or email address *</label>
                                <input
                                    v-model="user.username"
                                    type="text"
                                    class="form-control"
                                    id="singin-email"
                                    name="singin-email"
                                    required
                                />
                            </div>

                            <div class="form-group">
                                <label for="singin-password">Password *</label>
                                <input
                                    v-model="user.password"
                                    type="password"
                                    class="form-control"
                                    id="singin-password"
                                    name="singin-password"
                                    required
                                />
                            </div>

                            <div class="form-footer">
                                <button type="submit" class="btn btn-outline-primary-2">
                                    <span>LOG IN</span>
                                    <i class="icon-long-arrow-right"></i>
                                </button>

                                <div class="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="signin-remember"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="signin-remember"
                                    >Remember Me</label>
                                </div>

                                <a href="javascript:;" class="forgot-link">Forgot Your Password?</a>
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
                                 
                                    <a href="javascript:;" class="btn btn-login btn-f">
                                        <i class="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- END LOGIN -->

                    <!-- REGISTER  -->

                        <div class="tab-pane fade " id="sign-in2">
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
                        </div>

                    <!-- END REGISTER -->

                   <!-- REGISTER BUSINES -->

                <div class="tab-pane fade" id="register">
                    <Register/>
                </div>

                    <!-- END REGISTER BUSINES-->

                </div>
            </div>
        </div>
        </div>
    
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import Register from '~/components/elements/modals/Register.vue'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
    components: {
        Register,
        Tabs, 
        VFacebookLogin: () =>
        process.client ? import('vue-facebook-login-component') : null,
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
            // password: {
            //     required,
            //     minLength: minLength(8)
                    
            // }, 
            // password2: {
            //     required,
            //     minLength: minLength(8),
            //     sameAsPassword: sameAs('password')
            // },
            // firstName: {
            //     required
            // },  
            // lastName: {
            //     required
            // },  
            // addres: {
            //     required
            // },  
            // addresCd: {
            //     required
            // },
            // postalCode: {
            //     required
            // },
            // city: {
            //     required
            // },
           
        }
    },
    methods: {
        async doLogin() {
            try{
                this.$vToastify.loader("Please Wait...")
                await this.$store.dispatch('auth/login', this.user)
                this.$router.push('/')
                this.$vToastify.success("Login complete")
            } catch (ex) {
                this.$vToastify.error(ex.message);
            } finally {
                this.$vToastify.stopLoader()
                this.$emit('close')
            }
            
        },
        
    }
};
</script>