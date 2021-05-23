<template>
<Login/>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login';

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>


  <!-- <amplify-authenticator>
    <div>
      My App
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator> -->